"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import {
  Zap,
  Search,
  BookOpen,
  Share2,
  Heart,
  Lightbulb,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Globe2,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <Search className="w-6 h-6 text-[#FFCC00]" />,
    title: "Cross-Chain Discovery",
    description: "Explore collections and creators across all major blockchains in a unified space.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#FFCC00]" />,
    title: "Educational Hub",
    description: "Understand blockchain networks, mechanisms, and key concepts through our interactive resources.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-[#FFCC00]" />,
    title: "Creator Submissions",
    description: "Submit, feature, and showcase new NFT collections to a global community of collectors.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#FFCC00]" />,
    title: "Personalized Spaces",
    description: "Organize collections, like favorite projects, and track items without custodian issues.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-[#FFCC00]" />,
    title: "Insightful Assistant",
    description: "Converse with our built-in assistant to parse complicated Web3 structures in seconds.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#FFCC00]" />,
    title: "Lightweight Engine",
    description: "No heavy integrations or transactions. Pure discovery at blazing fast speeds.",
  },
];

const SUPPORTED_CHAINS = [
  "Ethereum",
  "Solana",
  "Bitcoin",
  "Cosmos",
  "TON",
  "XRP Ledger",
  "Polygon",
  "Base",
  "Cardano",
];

export default function AboutPage() {
  const { dark } = useTheme();
  const [search, setSearch] = useState("");

  const pageBg = dark
    ? "bg-[#0B0F1A] text-white min-h-screen"
    : "bg-[#FAFAFA] text-black min-h-screen";

  const cardStyle = dark
    ? "border-white/10 bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
    : "border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]";

  return (
    <main className={pageBg}>
      <Navbar search={search} setSearch={setSearch} />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 pb-36">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 text-xs font-bold text-[#FFCC00] uppercase tracking-wider">
            <span>About The Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
            Welcome to <span className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 bg-clip-text text-transparent">NFTs OnChain</span>
          </h1>
          <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-white/60" : "text-black/60"}`}>
            We build the clean discovery Layer for the cross-chain NFT ecosystem. No wallets required. No complex setups. Just smooth exploration.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`p-8 rounded-2xl border ${cardStyle} transition-all duration-300 hover:shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#FFCC00]/10 text-[#FFCC00]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Our Mission</h2>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-black/70"}`}>
              NFTs OnChain is built to bridge the gap between blockchain ecosystems. Our mission is to lower the barrier of entry for exploration and discovery, providing high-quality indexing, statistics, and details on communities across all chain landscapes.
            </p>
          </div>

          <div className={`p-8 rounded-2xl border ${cardStyle} transition-all duration-300 hover:shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#FFCC00]/10 text-[#FFCC00]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Our Vision</h2>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-black/70"}`}>
              To become the ultimate starting point for collectors, creators, and builders looking to browse NFT landscapes across blockchains, while acting as an educational engine that demystifies multi-chain technology.
            </p>
          </div>
        </div>

        {/* PROHIBITIONS LIST (WHAT WE ARE NOT) */}
        <div className={`p-8 rounded-2xl border mb-16 ${cardStyle}`}>
          <h2 className="text-xl font-bold tracking-tight mb-2 text-[#FFCC00]">Platform Parameters</h2>
          <p className={`text-xs mb-6 ${dark ? "text-white/40" : "text-black/40"}`}>
            To prevent user confusion, we maintain explicit platform boundaries.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Not an NFT Marketplace or exchange",
              "We do NOT execute trades, transfers, or transactions",
              "We do NOT request seed phrases or direct assets access",
              "Not a portfolio or wallet balance tracker",
              "We do NOT provide financial or investment recommendations",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-500/80 text-sm font-bold shrink-0 mt-0.5">✕</span>
                <span className={`text-sm ${dark ? "text-white/80" : "text-black/80"}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mb-20">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">What We Offer</h2>
            <p className={`text-xs uppercase tracking-widest ${dark ? "text-white/40" : "text-black/40"}`}>
              Engineered features for Web3 discovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${cardStyle} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="p-3 rounded-xl bg-[#FFCC00]/10 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className={`text-xs leading-relaxed ${dark ? "text-white/60" : "text-black/60"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPORTED CHAINS */}
        <div className={`p-8 rounded-2xl border mb-16 ${cardStyle}`}>
          <h2 className="text-xl font-bold tracking-tight mb-6 text-center">Supported Ecosystems</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SUPPORTED_CHAINS.map((chain) => (
              <div
                key={chain}
                className={`p-3.5 rounded-xl border text-center text-xs font-semibold select-none transition ${
                  dark
                    ? "border-white/5 bg-white/[0.02] text-white/80 hover:border-[#FFCC00]/30 hover:text-white"
                    : "border-black/5 bg-black/[0.01] text-black/80 hover:border-[#FFCC00]/40 hover:text-black"
                }`}
              >
                {chain}
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className={`p-8 rounded-2xl border-l-4 border-[#FFCC00] ${cardStyle} mb-16`}>
          <h2 className="text-lg font-bold tracking-tight mb-4">Core Principles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "⚡ Fast, zero-loading overhead discovery",
              "🌍 Truly chain-agnostic data modeling",
              "🎓 Non-custodial search assistant integration",
              "🤝 Open source creator-to-community showcase pipelines",
            ].map((text, i) => (
              <div key={i} className={`text-sm ${dark ? "text-white/70" : "text-black/70"}`}>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className={`p-6 rounded-2xl border ${
          dark
            ? "border-yellow-500/20 bg-yellow-500/[0.04] text-yellow-200/90"
            : "border-yellow-600/20 bg-yellow-50/70 text-yellow-800/90"
        } flex gap-4 items-start mb-14`}>
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-[#FFCC00]" />
          <div>
            <h3 className="text-sm font-bold mb-1">Important Disclaimer</h3>
            <p className="text-xs leading-relaxed opacity-80">
              NFTs OnChain provides information for cultural indexing and educational discovery only. Nothing displayed on this platform constitutes financial, legal, or investment advice. Always execute independent research before exploring projects.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6 space-y-4">
          <p className={`text-sm font-medium ${dark ? "text-white/60" : "text-black/60"}`}>
            Ready to explore the multi-chain ecosystem?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#FFCC00] text-black hover:bg-[#FFEE00] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#FFCC00]/10"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </main>
  );
}