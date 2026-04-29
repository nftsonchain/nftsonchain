"use client";

import { useRef } from "react";

const chains = [
  "All Chains",
  "Ethereum",
  "Polygon",
  "Arbitrum",
  "Optimism",
  "Base",
  "Solana",
  "BNB Chain",
  "Avalanche",
  "Flow",
  "Tezos",
  "NEAR",
  "Cardano",
  "Immutable X",
  "Cosmos",
  "Bitcoin",
  "WAX",
  "TON",
  "Injective",
  "Sei",
  "Celestia",
  "Juno",
  "Osmosis",
  "Secret",
  "Moonbeam",
  "VeChain",
  "TRON",
  "EOS",
  "Hedera",
  "Zilliqa",
  "Algorand",

  // 🔥 NEW CHAINS
  "Aptos",
  "Sui",
  "Ronin",
  "Klaytn",
  "Palm",
  "Chiliz",
  "zkSync",
  "Scroll",
  "Linea",
  "Mantle",
  "Blast",
];

export default function FilterTabs({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (val: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-4">
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
        {chains.map((chain) => (
          <button
            key={chain}
            onClick={() => setSelected(chain)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition
              ${
                selected === chain
                  ? "bg-green-500 text-black font-medium"
                  : "bg-gray-200/10 hover:bg-gray-300/20"
              }
            `}
          >
            {chain}
          </button>
        ))}
      </div>

      {/* SCROLL HINT BAR */}
      <div className="h-1 mt-1 w-full bg-gray-300/20 rounded overflow-hidden">
        <div className="h-full w-1/3 bg-green-400 rounded animate-pulse" />
      </div>
    </div>
  );
}