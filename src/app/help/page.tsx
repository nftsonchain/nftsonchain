"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
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
  const { dark } = useTheme();
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
          ? "bg-[#0B0F1A] text-white h-screen overflow-y-scroll"
          : "bg-white text-black h-screen overflow-y-scroll"
      }
    >
      <Navbar
        onMenuClick={() => setMenuOpen(true)}
        search={search}
        setSearch={setSearch}
      />

      {/* CENTERED MAIN CONTAINER */}
      <div className="w-full flex justify-center px-6 md:px-10 py-14 min-h-full">
        <div className="w-full max-w-5xl pb-56">

          {/* HEADER */}
          <div className="mb-14 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-[#FFCC00] tracking-tight">
              Help Center
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                dark ? "text-white/65" : "text-black/65"
              }`}
            >
              Find answers to common questions about NFTs OnChain, platform
              usage, supported chains, submissions, AI assistant, and more.
            </p>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-6 mb-20">
            {FAQS.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-white/20"
                    : "border-black/10 bg-black/[0.03] hover:border-black/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-8 py-7 flex items-center justify-between transition ${
                    activeIndex === index
                      ? dark
                        ? "bg-white/5"
                        : "bg-black/5"
                      : ""
                  }`}
                >
                  <span className="text-left text-[#FFCC00] text-2xl font-semibold leading-relaxed">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-7 h-7 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeIndex === index && (
                  <div
                    className={`px-8 py-7 border-t text-lg leading-relaxed ${
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

          {/* SUPPORT SECTION */}
          <div
            className={`rounded-2xl p-10 backdrop-blur-xl border mb-20 ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-5 text-[#FFCC00]">
              Still Need Help?
            </h2>

            <p
              className={`text-lg mb-8 max-w-3xl leading-relaxed ${
                dark ? "text-white/80" : "text-black/80"
              }`}
            >
              Join our community to get support from the team and connect with
              other NFT collectors, creators, and Web3 builders.
            </p>

            <div className="flex gap-5 flex-wrap">
              <a
                href="https://discord.gg/WvtMNVQjcw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl font-semibold text-lg bg-[#FFCC00] text-black hover:bg-[#FFEE00] transition"
              >
                Join Discord
              </a>

              <a
                href="https://x.com/nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-4 rounded-xl font-semibold text-lg border transition ${
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