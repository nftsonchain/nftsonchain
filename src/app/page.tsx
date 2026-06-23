"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Marketplaces from "@/components/Marketplaces";
import FilterTabs from "@/components/FilterTabs";
import NFTTable from "@/components/NFTTable";
import SidePanel from "@/components/SidePanel";
import BackToTop from "@/components/BackToTop";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [selectedChains, setSelectedChains] = useState<string[]>(["All Chains"]);
  const [focusChain, setFocusChain] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(true);

  return (
    <main
      className={
        dark
          ? "bg-[#0B0F1A] text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* 🔝 NAVBAR */}
      <Navbar
        onMenuClick={() => setMenuOpen(true)}
        search={search}
        setSearch={setSearch}
        dark={dark}
        setDark={setDark}
      />

      {/* 🔁 MARQUEE (NFT COLLECTIONS) */}
      <Marquee dark={dark} />

      {/* 📦 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 pb-24">

        {/* 🏪 MARKETPLACES MARQUEE */}
        <Marketplaces dark={dark} />

        {/* 🧩 NFTs TITLE */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          NFTs
        </h2>

        {/* 🔘 FILTER TABS */}
        <FilterTabs
          selectedChains={selectedChains}
          setSelectedChains={setSelectedChains}
          focusChain={focusChain}
          onFocusHandled={() => setFocusChain(null)}
          dark={dark}
        />

        {/* Active filter chips */}
        {!(selectedChains.length === 0 || selectedChains.includes("All Chains")) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {selectedChains.map((chain) => (
              <div
                key={chain}
                className="inline-flex items-center rounded-full bg-white/5 px-2 py-1 text-sm text-white transition hover:scale-105"
              >
                <button
                  onClick={() => setFocusChain(chain)}
                  className="max-w-[10rem] truncate px-3 text-left"
                >
                  {chain}
                </button>
                <button
                  onClick={() =>
                    setSelectedChains((prev) => {
                      const next = prev.filter((c) => c !== chain);
                      return next.length > 0 ? next : ["All Chains"];
                    })
                  }
                  aria-label={`Remove ${chain}`}
                  className="px-2 text-gray-300 hover:text-white"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={() => setSelectedChains(["All Chains"])}
              className="ml-2 rounded-full border border-white/10 bg-transparent px-3 py-1 text-sm text-gray-300 transition hover:bg-white/5"
            >
              Clear
            </button>
          </div>
        )}

        {/* 📊 NFT TABLE */}
        <NFTTable
          selectedChains={selectedChains}
          search={search}
          dark={dark}
        />

      </div>

      {/* 📂 SIDE PANEL */}
      <SidePanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        dark={dark}
      />

      {/* 🔝 BACK TO TOP */}
      <BackToTop />

      {/* 📱 BOTTOM NAVIGATION */}
      <BottomNav dark={dark} />
    </main>
  );
}