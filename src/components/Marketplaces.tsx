"use client";

import { NFT_MARKETPLACES } from "@/data/marqueeData";

type Props = {
  dark: boolean;
};

export default function Marketplaces({ dark }: Props) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-b
      ${dark ? "bg-[#05070D]/50 border-white/10" : "bg-gray-50 border-black/10"}`}
    >
      <div className="flex w-max animate-marquee-right gap-8 py-4 px-4">
        {/* First copy for continuous loop */}
        {NFT_MARKETPLACES.map((marketplace) => (
          <div
            key={`first-${marketplace.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <span className="text-xl">{marketplace.icon}</span>
            <span className={`text-sm font-medium ${dark ? "text-white/80" : "text-black/70"}`}>
              {marketplace.name}
            </span>
          </div>
        ))}

        {/* Second copy for continuous loop */}
        {NFT_MARKETPLACES.map((marketplace) => (
          <div
            key={`second-${marketplace.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <span className="text-xl">{marketplace.icon}</span>
            <span className={`text-sm font-medium ${dark ? "text-white/80" : "text-black/70"}`}>
              {marketplace.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}