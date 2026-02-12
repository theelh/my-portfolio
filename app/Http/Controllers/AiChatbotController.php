<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\HuggingFaceService;
use Illuminate\Support\Facades\Log;

class AiChatbotController extends Controller
{
    protected HuggingFaceService $hf;

    public function __construct(HuggingFaceService $hf)
    {
        $this->hf = $hf;
    }

    /**
     * Handle chatbot message
     */
    public function sendMessage(Request $request)
{
    $request->validate([
        'message' => 'required|string|max:1000',
    ]);

    Log::info("🤖 Public Chatbot request received", [
        'ip' => $request->ip(),
        'message' => $request->message
    ]);

    try {

        // Call HuggingFace service
        $response = $this->hf->chatbotText($request->message);

        Log::info("🤖 Chatbot HF response", $response);

        return response()->json([
            'success' => true,
            'reply' => $response['reply'],
        ]);

    } catch (\Throwable $e) {

        Log::error("💥 Chatbot error", [
            'error' => $e->getMessage(),
        ]);

        return response()->json([
            'success' => false,
            'reply' => "Impossible to contact the assistant."
        ], 500);
    }
}

}
