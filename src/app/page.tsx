"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Marketplaces from "@/components/Marketplaces";
import MarketLaunch from "@/components/MarketLaunch";
import FilterTabs from "@/components/FilterTabs";
import NFTTable from "@/components/NFTTable";
import NFTModal from "@/components/NFTModal";
import SidePanel from "@/components/SidePanel";
import BackToTop from "@/components/BackToTop";
import BottomNav from "@/components/BottomNav";

import type { NFT } from "@/data/types";

export default function Home() {
  const [selectedChains, setSelectedChains] = useState<string[]>([
    "All Chains",
  ]);
  const [focusChain, setFocusChain] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dark] = useState(true);

  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  return (
    <>
      <main
        className={
          dark
            ? "min-h-screen bg-[#0B0F1A] text-white"
            : "min-h-screen bg-white text-black"
        }
      >
        <Navbar
          onMenuClick={() => setMenuOpen(true)}
          search={search}
          setSearch={setSearch}
          dark={dark}
          setDark={() => {}}
        />

        <Marquee dark={dark} />
        <Marketplaces dark={dark} />

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-8 space-y-10">
          <section
            className={`rounded-[32px] p-6 md:p-8 border ${
              dark
                ? "bg-white/[0.03] border-white/10"
                : "bg-black/[0.03] border-black/10"
            }`}
          >
            <MarketLaunch dark={dark} />
          </section>

          <section
            className={`rounded-[32px] p-6 border ${
              dark
                ? "bg-white/[0.03] border-white/10"
                : "bg-black/[0.03] border-black/10"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Explore NFTs</h2>
            </div>

            <FilterTabs
              selectedChains={selectedChains}
              setSelectedChains={setSelectedChains}
              focusChain={focusChain}
              onFocusHandled={() => setFocusChain(null)}
              dark={dark}
            />
          </section>

          <section
            className={`rounded-[32px] p-6 border ${
              dark
                ? "bg-white/[0.03] border-white/10"
                : "bg-black/[0.03] border-black/10"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-semibold">NFTs</h2>
            </div>

            <NFTTable
              selectedChains={selectedChains}
              search={search}
              dark={dark}
              onSelectNFT={setSelectedNFT}
            />
          </section>
        </div>

        <SidePanel
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          dark={dark}
        />

        <BackToTop />
        <BottomNav dark={dark} />
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