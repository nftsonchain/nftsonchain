"use client";

import { useEffect, useRef } from "react";
import type { NFT } from "@/data/types";
import {
  FileText,
  Sparkles,
  Store,
  ExternalLink,
  Calendar,
  Box,
  X,
  ThumbsUp,
  Heart,
} from "lucide-react";

type Props = {
  nft: NFT | null;
  open: boolean;
  onClose: () => void;
  dark: boolean;
};

function getMarketplaces(chain: string) {
  const maps: Record<string, string[]> = {
    Ethereum: ["OpenSea", "Rarible", "LooksRare", "Blur", "Foundation"],
    Solana: ["Magic Eden", "Tensor", "LaunchMyNFT"],
    Bitcoin: ["Magic Eden", "UniSat", "Gamma"],
    Polygon: ["OpenSea", "Rarible"],
    Base: ["OpenSea", "Zora"],
    Arbitrum: ["Treasure", "OpenSea"],
    Optimism: ["Quix", "OpenSea"],
    Avalanche: ["Joepegs"],
    Cosmos: ["Stargaze"],
    Gram: ["Getgems"],
    BNB: ["Binance NFT", "PancakeSwap NFT"],
    Tezos: ["Objkt"],
    Cardano: ["JPG Store"],
    Immutable: ["Immutable Market"],
  };

  return maps[chain] || ["Marketplace not available"];
}

function getMarketColor(name: string) {
  const colors: Record<string, string> = {
    OpenSea: "bg-blue-400/10 text-blue-100 border-blue-400/20",
    Rarible: "bg-pink-400/10 text-pink-100 border-pink-400/20",
    LooksRare: "bg-emerald-400/10 text-emerald-100 border-emerald-400/20",
    Blur: "bg-orange-400/10 text-orange-100 border-orange-400/20",
    Foundation: "bg-purple-400/10 text-purple-100 border-purple-400/20",
  };

  return colors[name] || "bg-white/5 text-white/70 border-white/10";
}

export default function NFTModal({
  nft,
  open,
  onClose,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const isSignedIn = false;

  useEffect(() => {
    if (!open) return;

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const outside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, [open, onClose]);

  if (!open || !nft) return null;

  const marketplaces = getMarketplaces(nft.chain);

  const handleLike = () => {
    if (!isSignedIn) {
      alert("To like an NFT, you must sign in first.");
      return;
    }
  };

  const handleFavorite = () => {
    if (!isSignedIn) {
      alert("To favorite an NFT, you must sign in first.");
      return;
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center px-6 py-12">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-3xl"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        ref={modalRef}
        className="
          relative z-10
          w-full max-w-[820px]
          max-h-[90vh]
          overflow-hidden
          rounded-[34px]
          border border-white/10
          shadow-[0_45px_140px_rgba(0,0,0,0.55)]
          backdrop-blur-[28px]
          bg-white/5
        "
      >
        {/* GLOW */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-400/5 blur-[160px]" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-blue-500/5 blur-[160px]" />

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <div className="relative p-12 space-y-12">
          {/* HEADER */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/90 to-amber-500/90 flex items-center justify-center shadow-lg">
              <span className="text-xl font-black text-black">
                {nft.id ?? "NFT"}
              </span>
            </div>

            <h1 className="text-[#FFCC00] text-4xl font-semibold">
              {nft.name}
            </h1>

            <p className="text-white/50 text-base">
              {nft.chain} • {nft.category || "NFT Collection"}
            </p>

            {/* LIKE + FAVORITE */}
            <div className="flex items-center gap-5 pt-2">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 text-white/70 hover:text-[#FFCC00] transition"
              >
                <ThumbsUp size={18} />
                <span>Like</span>
              </button>

              <button
                onClick={handleFavorite}
                className="flex items-center gap-2 text-white/70 hover:text-red-400 transition"
              >
                <Heart size={18} />
                <span>Favorite</span>
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-1">
              <div className="text-white/40 text-sm flex items-center gap-2">
                <Box size={14} />
                TOTAL SUPPLY
              </div>
              <div className="text-2xl text-white">
                {nft.supply?.toLocaleString() || "-"}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-white/40 text-sm flex items-center gap-2">
                <Calendar size={14} />
                LAUNCH YEAR
              </div>
              <div className="text-2xl text-white">
                {nft.year || "-"}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-3">
            <div className="text-white/50 flex items-center gap-2">
              <FileText size={16} />
              DESCRIPTION
            </div>

            <p className="text-white/80 leading-8">
              {nft.description || "No description available."}
            </p>
          </div>

          {/* KNOWN FOR */}
          <div className="space-y-3">
            <div className="text-white/50 flex items-center gap-2">
              <Sparkles size={16} />
              KNOWN FOR
            </div>

            <p className="text-white/80 leading-8">
              {nft.knownFor || "No data available."}
            </p>
          </div>

          {/* MARKETPLACES */}
          <div className="space-y-3">
            <div className="text-white/50 flex items-center gap-2">
              <Store size={16} />
              MARKETPLACES
            </div>

            <div className="flex flex-wrap gap-3">
              {marketplaces.map((m, i) => (
                <div
                  key={i}
                  className={`
                    px-5 py-2.5
                    rounded-full
                    border
                    text-sm
                    font-medium
                    backdrop-blur-xl
                    transition
                    hover:scale-105
                    ${getMarketColor(m)}
                  `}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {nft.twitter && (
          <div className="flex justify-center pb-12 pt-6">
            <a
              href={nft.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-10 py-4
                rounded-full
                bg-[#FFCC00]/90
                text-black
                font-semibold
                shadow-lg shadow-yellow-500/20
                hover:scale-105 transition
              "
            >
              Visit X Profile
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}