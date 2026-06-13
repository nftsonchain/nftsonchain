"use client";

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
  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 rounded-[32px] border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-sm shadow-black/20">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500/10 text-green-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 6h16" />
              <path d="M4 12h10" />
              <path d="M4 18h7" />
              <path d="M14 6l6 6-6 6" />
            </svg>
          </div>

          <div className="flex-1 min-w-[180px]">
            <label htmlFor="chain-select" className="sr-only">
              Select a chain
            </label>
            <select
              id="chain-select"
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
              className="w-full appearance-none bg-transparent text-sm font-medium text-white outline-none transition"
            >
              {chains.map((chain) => (
                <option key={chain} value={chain} className="bg-[#0B0F1A] text-white">
                  {chain}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[28px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-green-400"
          >
            <path d="M4 6h16" />
            <path d="M10 12h10" />
            <path d="M6 18h8" />
          </svg>
          More Filters
        </button>
      </div>
    </div>
  );
}