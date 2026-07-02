"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader } from "lucide-react";
import { useTheme } from "@/context/theme-context";
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
  "What is Minting?",
  "What is Metadata?",
  "What is Blockchain?",
  "What is Grail?",
  "What is Rarity?",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { dark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim()) return;

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
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Something went wrong. Please try again.",
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
      />

      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl flex flex-col items-center">

          {/* HERO */}
          <div className="text-center mb-8 space-y-4 w-full">
            <h1 className="text-4xl font-bold text-[#FFCC00] tracking-tight">
              NFTs OnChain AI
            </h1>

            <p
              className={`text-lg ${
                dark ? "text-white/75" : "text-black/75"
              }`}
            >
              Ask me anything about NFTs (not blockchain or Web3 in general)
            </p>

            <p
              className={`text-base leading-8 max-w-2xl mx-auto ${
                dark ? "text-white/60" : "text-black/60"
              }`}
            >
              Hey, I’m the NFTs OnChain AI assistant and here to help you
              about NFTs. Ask me anything about NFT.
            </p>
          </div>

          {/* QUICK QUESTIONS */}
          <div className="mb-4 space-y-5 w-full">
            <p
              className={`text-base font-medium ${
                dark ? "text-white/65" : "text-black/65"
              }`}
            >
              Quick Questions
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className={`px-5 py-2.5 rounded-full text-base transition backdrop-blur-xl border ${
                    dark
                      ? "bg-white/10 border-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 border-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* CHAT AREA */}
          <div
            className={`w-full min-h-[140px] rounded-[24px] p-5 mb-1 overflow-y-auto space-y-5 backdrop-blur-2xl border ${
              dark
                ? "bg-white/8 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-[#FFCC00] text-black"
                      : dark
                      ? "bg-white/10 text-white"
                      : "bg-black/10 text-black"
                  }`}
                >
                  <p className="text-base leading-7">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className={`p-3 rounded-2xl ${
                    dark ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  <Loader className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT BAR */}
          <div
            className={`w-full rounded-full px-4 py-3 flex items-center gap-3 border backdrop-blur-2xl shadow-lg ${
              dark
                ? "bg-white/10 border-white/10"
                : "bg-black/10 border-black/10"
            }`}
          >
            <input
              type="text"
              placeholder="Ask anything about NFTs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  handleSendMessage();
                }
              }}
              disabled={loading}
              className={`flex-1 bg-transparent outline-none px-4 text-base ${
                dark
                  ? "text-white placeholder-white/50"
                  : "text-black placeholder-black/50"
              }`}
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !input.trim()}
              className="w-12 h-12 rounded-full bg-[#FFCC00] flex items-center justify-center text-black hover:scale-105 transition shadow-lg shadow-yellow-500/20 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      <SidePanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        dark={dark}
      />

      <BottomNav dark={dark} />
    </main>
  );
}