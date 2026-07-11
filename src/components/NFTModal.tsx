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
    Flow: ["NBA Top Shot", "Gaia", "Flowty"],
    Hedera: ["SentX", "Zuse Market", "Turtle Moon"],
    Osmosis: ["Stargaze"],
    Juno: ["Stargaze"],
    Celestia: ["Stargaze"],
    Injective: ["Talis"],
    Sei: ["Palette Exchange", "Dagora"],
    NEAR: ["Paras", "Mintbase"],
    Algorand: ["Rand Gallery", "ALGOxNFT", "Dartroom"],
    Tron: ["ApeNFT", "APENFT Marketplace"],
    VeChain: ["VeSea"],
    WAX: ["AtomicHub", "NeftyBlocks"],
    Moonbeam: ["Singular"],
    Zilliqa: ["Arky"],
    Abstract: ["Magic Eden"],
    ApeChain: ["Magic Eden"],
    Blast: ["Blur", "Element"],
    Soneium: ["TradePort"],
    Aptos: ["Topaz", "Souffl3", "BlueMove"],
    Berachain: ["HoneyComb"],
    Mantle: ["Element"],
    Ronin: ["Mavis Market"],
    Shape: ["OpenSea"],
    Linea: ["OpenSea", "Element"],
    "zkSync Era": ["Mint Square", "Element"],
    Xion: ["Ecosystem Marketplace"],
  };

  return maps[chain] || ["Marketplace not available"];
}

function getMarketColor(name: string, dark: boolean) {
  const colors: Record<string, string> = {
    OpenSea: dark
      ? "bg-blue-400/10 text-blue-300 border-blue-400/20"
      : "bg-blue-50 text-blue-700 border-blue-200",
    Rarible: dark
      ? "bg-pink-400/10 text-pink-300 border-pink-400/20"
      : "bg-pink-50 text-pink-700 border-pink-200",
    LooksRare: dark
      ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/20"
      : "bg-emerald-50 text-emerald-700 border-emerald-200",
    Blur: dark
      ? "bg-orange-400/10 text-orange-300 border-orange-400/20"
      : "bg-orange-50 text-orange-700 border-orange-200",
    Foundation: dark
      ? "bg-purple-400/10 text-purple-300 border-purple-400/20"
      : "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    colors[name] ||
    (dark
      ? "bg-white/5 text-white/70 border-white/10"
      : "bg-black/5 text-black/70 border-black/10")
  );
}

export default function NFTModal({ nft, open, onClose, dark }: Props) {
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

  const modalBg = dark
    ? "border-white/15 bg-[#0e1424]/75 shadow-[0_45px_140px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
    : "border-black/[0.08] bg-white/75 shadow-[0_45px_140px_rgba(0,0,0,0.15)] backdrop-blur-2xl";

  const itemCardStyle = dark
    ? "border-white/5 bg-white/[0.02]"
    : "border-black/5 bg-black/[0.01]";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 animate-[fade-in_0.2s_ease-out]">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL CONTAINER */}
      <div
        ref={modalRef}
        className={`
          relative z-10 w-full max-w-[720px] max-h-[94vh] min-h-[70vh] overflow-y-auto
          rounded-[28px] border flex flex-col scrollbar-none transition-all duration-300
          ${modalBg}
        `}
      >
        {/* LIGHT GLOW LAYERS IN DARK MODE */}
        {dark && (
          <>
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-400/[0.03] blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/[0.03] blur-[120px] pointer-events-none" />
          </>
        )}

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className={`absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200 ${
            dark
              ? "bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10"
              : "bg-black/5 border-black/10 text-black/50 hover:text-black hover:bg-black/10"
          }`}
          title="Close Details Modal"
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 md:p-14 space-y-16 flex-1">
          
          {/* HEADER LAYER */}
          <div className="space-y-8">
            <div className="flex items-center gap-4.5 flex-wrap">
              <div className="h-10 px-4 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md">
                <span className="text-xs font-black text-black">
                  INDEX {nft.id ?? "NFT"}
                </span>
              </div>
              <span className={`text-[11px] font-bold tracking-widest uppercase px-3.5 py-2 rounded-md border ${
                dark ? "bg-white/5 border-white/5 text-white/50" : "bg-black/5 border-black/5 text-black/50"
              }`}>
                {nft.chain}
              </span>
            </div>

            <h1 className={`text-3xl md:text-4xl font-black tracking-tight leading-tight ${
              dark ? "text-white" : "text-black"
            }`}>
              {nft.name}
            </h1>

            <div className="flex items-center gap-8 flex-wrap">
              <span className={`text-base ${dark ? "text-white/60" : "text-black/60"}`}>
                Category: <strong className="font-bold text-[#FFCC00]">{nft.category || "General"}</strong>
              </span>

              <span className={`text-base ${dark ? "text-white/30" : "text-black/30"}`}>•</span>

              {/* LIKE + FAVORITE INTERACTIONS */}
              <div className="flex items-center gap-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 text-base font-semibold transition ${
                    dark ? "text-white/45 hover:text-[#FFCC00]" : "text-black/45 hover:text-[#FFCC00]"
                  }`}
                >
                  <ThumbsUp size={16} />
                  <span>Like</span>
                </button>
                <button
                  onClick={handleFavorite}
                  className={`flex items-center gap-2 text-base font-semibold transition ${
                    dark ? "text-white/45 hover:text-red-400" : "text-black/45 hover:text-red-400"
                  }`}
                >
                  <Heart size={16} />
                  <span>Favorite</span>
                </button>
              </div>
            </div>
          </div>

          <hr className={dark ? "border-white/5" : "border-black/5"} />

          {/* STATS METADATA ROW */}
          <div className="grid grid-cols-2 gap-10">
            <div className={`p-8 rounded-2xl border ${itemCardStyle} space-y-3`}>
              <div className={`text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 ${
                dark ? "text-white/40" : "text-black/40"
              }`}>
                <Box size={14} />
                <span>Total Supply</span>
              </div>
              <div className="text-3xl font-black">
                {nft.supply?.toLocaleString() || "-"}
              </div>
            </div>

            <div className={`p-8 rounded-2xl border ${itemCardStyle} space-y-3`}>
              <div className={`text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 ${
                dark ? "text-white/40" : "text-black/40"
              }`}>
                <Calendar size={14} />
                <span>Launch Year</span>
              </div>
              <div className="text-3xl font-black">
                {nft.year || "-"}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-6">
            <div className={`text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 ${
              dark ? "text-white/40" : "text-black/40"
            }`}>
              <FileText size={14} />
              <span>Description</span>
            </div>
            <p className={`text-[15px] leading-[1.8] ${dark ? "text-white/70" : "text-black/70"}`}>
              {nft.description || "No collection description has been provided yet."}
            </p>
          </div>

          {/* KNOWN FOR HIGHLIGHT */}
          {nft.knownFor && (
            <div className="space-y-6">
              <div className={`text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 ${
                dark ? "text-white/40" : "text-black/40"
              }`}>
                <Sparkles size={14} />
                <span>Known For</span>
              </div>
              <p className={`text-[15px] leading-[1.8] ${dark ? "text-white/70" : "text-black/70"}`}>
                {nft.knownFor}
              </p>
            </div>
          )}

          {/* MARKETPLACES BADGES */}
          <div className="space-y-8">
            <div className={`text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 ${
              dark ? "text-white/40" : "text-black/40"
            }`}>
              <Store size={14} />
              <span>Available Marketplaces</span>
            </div>
            <div className="flex flex-wrap gap-4.5">
              {marketplaces.map((m, i) => (
                <div
                  key={i}
                  className={`
                    px-5.5 py-3 rounded-xl border text-xs font-bold transition duration-200 select-none
                    ${getMarketColor(m, dark)}
                  `}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER CALL TO ACTION */}
        {nft.twitter && (
          <div className={`p-12 border-t flex justify-center ${dark ? "border-white/5 bg-white/[0.01]" : "border-black/5 bg-black/[0.01]"}`}>
            <a
              href={nft.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2.5 px-9 py-4 rounded-xl
                bg-[#FFCC00] hover:bg-[#FFEE00] text-black
                font-extrabold text-sm shadow-md shadow-[#FFCC00]/10 transition-all duration-300
              "
            >
              <span>Visit Official Community Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}