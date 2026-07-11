"use client";

import { useState } from "react";
import { allNFTs } from "@/data";
import type { NFT } from "@/data/types";
import { ThumbsUp, Heart, ArrowUpRight } from "lucide-react";

type Props = {
  selectedChains: string[];
  search: string;
  dark: boolean;
  onSelectNFT: (nft: NFT) => void;
  selectedCategory: string;
  selectedSupply: string;
};

// Formats number to show K/M notation
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
  onSelectNFT,
  selectedCategory,
  selectedSupply,
}: Props) {
  const nfts = allNFTs as NFT[];

  const [likes, setLikes] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  /* Replace later with Clerk auth */
  const isSignedIn = false;

  const handleLike = (e: React.MouseEvent, nftId: string | undefined) => {
    e.stopPropagation();

    if (!isSignedIn) {
      alert("To like an NFT, you must sign in first.");
      return;
    }

    if (!nftId) return;

    setLikes((prev) => ({
      ...prev,
      [nftId]: (prev[nftId] || 0) + 1,
    }));
  };

  const handleFavorite = (e: React.MouseEvent, nftId: string | undefined) => {
    e.stopPropagation();

    if (!isSignedIn) {
      alert("To favorite an NFT, you must sign in first.");
      return;
    }

    if (!nftId) return;

    if (!favorites.includes(nftId)) {
      setFavorites((prev) => [...prev, nftId]);
    }
  };

  const filteringAllChains =
    selectedChains.length === 0 || selectedChains.includes("All Chains");

  const filtered = nfts
    .filter((nft) =>
      filteringAllChains
        ? true
        : selectedChains.some((chain) => {
            const selected = chain.toLowerCase();
            const nftChain = nft.chain.toLowerCase();
            if (selected === "all chains") return true;
            if (
              selected === "bnb" &&
              (nftChain === "bnb" || nftChain === "bnb chain")
            )
              return true;
            if (
              selected === "bnb chain" &&
              (nftChain === "bnb" || nftChain === "bnb chain")
            )
              return true;
            if (selected === "near" && nftChain === "near") return true;
            if (selected === "sei" && nftChain === "sei") return true;
            if (
              selected === "immutable" &&
              (nftChain === "immutable" || nftChain === "immutable x")
            )
              return true;
            if (
              selected === "zksync era" &&
              (nftChain === "zksync" || nftChain === "zksync era")
            )
              return true;
            return nftChain.includes(selected);
          })
    )
    .filter((nft) => {
      const category = (nft.category || "").toLowerCase();
      if (selectedCategory === "All") return true;
      if (selectedCategory === "Gaming")
        return (
          category.includes("game") ||
          category.includes("gaming") ||
          category.includes("gamefi")
        );
      if (selectedCategory === "Collectible")
        return category.includes("collect") || category.includes("collectible");
      if (selectedCategory === "PFP")
        return category === "pfp" || category.includes("pfp");
      if (selectedCategory === "Meme") return category.includes("meme");
      if (selectedCategory === "Photography")
        return category.includes("photo") || category.includes("photography");
      if (selectedCategory === "Music") return category.includes("music");
      if (selectedCategory === "AI") return category.includes("ai");
      if (selectedCategory === "Anime") return category.includes("anime");
      if (selectedCategory === "Pixel") return category.includes("pixel");
      if (selectedCategory === "Sports")
        return category.includes("sport") || category.includes("sports");
      if (selectedCategory === "Fashion") return category.includes("fashion");
      return category.includes(selectedCategory.toLowerCase());
    })
    .filter((nft) => {
      const supply = Number(nft.supply || 0);
      if (selectedSupply === "All") return true;
      if (selectedSupply === "0–100") return supply >= 0 && supply <= 100;
      if (selectedSupply === "101–500") return supply >= 101 && supply <= 500;
      if (selectedSupply === "501–1,000")
        return supply >= 501 && supply <= 1000;
      if (selectedSupply === "1,001–5,000")
        return supply >= 1001 && supply <= 5000;
      if (selectedSupply === "5,001–10,000")
        return supply >= 5001 && supply <= 10000;
      if (selectedSupply === "10,001–15,000")
        return supply >= 10001 && supply <= 15000;
      if (selectedSupply === "15,001–20,000")
        return supply >= 15001 && supply <= 20000;
      if (selectedSupply === "20,001–50,000")
        return supply >= 20001 && supply <= 50000;
      if (selectedSupply === "50,001–100,000")
        return supply >= 50001 && supply <= 100000;
      if (selectedSupply === "100,000+") return supply >= 100000;
      return true;
    })
    .filter((nft) => nft.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mt-6">
      {filtered.length === 0 ? (
        <div
          className={`rounded-3xl border p-12 text-center text-sm font-medium ${
            dark
              ? "border-white/10 bg-white/[0.02] text-white/40"
              : "border-black/10 bg-black/[0.01] text-black/40"
          }`}
        >
          No collections match your criteria
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
            {filtered.map((nft, index) => (
              <div
                key={nft.id || `${nft.name}-${index}`}
                onClick={() => onSelectNFT(nft)}
                className={`
                  group relative cursor-pointer overflow-hidden rounded-[20px]
                  border px-7 py-5 flex flex-col justify-between w-full min-h-[175px]
                  transition-all duration-300 transform
                  hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]
                  ${
                    dark
                      ? "border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-[#FFCC00]/30"
                      : "border-black/[0.08] bg-white hover:border-[#FFCC00]/30 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                  }
                `}
              >
                <div className="w-full h-full p-3">

                {/* TOP ROW: Rank + Supply */}
                <div className="flex items-center justify-between mb-4 gap-3">
                  <div
                    className={`
                      flex h-6 w-6 shrink-0 items-center justify-center rounded-lg
                      font-black text-xs select-none
                      ${
                        dark
                          ? "bg-[#FFCC00] text-black"
                          : "bg-black text-white"
                      }
                    `}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`
                      rounded-full px-2.5 py-0.5
                      text-[10px] font-bold tracking-wide shrink-0 truncate max-w-[110px]
                      ${
                        dark
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-green-500/10 text-green-600 border border-green-500/10"
                      }
                    `}
                  >
                    Supply: {formatSupply(nft.supply)}
                  </span>
                </div>

                {/* NAME */}
                <h3 className="text-base font-extrabold leading-tight tracking-tight break-words line-clamp-1 transition-colors duration-200 group-hover:text-[#FFCC00] mb-3">
                  {nft.name}
                </h3>

                {/* CHAIN + CATEGORY TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span
                    className={`
                      inline-flex rounded-md px-2 py-0.5
                      text-[10px] font-bold tracking-wider uppercase truncate max-w-[90px]
                      ${
                        dark
                          ? "bg-white/5 text-white/50 border border-white/5"
                          : "bg-black/5 text-black/50 border border-black/5"
                      }
                    `}
                  >
                    {nft.chain}
                  </span>
                  {nft.category && (
                    <span
                      className={`
                        inline-flex rounded-md px-2 py-0.5
                        text-[10px] font-bold tracking-wider uppercase truncate max-w-[90px]
                        ${
                          dark
                            ? "bg-white/5 text-white/50 border border-white/5"
                            : "bg-black/5 text-black/50 border border-black/5"
                        }
                      `}
                    >
                      {nft.category}
                    </span>
                  )}
                </div>

                {/* FOOTER: Like, Favorite, Details */}
                <div
                  className={`flex items-center justify-between pt-3.5 border-t ${
                    dark ? "border-white/5" : "border-black/5"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <button
                      onClick={(e) => handleLike(e, nft.id)}
                      className={`flex items-center gap-1.5 transition text-xs font-semibold ${
                        dark ? "text-white/40 hover:text-[#FFCC00]" : "text-black/40 hover:text-[#FFCC00]"
                      }`}
                    >
                      <ThumbsUp size={12} className="group-hover:scale-110 transition" />
                      <span>{nft.id ? likes[nft.id] ?? 0 : 0}</span>
                    </button>

                    <button
                      onClick={(e) => handleFavorite(e, nft.id)}
                      className={`flex items-center transition ${
                        dark ? "text-white/40 hover:text-red-400" : "text-black/40 hover:text-red-400"
                      }`}
                    >
                      <Heart
                        size={12}
                        className="group-hover:scale-110 transition"
                        fill={
                          nft.id && favorites.includes(nft.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 select-none">
                    <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors ${
                      dark ? "text-[#FFCC00]/70 group-hover:text-[#FFCC00]" : "text-black/75 group-hover:text-[#FFCC00]"
                    }`}>
                      Details
                    </span>
                    <ArrowUpRight size={10} className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      dark ? "text-[#FFCC00]/70 group-hover:text-[#FFCC00]" : "text-black/70 group-hover:text-[#FFCC00]"
                    }`} />
                  </div>
                </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}