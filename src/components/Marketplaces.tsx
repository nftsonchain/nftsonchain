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
            <span className="text-2xl">{marketplace.icon}</span>

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
            <span className="text-2xl">{marketplace.icon}</span>

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