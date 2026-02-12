import { X } from "lucide-react";
import React, { useState } from "react";

interface Message {
  sender: "user" | "bot";
  message: string;
}

interface Props {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);




  // -----------------------------
  // 🔵 Send Message
  // -----------------------------
  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  // Add user message to UI
  setMessages((prev) => [
    ...prev,
    { sender: "user", message: userMessage },
  ]);

  setInput("");
  setLoading(true);

  try {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        message: data.reply || "No response from server.",
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        message: "Something went wrong.",
      },
    ]);
  }

  setLoading(false);
};




  return (
    <div className="fixed bottom-24 right-6 w-96 h-80 bg-black/80 shadow-2xl rounded-xl border flex z-50 animate-fadeIn">
      <div className="flex flex-col flex-1 font-sans">

        {/* Header */}
        <div className="p-4 bg-[#11001c] text-[#00ff00] rounded-t-xl flex justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Assistant</span>
          </div>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "ml-auto bg-[#c0c0c0] text-[#11001c]"
                  : "mr-auto bg-[#11001c] text-[#00ff00]"
              }`}
            >
              {msg.message}
            </div>
          ))}

          {loading && (
            <div className="mr-auto bg-[#11001c] text-[#00ff00] p-2 rounded-lg">
              Assistant is typing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t mx-auto flex gap-2">
          <input
            className="flex-1 text-[#00ff00] border rounded-lg px-3 py-2 text-sm placeholder:text-[#00ff00]"
            placeholder="Write a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}
            className="bg-[#11001c] text-[#00ff00] px-4 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
