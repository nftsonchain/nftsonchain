"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import SidePanel from "@/components/SidePanel";
import {
  Zap,
  Search,
  BookOpen,
  Share2,
  Heart,
  Lightbulb,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <Search className="w-10 h-10" />,
    title: "Discover",
    description:
      "Explore thousands of NFT collections across multiple blockchains",
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Learn",
    description:
      "Get educated about NFTs through our AI assistant and resources",
  },
  {
    icon: <Share2 className="w-10 h-10" />,
    title: "Share",
    description:
      "Submit and share your favorite NFT projects with the community",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Engage",
    description:
      "Like collections and add favorites to build your personal collection",
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Explore",
    description:
      "Understand blockchain ecosystems and NFT culture across chains",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Connect",
    description:
      "Join the global NFT community and connect with like-minded enthusiasts",
  },
];

const SUPPORTED_CHAINS = [
  "Ethereum",
  "Solana",
  "Bitcoin",
  "Cosmos",
  "TON",
  "XRP",
  "Polygon",
  "Base",
  "Cardano",
];

export default function AboutPage() {
  const { dark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

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

      {/* EXPANDED MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 py-16 pb-36">
        {/* HEADER */}
        <div className="mb-20 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 text-[#FFCC00] tracking-tight">
            About NFTs OnChain
          </h1>

          <p
            className={`text-2xl leading-relaxed ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            Discover the future of NFT exploration, education, and community.
          </p>
        </div>

        {/* MISSION */}
        <div
          className={`p-12 rounded-2xl mb-16 ${
            dark ? "bg-white/5" : "bg-black/5"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#FFCC00]">
            Our Mission
          </h2>

          <p
            className={`text-xl leading-loose ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            NFTs OnChain is a cross-chain NFT discovery and education platform
            built to help users explore NFT culture, learn blockchain concepts,
            and connect with the global NFT community. We believe NFTs are more
            than digital art — they represent culture, community, and innovation.
          </p>
        </div>

        {/* VISION */}
        <div
          className={`p-12 rounded-2xl mb-16 ${
            dark ? "bg-white/5" : "bg-black/5"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#FFCC00]">
            Our Vision
          </h2>

          <p
            className={`text-xl leading-loose ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            To become the leading NFT discovery platform where users can
            explore, understand, and engage with NFT projects across all major
            blockchains.
          </p>
        </div>

        {/* WHAT WE ARE NOT */}
        <div
          className={`p-12 rounded-2xl mb-16 border ${
            dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#FFCC00]">
            What We're NOT
          </h2>

          <ul
            className={`space-y-5 text-xl ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            <li>❌ We are NOT an NFT marketplace</li>
            <li>❌ We do NOT execute trades or transactions</li>
            <li>❌ We do NOT provide financial advice</li>
            <li>❌ We do NOT offer trading signals</li>
            <li>❌ We are NOT a wallet platform</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-[#FFCC00]">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition ${
                  dark
                    ? "border-white/10 hover:border-white/20 bg-white/5"
                    : "border-black/10 hover:border-black/20 bg-black/5"
                }`}
              >
                <div className="mb-6 text-[#FFCC00]">{feature.icon}</div>

                <h3 className="text-2xl font-semibold mb-4 text-[#FFCC00]">
                  {feature.title}
                </h3>

                <p
                  className={`text-lg leading-relaxed ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPORTED CHAINS */}
        <div
          className={`p-12 rounded-2xl mb-20 ${
            dark ? "bg-white/5" : "bg-black/5"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#FFCC00]">
            Supported Blockchains
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SUPPORTED_CHAINS.map((chain) => (
              <div
                key={chain}
                className={`p-5 rounded-xl text-center text-xl font-semibold ${
                  dark
                    ? "bg-white/10 text-[#FFCC00]"
                    : "bg-black/10 text-[#FFCC00]"
                }`}
              >
                {chain}
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div
          className={`p-12 rounded-2xl mb-20 border-l-4 border-[#FFCC00] ${
            dark ? "bg-white/5" : "bg-black/5"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#FFCC00]">
            Why Choose NFTs OnChain?
          </h2>

          <ul
            className={`space-y-5 text-xl ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            <li>⚡ Fast & Lightweight</li>
            <li>🌍 Cross-Chain Support</li>
            <li>🎓 Educational AI Assistant</li>
            <li>🤝 Community-Driven Discovery</li>
            <li>🔒 Secure and Non-Custodial</li>
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div
          className={`p-8 rounded-2xl mb-14 border ${
            dark
              ? "border-yellow-500/30 bg-yellow-500/10"
              : "border-yellow-600/30 bg-yellow-100"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-4 ${
              dark ? "text-yellow-400" : "text-yellow-700"
            }`}
          >
            ⚠ Important Disclaimer
          </h3>

          <p
            className={`text-lg leading-relaxed ${
              dark ? "text-yellow-300/80" : "text-yellow-700/80"
            }`}
          >
            NFTs OnChain provides educational content only. Nothing here is
            financial, legal, or investment advice. Always DYOR.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <p
            className={`mb-6 text-2xl ${
              dark ? "text-white/80" : "text-black/80"
            }`}
          >
            Ready to explore the NFT world?
          </p>

          <a
            href="/"
            className="inline-block px-10 py-5 rounded-xl font-semibold text-xl bg-[#FFCC00] text-black hover:bg-[#FFEE00] transition"
          >
            Start Exploring
          </a>
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