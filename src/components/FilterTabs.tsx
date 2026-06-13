"use client";

import { useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from "react";

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
  selectedChains,
  setSelectedChains,
}: {
  selectedChains: string[];
  setSelectedChains: Dispatch<SetStateAction<string[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const filteredChains = useMemo(
    () =>
      chains.filter((chain) =>
        chain.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const hasAllSelected =
    selectedChains.length === 0 || selectedChains.includes("All Chains");

  const displayLabel = useMemo(() => {
    if (hasAllSelected) return "All Chains";
    if (selectedChains.length === 1) return selectedChains[0];
    return `${selectedChains.length} Selected`;
  }, [hasAllSelected, selectedChains]);

  const toggleChain = (chain: string) => {
    if (chain === "All Chains") {
      setSelectedChains(["All Chains"]);
      return;
    }

    setSelectedChains((current) => {
      const normalized = current.filter((item) => item !== "All Chains");

      if (normalized.includes(chain)) {
        const next = normalized.filter((item) => item !== chain);
        return next.length === 0 ? ["All Chains"] : next;
      }

      return [...normalized, chain];
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-3 rounded-[32px] border border-white/10 bg-[#111827]/90 px-4 py-4 shadow-sm shadow-black/20 transition hover:border-green-400/40 sm:max-w-2xl"
        >
          <span className="flex items-center gap-3 text-sm font-medium text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-green-500/10 text-green-300">
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
            </span>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-400">Chain selector</p>
              <p className="text-sm font-semibold text-white">{displayLabel}</p>
            </div>
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-5 w-5 text-green-300 transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Open filters"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-green-400"
          >
            <path d="M4 4h16" />
            <path d="M7 12h10" />
            <path d="M10 20h4" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          ref={panelRef}
          className="absolute left-0 top-full z-20 mt-4 w-full rounded-[32px] border border-white/10 bg-[#08101f]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:w-[32rem]"
        >
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
              <label htmlFor="chain-search" className="sr-only">
                Search chains
              </label>
              <input
                id="chain-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search chains"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              <p className="font-medium text-white">Filter options</p>
              <p className="text-xs text-gray-400">
                {hasAllSelected ? "Showing all chains" : `${selectedChains.length} selected`}
              </p>
            </div>

            <div className="max-h-[320px] overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="grid gap-2">
                {filteredChains.map((chain) => {
                  const checked = hasAllSelected
                    ? chain === "All Chains"
                    : selectedChains.includes(chain);
                  return (
                    <button
                      key={chain}
                      type="button"
                      onClick={() => toggleChain(chain)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                        checked
                          ? "bg-green-500/10 text-white"
                          : "bg-transparent text-gray-200 hover:bg-white/10"
                      }`}
                    >
                      <span>{chain}</span>
                      <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${checked ? "border-green-400 bg-green-400/15" : "border-white/10"}`}>
                        {checked ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-green-400"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  setSelectedChains(["All Chains"]);
                  setSearchTerm("");
                }}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-3xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
