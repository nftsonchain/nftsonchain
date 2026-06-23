"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import SidePanel from "@/components/SidePanel";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is NFTs OnChain?",
    answer:
      "NFTs OnChain is a cross-chain NFT discovery hub where users can explore, learn about, and submit NFT collections across multiple blockchains. Our mission is to make NFT discovery accessible and educational.",
  },
  {
    question: "How do I like or favorite collections?",
    answer:
      "Sign in to your account and click the thumbs up icon to like a collection or the heart icon to add it to your favorites. Both features are only available to authenticated users.",
  },
  {
    question: "How do I submit my NFT collection?",
    answer:
      "Go to the Submit page and fill out the collection information. Our team will review your submission and it will appear on the platform if approved. You can track the status of your submissions in your profile.",
  },
  {
    question: "What chains are supported?",
    answer:
      "We support Ethereum, Solana, Bitcoin, Cosmos, TON, XRP, Polygon, Base, and Cardano. More chains are coming soon!",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Our AI assistant is powered by OpenAI and provides educational information about NFTs, blockchain, and Web3. Note that conversations are not saved and disappear when you refresh the page.",
  },
  {
    question: "Do you offer financial advice?",
    answer:
      "No, we do not provide financial, investment, or trading advice. We focus on education and culture. Always conduct your own research before making decisions.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Join our Discord community for support and discussions. You can find the link in the footer or the sidebar menu.",
  },
  {
    question: "Is my data stored?",
    answer:
      "We store your profile information and preferences (likes, favorites). AI conversations are NOT stored. All data is kept secure on our MongoDB database.",
  },
];

export default function HelpPage() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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

      <div className="max-w-3xl mx-auto px-4 py-8 pb-32">
        <h1 className="text-3xl font-bold mb-2 text-[#FFCC00]">Help Center</h1>
        <p className={`mb-8 ${dark ? "text-white/60" : "text-black/60"}`}>
          Find answers to common questions about NFTs OnChain
        </p>

        {/* FAQ Section */}
        <div className="space-y-3 mb-12">
          {FAQS.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg border transition ${
                dark
                  ? "border-white/10 hover:border-white/20"
                  : "border-black/10 hover:border-black/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-4 flex items-center justify-between font-semibold transition ${
                  activeIndex === index
                    ? dark
                      ? "bg-white/5"
                      : "bg-black/5"
                    : ""
                }`}
              >
                <span className="text-left text-[#FFCC00]">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div
                  className={`p-4 border-t ${
                    dark
                      ? "border-white/10 bg-white/5 text-white/80"
                      : "border-black/10 bg-black/5 text-black/80"
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div
          className={`rounded-lg p-6 ${dark ? "bg-white/5" : "bg-black/5"}`}
        >
          <h2 className="text-xl font-bold mb-4 text-[#FFCC00]">
            Still Need Help?
          </h2>
          <p className={`mb-4 ${dark ? "text-white/80" : "text-black/80"}`}>
            Join our community to get help from the team and other NFT enthusiasts.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://discord.gg/WvtMNVQjcw"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                dark
                  ? "bg-[#FFCC00] text-black hover:bg-[#FFEE00]"
                  : "bg-[#FFCC00] text-black hover:bg-[#FFEE00]"
              }`}
            >
              Join Discord
            </a>
            <a
              href="https://x.com/nfts_onchain"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-semibold transition border ${
                dark
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-black/20 text-black hover:bg-black/10"
              }`}
            >
              Follow on X
            </a>
          </div>
        </div>
      </div>

      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} dark={dark} />
      <BottomNav dark={dark} />
    </main>
  );
}
