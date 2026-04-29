"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Marketplaces from "@/components/Marketplaces";
import FilterTabs from "@/components/FilterTabs";
import NFTTable from "@/components/NFTTable";
import SidePanel from "@/components/SidePanel";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [selected, setSelected] = useState("All Chains");
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

      {/* 🔁 MARQUEE (FIXED) */}
      <Marquee dark={dark} />

      {/* 📦 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4">

        {/* 🏪 MARKETPLACES */}
        <Marketplaces dark={dark} />

        {/* 🧩 NFTs TITLE */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          NFTs
        </h2>

        {/* 🔘 FILTER TABS */}
        <FilterTabs
          selected={selected}
          setSelected={setSelected}
        />

        {/* 📊 NFT TABLE */}
        <NFTTable
          selected={selected}
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
    </main>
  );
}