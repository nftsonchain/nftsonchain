"use client";

import { Search } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({
  search,
  setSearch,
}: Props) {
  const { dark } = useTheme();

  return (
    <header
      className={`
        sticky top-0 z-30 w-full border-b backdrop-blur-2xl transition-colors duration-300
        ${dark ? "bg-[#0b0f1a]/60 border-white/10" : "bg-white/80 border-black/10"}
      `}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* LOGO LINK */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-[#FFCC00]">
              NFTs OnChain ◉
            </span>
          </Link>
        </div>

        {/* SEARCH */}
        <div className="flex flex-1 justify-center px-2 sm:px-4 min-w-0">
          <div
            className={`
              flex w-full max-w-xl items-center gap-3
              rounded-2xl border px-4 py-2.5 shadow-sm transition-all duration-300
              ${
                dark
                  ? "border-white/10 bg-white/5 focus-within:border-[#FFCC00]/50"
                  : "border-black/10 bg-white focus-within:border-[#FFCC00]/50"
              }
            `}
          >
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />

            <input
              type="text"
              placeholder="Search Collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`
                w-full bg-transparent outline-none text-sm font-medium
                ${dark ? "text-white placeholder:text-gray-500" : "text-black placeholder:text-gray-400"}
              `}
            />
          </div>
        </div>


      </div>
    </header>
  );
}