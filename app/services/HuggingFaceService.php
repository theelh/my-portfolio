<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class HuggingFaceService
{
    protected Client $client;
    protected string $apiKey;
    protected string $baseUrl;

    public function __construct(){
        $this->apiKey = env('HUGGINGFACE_API_KEY');
        $this->baseUrl = config('services.huggingface.url') ?? 'https://router.huggingface.co/hf-inference';
        $this->client = new Client([
            'base_uri' => $this->baseUrl,
            'headers' => [
                'Authorization' => "Bearer {$this->apiKey}",
                'Accept' => 'application/json'
            ],
            'timeout' => 60
        ]);
    }

    /**
     * Call a Hugging Face model
     *
     * @param string $model Model name (e.g., "gpt2")
     * @param array $inputs Input data
     * @return array
     */

    // Speech to text: upload file and call model (e.g. openai/whisper or facebook/wav2vec)
    public function chatbotText(string $message)
{
    try {
        if (empty(trim($message))) {
            Log::warning('⚠️ Empty chat message.');
            return ['reply' => null, 'model' => 'chat-llama-3', 'raw' => []];
        }

        $model = "meta-llama/Llama-3.1-8B-Instruct";
        $url   = "https://router.huggingface.co/v1/chat/completions";

        Log::info("🤖 Sending chatbot request", [
            'payload' => [
                'model' => $model,
                'messages' => [
                    ['role' => 'user', 'content' => $message]
                ]
            ]
        ]);

        // ------------- 🔥 IMPORTANT -------------
        // Hugging Face Router uses Bearer token, not username:password
        // -----------------------------------------
        $res = $this->client->post($url, [
            'headers' => [
                "Authorization" => "Bearer " . $this->apiKey,
                "Content-Type"  => "application/json",
                "Accept"        => "application/json",
            ],
            'json' => [
                "model" => $model,
                "messages" => [
                    ['role' => 'user', 'content' => $message]
                ]
            ]
        ]);

        $body = (string) $res->getBody();
        $json = json_decode($body, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            Log::error("🧩 JSON decode failed: " . json_last_error_msg());
            return ['reply' => null, 'model' => $model, 'raw' => []];
        }

        // HF Chat response format
        $reply = $json['choices'][0]['message']['content'] ?? null;

        return [
            "reply" => $reply,
            "model" => $model,
            "raw"   => $json,
        ];

    } catch (\Exception $e) {
        Log::error("🔥 Chatbot request failed: " . $e->getMessage());

        return [
            "reply" => "I cannot reach the assistant right now.",
            "model" => "chat-llama-3",
            "raw"   => []
        ];
    }
}

}
