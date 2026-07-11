"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";

import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Marketplaces from "@/components/Marketplaces";
import MarketLaunch from "@/components/MarketLaunch";
import FilterTabs from "@/components/FilterTabs";
import NFTTable from "@/components/NFTTable";
import NFTModal from "@/components/NFTModal";
import BackToTop from "@/components/BackToTop";

import type { NFT } from "@/data/types";

export default function Home() {
  const [selectedChains, setSelectedChains] = useState<string[]>([
    "All Chains",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSupply, setSelectedSupply] = useState("All");
  const [focusChain, setFocusChain] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { dark } = useTheme();

  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  return (
    <>
      <main
        className={
          dark
            ? "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_26%),linear-gradient(135deg,_#020408_0%,_#090b14_100%)] text-white flex-1 flex flex-col"
            : "min-h-screen bg-[linear-gradient(135deg,_#fffdf7_0%,_#f7f8fb_100%)] text-black flex-1 flex flex-col"
        }
      >
        <Navbar
          search={search}
          setSearch={setSearch}
        />

        <Marquee dark={dark} />
        <Marketplaces dark={dark} />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-8 md:px-6 lg:px-8 lg:py-10">
          <section
            className={`rounded-[32px] border p-6 shadow-[0_18px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl md:p-8 ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <MarketLaunch dark={dark} />
          </section>

          <section
            className={`rounded-[32px] border p-6 shadow-[0_14px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-white/45" : "text-black/45"}`}>
                  Discover
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">Explore NFTs</h2>
              </div>
            </div>

            <FilterTabs
              selectedChains={selectedChains}
              setSelectedChains={setSelectedChains}
              focusChain={focusChain}
              onFocusHandled={() => setFocusChain(null)}
              dark={dark}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSupply={selectedSupply}
              setSelectedSupply={setSelectedSupply}
            />
          </section>

          <section
            className={`rounded-[32px] border p-6 shadow-[0_14px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-white/45" : "text-black/45"}`}>
                  Collections
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">NFTs</h2>
              </div>
            </div>

            <NFTTable
              selectedChains={selectedChains}
              search={search}
              dark={dark}
              onSelectNFT={setSelectedNFT}
              selectedCategory={selectedCategory}
              selectedSupply={selectedSupply}
            />
          </section>
        </div>

        <BackToTop />
      </main>

      {/* ROOT LEVEL MODAL */}
      <NFTModal
        nft={selectedNFT}
        open={!!selectedNFT}
        onClose={() => setSelectedNFT(null)}
        dark={dark}
      />
    </>
  );
}