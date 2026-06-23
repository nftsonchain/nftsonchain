"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader } from "lucide-react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import SidePanel from "@/components/SidePanel";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const QUICK_QUESTIONS = [
  "What is an NFT?",
  "What is Metadata?",
  "What is Minting?",
  "What is Blockchain?",
  "Explain Smart Contracts",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey! 👋 I'm the NFTs OnChain AI Assistant. I'm here to help you learn about NFTs, blockchain, and Web3. Ask me anything about these topics!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Sorry, I encountered an error. Please try again. Make sure the OpenAI API is configured.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={
        dark
          ? "bg-[#0B0F1A] text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar
        onMenuClick={() => setMenuOpen(true)}
        search={search}
        setSearch={setSearch}
        dark={dark}
        setDark={setDark}
      />

      <div className="max-w-3xl mx-auto px-4 py-6 pb-32">
        <h1 className="text-3xl font-bold mb-2 text-[#FFCC00]">NFTs OnChain AI</h1>
        <p className={`mb-8 ${dark ? "text-white/60" : "text-black/60"}`}>
          Ask me anything about NFTs, blockchain, and Web3
        </p>

        {/* Messages Container */}
        <div
          className={`rounded-lg p-4 mb-6 h-96 overflow-y-auto space-y-4
          ${dark ? "bg-white/5" : "bg-black/5"}`}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                  msg.role === "user"
                    ? dark
                      ? "bg-[#FFCC00] text-black"
                      : "bg-[#FFCC00] text-black"
                    : dark
                      ? "bg-white/10"
                      : "bg-black/10"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className={`p-3 rounded-lg ${dark ? "bg-white/10" : "bg-black/10"}`}>
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="mb-6">
            <p className={`text-sm mb-3 ${dark ? "text-white/60" : "text-black/60"}`}>
              Quick Questions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className={`p-2 rounded-lg text-sm font-medium transition ${
                    dark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSendMessage();
              }
            }}
            disabled={loading}
            className={`flex-1 p-3 rounded-lg border transition ${
              dark
                ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                : "bg-black/10 border-black/20 text-black placeholder-black/50"
            } disabled:opacity-50`}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !input.trim()}
            className={`p-3 rounded-lg transition ${
              dark
                ? "bg-[#FFCC00] text-black hover:bg-[#FFEE00] disabled:opacity-50"
                : "bg-[#FFCC00] text-black hover:bg-[#FFEE00] disabled:opacity-50"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <p
          className={`text-xs mt-4 text-center ${
            dark ? "text-white/40" : "text-black/40"
          }`}
        >
          💡 Note: Conversations are not saved. Refresh to start a new chat.
        </p>
      </div>

      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} dark={dark} />
      <BottomNav dark={dark} />
    </main>
  );
}
