"use client";

import { TOP_NFT_COLLECTIONS } from "@/data/marqueeData";

export default function Marquee({ dark }: { dark: boolean }) {
  return (
    <div
      className={`h-[72px] overflow-hidden border-y
      ${dark ? "bg-[#05070D] border-white/10" : "bg-gray-100 border-black/10"}`}
    >
      <div className="flex w-max animate-marquee-left gap-10 h-full items-center px-6">
        
        {TOP_NFT_COLLECTIONS.map((collection) => (
          <div
            key={`first-${collection.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
              ${dark ? "bg-[#FFCC00] text-black" : "bg-[#FFCC00] text-black"}`}
            >
              {collection.shortName.slice(0, 1)}
            </div>

            <span
              className={`text-sm font-semibold tracking-wide ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {collection.name}
            </span>
          </div>
        ))}

        {TOP_NFT_COLLECTIONS.map((collection) => (
          <div
            key={`second-${collection.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
              ${dark ? "bg-[#FFCC00] text-black" : "bg-[#FFCC00] text-black"}`}
            >
              {collection.shortName.slice(0, 1)}
            </div>

            <span
              className={`text-sm font-semibold tracking-wide ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {collection.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}