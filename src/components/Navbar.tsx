"use client";

import { Search, MoreVertical, Sun, Moon } from "lucide-react";

type Props = {
  onMenuClick: () => void;
  search: string;
  setSearch: (value: string) => void;
  dark: boolean;
  setDark: (value: boolean | ((prev: boolean) => boolean)) => void;
};

export default function Navbar({
  onMenuClick,
  search,
  setSearch,
  dark,
  setDark,
}: Props) {
  return (
    <div
      className={`w-full border-b sticky top-0 z-50 backdrop-blur-3xl shadow-[0_20px_60px_-40px_rgba(0,0,0,0.65)] transition-all
      ${
        dark
          ? "bg-black/40 border-white/10 text-white"
          : "bg-white/70 border-black/10 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* TOGGLE SWITCH */}
          <button
            onClick={() => setDark((prev) => !prev)}
            className={`w-14 h-7 flex items-center rounded-full p-1 overflow-hidden transition
              ${dark ? "bg-[#FFCC00]" : "bg-gray-400"}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transition-all flex items-center justify-center ${
                dark ? "ml-auto" : "ml-0"
              }`}
            >
              {dark ? (
                <Sun className="w-3 h-3 text-black" />
              ) : (
                <Moon className="w-3 h-3 text-black" />
              )}
            </div>
          </button>

          {/* LOGO */}
          <h1 className="font-bold text-lg text-[#FFCC00]">
            NFTs OnChain <span className="text-[#FFCC00]">◉</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="relative">
            <Search
              className={`absolute left-3 top-2.5 w-4 h-4 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            />
            <input
              type="text"
              placeholder="Search NFTs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`pl-9 pr-3 py-2 rounded-lg text-sm focus:outline-none border
                ${
                  dark
                    ? "bg-white/10 border-white/10 text-white backdrop-blur-sm"
                    : "bg-white border-black/20 text-black"
                }`}
            />
          </div>

          {/* MENU */}
          <button onClick={onMenuClick}>
            <MoreVertical className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
}