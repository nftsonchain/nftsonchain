"use client";

import { useState } from "react";
import { allNFTs } from "@/data";
import type { NFT } from "@/data/types";
import NFTModal from "@/components/NFTModal";
import { ThumbsUp, Heart } from "lucide-react";

type Props = {
  selectedChains: string[];
  search: string;
  dark: boolean;
};

function formatSupply(num: number) {
  if (!num) return "-";
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

export default function NFTTable({
  selectedChains,
  search,
  dark,
}: Props) {
  const nfts = allNFTs as NFT[];
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  const [likes, setLikes] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  /* Replace this later with real auth */
  const isSignedIn = false;

  const handleLike = (
    e: React.MouseEvent,
    nftId: string
  ) => {
    e.stopPropagation();

    if (!isSignedIn) {
      alert("To like an NFT, you must sign in first.");
      return;
    }

    setLikes((prev) => ({
      ...prev,
      [nftId]: (prev[nftId] || 0) + 1,
    }));
  };

  const handleFavorite = (
    e: React.MouseEvent,
    nftId: string
  ) => {
    e.stopPropagation();

    if (!isSignedIn) {
      alert("To favorite an NFT, you must sign in first.");
      return;
    }

    if (!favorites.includes(nftId)) {
      setFavorites((prev) => [...prev, nftId]);
    }
  };

  const filteringAllChains =
    selectedChains.length === 0 ||
    selectedChains.includes("All Chains");

  const filtered = nfts
    .filter((nft) =>
      filteringAllChains ? true : selectedChains.includes(nft.chain)
    )
    .filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="mt-6">
        {filtered.length === 0 ? (
          <div
            className={`rounded-3xl border p-8 text-center ${
              dark
                ? "border-white/10 bg-white/5 text-gray-400"
                : "border-black/10 bg-black/5 text-gray-500"
            }`}
          >
            No NFTs found
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((nft, index) => (
              <div
                key={nft.id || `${nft.name}-${index}`}
                onClick={() => setSelectedNFT(nft)}
                className={`
                  group relative cursor-pointer overflow-hidden rounded-[15px]
                  border p-2 min-h-[140px]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  ${
                    dark
                      ? "border-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:border-[#FFCC00]/30"
                      : "border-black/10 bg-white hover:border-[#FFCC00]/30"
                  }
                `}
              >
                {/* TOP */}
                <div className="relative flex items-center justify-between mb-2">
                  <div
                    className={`
                      flex h-7 w-7 items-center justify-center rounded-md
                      font-bold text-[10px]
                      ${
                        dark
                          ? "bg-[#FFCC00] text-black"
                          : "bg-black text-white"
                      }
                    `}
                  >
                    #{index + 1}
                  </div>

                  <span
                    className={`
                      rounded-full px-2 py-[2px]
                      text-[10px] font-semibold
                      ${
                        dark
                          ? "bg-green-500/10 text-green-400"
                          : "bg-green-500/10 text-green-600"
                      }
                    `}
                  >
                    {formatSupply(nft.supply)}
                  </span>
                </div>

                {/* NFT-SPECIFIC LIKE + FAVORITE */}
                <div className="flex items-center gap-4 mb-3 pl-1">
                  <button
                    onClick={(e) => handleLike(e, nft.id)}
                    className="flex items-center gap-1 text-white/70 hover:text-[#FFCC00] transition"
                  >
                    <ThumbsUp size={14} />
                    <span className="text-[11px]">
                      {likes[nft.id] ?? 0}
                    </span>
                  </button>

                  <button
                    onClick={(e) => handleFavorite(e, nft.id)}
                    className="flex items-center gap-1 text-white/70 hover:text-red-400 transition"
                  >
                    <Heart
                      size={14}
                      fill={
                        favorites.includes(nft.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="relative flex flex-col justify-between h-[82px]">
                  <h3 className="text-[14px] font-bold leading-tight break-words line-clamp-2 min-h-[30px]">
                    {nft.name}
                  </h3>

                  <div
                    className={`
                      inline-flex max-w-fit rounded-md px-2 py-[4px]
                      text-[11px] font-semibold mt-1
                      ${
                        dark
                          ? "bg-white/5 text-gray-300"
                          : "bg-black/5 text-gray-700"
                      }
                    `}
                  >
                    {nft.chain}
                  </div>

                  <div
                    className={`flex items-center justify-between mt-1 pt-1 border-t ${
                      dark ? "border-white/10" : "border-black/10"
                    }`}
                  >
                    <div className="flex flex-col min-w-[60px]">
                      <span className="text-[8px] text-gray-400 uppercase tracking-wide">
                        Year
                      </span>
                      <span className="text-[12px] font-bold whitespace-nowrap">
                        {nft.year || "-"}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-semibold shrink-0 ${
                        dark ? "text-[#FFCC00]" : "text-black"
                      }`}
                    >
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <NFTModal
        nft={selectedNFT}
        open={!!selectedNFT}
        onClose={() => setSelectedNFT(null)}
        dark={dark}
      />
    </>
  );
}