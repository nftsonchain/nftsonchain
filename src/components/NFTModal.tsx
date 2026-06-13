"use client";

import { useEffect, useRef } from "react";
import type { NFT } from "@/data/types";

type Props = {
  nft: NFT | null;
  open: boolean;
  onClose: () => void;
  dark: boolean;
};

function rarityStyle(rarity: NFT["rarity"]) {
  switch (rarity.toLowerCase()) {
    case "legendary":
      return "text-purple-300 bg-purple-500/10 border-purple-400/30";
    case "rare":
      return "text-blue-300 bg-blue-500/10 border-blue-400/30";
    default:
      return "text-green-300 bg-green-500/10 border-green-400/30";
  }
}

export default function NFTModal({ nft, onClose, dark }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // CLICK OUTSIDE CLOSE (ROBUST FIX)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!modalRef.current) return;
      if (!modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!nft) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          ref={modalRef}
          className="
            w-full max-w-2xl
            rounded-2xl
            p-6
            relative
            shadow-2xl
            border
            bg-white/10 backdrop-blur-2xl
            border-white/10
            text-white
          "
        >
          {/* HEADER */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h2 className="text-2xl font-bold text-[#FFCC00]">
                {nft.name}
              </h2>
              <p className="text-sm opacity-60">
                {nft.chain} • {nft.category}
              </p>
            </div>

            <button
              onClick={onClose}
              className="opacity-60 hover:opacity-100"
            >
              ✕
            </button>
          </div>

          {/* RARITY */}
          <div className="mb-5">
            <span
              className={`px-3 py-1 text-xs rounded-full border ${rarityStyle(
                nft.rarity
              )}`}
            >
              {nft.rarity}
            </span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs opacity-60">Supply</p>
              <p className="font-semibold">{nft.supply.toLocaleString()}</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs opacity-60">Year</p>
              <p className="font-semibold">{nft.year}</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <p className="text-xs opacity-60 mb-1">Description</p>
            <p className="text-sm opacity-80">{nft.description}</p>
          </div>

          {/* KNOWN FOR */}
          <div className="mb-6">
            <p className="text-xs opacity-60 mb-1">Known For</p>
            <p className="text-sm opacity-80">{nft.knownFor}</p>
          </div>

          {/* LINK */}
          <a
            href={nft.twitter}
            target="_blank"
            className="text-[#FFCC00] text-sm hover:underline"
          >
            Visit X Profile →
          </a>
        </div>
      </div>
    </>
  );
}