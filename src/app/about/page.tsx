"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import SidePanel from "@/components/SidePanel";
import { Zap, Search, BookOpen, Share2, Heart, Lightbulb } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover",
    description: "Explore thousands of NFT collections across multiple blockchains",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Learn",
    description: "Get educated about NFTs through our AI assistant and resources",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Share",
    description: "Submit and share your favorite NFT projects with the community",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Engage",
    description: "Like collections and add favorites to build your personal collection",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Explore",
    description: "Understand blockchain ecosystems and NFT culture across chains",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Connect",
    description: "Join the global NFT community and connect with like-minded enthusiasts",
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
  const [dark, setDark] = useState(true);
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
        dark={dark}
        setDark={setDark}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 pb-32">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#FFCC00]">About NFTs OnChain</h1>
          <p className={`text-lg ${dark ? "text-white/80" : "text-black/80"}`}>
            Discover the future of NFT exploration, education, and community.
          </p>
        </div>

        {/* Mission Section */}
        <div
          className={`p-8 rounded-lg mb-12 ${dark ? "bg-white/5" : "bg-black/5"}`}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FFCC00]">Our Mission</h2>
          <p className={`text-lg leading-relaxed ${dark ? "text-white/80" : "text-black/80"}`}>
            NFTs OnChain is a cross-chain NFT discovery and education platform built to
            help users explore NFT culture, learn blockchain concepts, and connect with
            the global NFT community. We believe that NFTs are more than just digital
            art—they represent culture, community, and innovation across multiple
            blockchains.
          </p>
        </div>

        {/* Vision Section */}
        <div
          className={`p-8 rounded-lg mb-12 ${dark ? "bg-white/5" : "bg-black/5"}`}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FFCC00]">Our Vision</h2>
          <p className={`text-lg leading-relaxed ${dark ? "text-white/80" : "text-black/80"}`}>
            To become the leading NFT discovery platform where users can explore,
            understand, and engage with NFT projects across all major blockchains.
            We envision a world where NFT discovery is fast, simple, educational, and
            accessible to everyone.
          </p>
        </div>

        {/* What We're Not */}
        <div
          className={`p-8 rounded-lg mb-12 border ${
            dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FFCC00]">What We're NOT</h2>
          <ul className={`space-y-2 text-lg ${dark ? "text-white/80" : "text-black/80"}`}>
            <li>❌ We are NOT an NFT marketplace</li>
            <li>❌ We do NOT execute trades or transactions</li>
            <li>❌ We do NOT provide financial or investment advice</li>
            <li>❌ We do NOT offer trading signals or price predictions</li>
            <li>❌ We are NOT a wallet or payment platform</li>
          </ul>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#FFCC00]">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border transition ${
                  dark
                    ? "border-white/10 hover:border-white/20 bg-white/5"
                    : "border-black/10 hover:border-black/20 bg-black/5"
                }`}
              >
                <div className="mb-4 text-[#FFCC00]">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">
                  {feature.title}
                </h3>
                <p className={`text-sm ${dark ? "text-white/70" : "text-black/70"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Chains */}
        <div
          className={`p-8 rounded-lg mb-12 ${dark ? "bg-white/5" : "bg-black/5"}`}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#FFCC00]">Supported Blockchains</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SUPPORTED_CHAINS.map((chain) => (
              <div
                key={chain}
                className={`p-3 rounded-lg text-center font-semibold ${
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

        {/* Why Choose Us */}
        <div
          className={`p-8 rounded-lg mb-12 border-l-4 border-[#FFCC00] ${
            dark ? "bg-white/5" : "bg-black/5"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FFCC00]">Why Choose NFTs OnChain?</h2>
          <ul className={`space-y-3 text-lg ${dark ? "text-white/80" : "text-black/80"}`}>
            <li>⚡ <strong>Fast & Lightweight:</strong> Optimized for speed and performance</li>
            <li>🌍 <strong>Cross-Chain Support:</strong> Explore NFTs across multiple blockchains</li>
            <li>🎓 <strong>Educational:</strong> Learn about blockchain and NFTs with our AI assistant</li>
            <li>🤝 <strong>Community-Driven:</strong> Submit and share your favorite collections</li>
            <li>🔒 <strong>Secure:</strong> No financial transactions or sensitive data storage</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div
          className={`p-6 rounded-lg mb-8 border ${
            dark
              ? "border-yellow-500/30 bg-yellow-500/10"
              : "border-yellow-600/30 bg-yellow-100"
          }`}
        >
          <h3 className={`font-semibold mb-2 ${dark ? "text-yellow-400" : "text-yellow-700"}`}>
            ⚠️ Important Disclaimer
          </h3>
          <p
            className={`text-sm ${
              dark ? "text-yellow-300/80" : "text-yellow-700/80"
            }`}
          >
            NFTs OnChain provides NFT discovery and educational content only. Nothing on
            this platform constitutes financial, investment, legal, or trading advice.
            Always conduct your own research (DYOR) before making decisions. The crypto
            market is volatile and risky.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className={`mb-4 text-lg ${dark ? "text-white/80" : "text-black/80"}`}>
            Ready to explore the NFT world?
          </p>
          <a
            href="/"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition ${
              dark
                ? "bg-[#FFCC00] text-black hover:bg-[#FFEE00]"
                : "bg-[#FFCC00] text-black hover:bg-[#FFEE00]"
            }`}
          >
            Start Exploring
          </a>
        </div>
      </div>

      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} dark={dark} />
      <BottomNav dark={dark} />
    </main>
  );
}
