"use client";

import { TOP_NFT_COLLECTIONS } from "@/data/marqueeData";

export default function Marquee({ dark }: { dark: boolean }) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y
      ${dark ? "bg-[#05070D] border-white/10" : "bg-gray-100 border-black/10"}`}
    >
      <div className="flex w-max animate-marquee-left gap-6 py-4 px-4">
        {/* First copy for continuous loop */}
        {TOP_NFT_COLLECTIONS.map((collection) => (
          <div
            key={`first-${collection.name}`}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              ${dark ? "bg-[#FFCC00] text-black" : "bg-[#FFCC00] text-black"}`}
            >
              {collection.shortName.slice(0, 1)}
            </div>
            <span className={`text-sm font-medium ${dark ? "text-white" : "text-black"}`}>
              {collection.name}
            </span>
          </div>
        ))}

        {/* Second copy for continuous loop */}
        {TOP_NFT_COLLECTIONS.map((collection) => (
          <div
            key={`second-${collection.name}`}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              ${dark ? "bg-[#FFCC00] text-black" : "bg-[#FFCC00] text-black"}`}
            >
              {collection.shortName.slice(0, 1)}
            </div>
            <span className={`text-sm font-medium ${dark ? "text-white" : "text-black"}`}>
              {collection.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}