"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import { ChevronDown, MessageSquare, ShieldCheck, Mail, HelpCircle } from "lucide-react";

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
  const { dark } = useTheme();
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const pageBg = dark
    ? "bg-[#0B0F1A] text-white h-screen overflow-y-scroll"
    : "bg-[#FAFAFA] text-black h-screen overflow-y-scroll";

  const cardStyle = dark
    ? "border-white/10 bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
    : "border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]";

  return (
    <main className={pageBg}>
      <Navbar search={search} setSearch={setSearch} />

      <div className="w-full flex justify-center px-6 md:px-10 py-16 min-h-full">
        <div className="w-full max-w-4xl pb-56">
          
          {/* HEADER */}
          <div className="mb-14 text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 text-xs font-bold text-[#FFCC00] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Support & FAQ</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
              How can we <span className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 bg-clip-text text-transparent">help you</span>?
            </h1>
            <p className={`text-sm ${dark ? "text-white/60" : "text-black/60"}`}>
              Find immediate answers regarding multi-chain integration, community features, user submission validation, and educational tools.
            </p>
          </div>

          {/* FAQ ACCORDION SECTION */}
          <div className="space-y-4 mb-16">
            {FAQS.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${cardStyle} ${
                    isOpen ? "ring-1 ring-[#FFCC00]/20" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition hover:bg-[#FFCC00]/[0.02]"
                  >
                    <span className={`font-semibold text-sm md:text-base transition-colors duration-200 ${
                      isOpen ? "text-[#FFCC00]" : dark ? "text-white" : "text-black"
                    }`}>
                      {item.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#FFCC00]" : dark ? "text-white/40" : "text-black/40"
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 border-t" : "max-h-0 opacity-0 pointer-events-none"
                    } ${dark ? "border-white/5" : "border-black/5"}`}
                  >
                    <div className={`px-6 py-5 text-sm leading-relaxed ${dark ? "text-white/70" : "text-black/70"}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMMUNITY SUPPORT BANNER */}
          <div className={`rounded-2xl p-8 border ${cardStyle} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight text-[#FFCC00]">
                Still have questions?
              </h2>
              <p className={`text-xs max-w-lg leading-relaxed ${dark ? "text-white/60" : "text-black/60"}`}>
                Our builders and curators are available on community channels. Connect with other collectors to discuss new listings and multi-chain updates.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://discord.gg/WvtMNVQjcw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-xs bg-[#FFCC00] text-black hover:bg-[#FFEE00] transition-all duration-200 shadow-md shadow-[#FFCC00]/5"
              >
                Join Discord
              </a>

              <a
                href="https://x.com/nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3 rounded-xl font-bold text-xs border transition-all duration-200 ${
                  dark
                    ? "border-white/10 text-white hover:bg-white/5"
                    : "border-black/10 text-black hover:bg-black/5"
                }`}
              >
                Follow on X
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}