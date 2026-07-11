"use client";

import { NFT_MARKETPLACES } from "@/data/marqueeData";

type Props = {
  dark: boolean;
};

export default function Marketplaces({ dark }: Props) {
  return (
    <div
      className={`h-[72px] overflow-hidden border-y
      ${dark ? "bg-[#05070D] border-white/10" : "bg-gray-100 border-black/10"}`}
    >
      <div className="flex w-max animate-marquee-right gap-10 h-full items-center px-6">

        {NFT_MARKETPLACES.map((marketplace) => (
          <div
            key={`first-${marketplace.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold bg-[#FFCC00] text-black"
            >
              {marketplace.name.charAt(0)}
            </div>

            <span
              className={`text-sm font-semibold tracking-wide ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {marketplace.name}
            </span>
          </div>
        ))}

        {NFT_MARKETPLACES.map((marketplace) => (
          <div
            key={`second-${marketplace.name}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold bg-[#FFCC00] text-black"
            >
              {marketplace.name.charAt(0)}
            </div>

            <span
              className={`text-sm font-semibold tracking-wide ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {marketplace.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}