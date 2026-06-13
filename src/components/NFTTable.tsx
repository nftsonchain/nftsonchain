"use client";

import { useState } from "react";
import { allNFTs } from "@/data";
import type { NFT } from "@/data/types";
import NFTModal from "./NFTModal";

type Props = {
  selectedChains: string[];
  search: string;
  dark: boolean;
};

// format supply (10000 → 10K)
function formatSupply(num: number) {
  if (!num) return "-";
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

export default function NFTTable({ selectedChains, search, dark }: Props) {
  const nfts = allNFTs as NFT[]; // ✅ USING NEW DATA SOURCE

  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  const filteringAllChains =
    selectedChains.length === 0 || selectedChains.includes("All Chains");

  // 🔍 FILTER LOGIC
  const filtered = nfts
    .filter((nft) =>
      filteringAllChains ? true : selectedChains.includes(nft.chain)
    )
    .filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      {/* TABLE WRAPPER */}
      <div className={`overflow-x-auto mt-6 rounded-[32px] border px-4 py-3 ${
        dark
          ? "bg-white/5 border-white/10 shadow-sm shadow-black/20"
          : "bg-black/5 border-black/10 shadow-sm shadow-black/10"
      }`}>
        <table className="w-full text-sm">

          {/* HEADER */}
          <thead
            className={`border-b ${
              dark
                ? "text-gray-400 border-white/10"
                : "text-gray-600 border-black/10"
            }`}
          >
            <tr className="text-left">
              <th className="py-3">#</th>
              <th className="py-3">Name</th>
              <th className="py-3">Chain</th>
              <th className="py-3">Supply</th>
              <th className="py-3">Year</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 opacity-60">
                  No NFTs found
                </td>
              </tr>
            ) : (
              filtered.map((nft, index) => (
                <tr
                  key={nft.id || `${nft.name}-${index}`} // ✅ BETTER KEY
                  onClick={() => setSelectedNFT(nft)}
                  className={`cursor-pointer border-b transition ${
                    dark
                      ? "border-white/5 hover:bg-white/5"
                      : "border-black/5 hover:bg-black/5"
                  }`}
                >
                  {/* INDEX */}
                  <td className="py-4">{index + 1}</td>

                  {/* NAME */}
                  <td className="py-4 font-medium pr-24">
                    {nft.name}
                  </td>

                  {/* CHAIN */}
                  <td className="py-4">{nft.chain}</td>

                  {/* SUPPLY */}
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        dark
                          ? "bg-green-500/10 text-green-400"
                          : "bg-green-500/10 text-green-600"
                      }`}
                    >
                      {formatSupply(nft.supply)}
                    </span>
                  </td>

                  {/* YEAR */}
                  <td className="py-4">{nft.year || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🧠 MODAL */}
      <NFTModal
        nft={selectedNFT}
        open={!!selectedNFT}
        onClose={() => setSelectedNFT(null)}
        dark={dark}
      />
    </>
  );
}