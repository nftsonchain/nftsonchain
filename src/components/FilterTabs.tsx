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
  focusChain,
  onFocusHandled,
  autoCloseOnSelect = true,
  dark = true,
}: {
  selectedChains: string[];
  setSelectedChains: Dispatch<SetStateAction<string[]>>;
  focusChain?: string | null;
  onFocusHandled?: () => void;
  autoCloseOnSelect?: boolean;
  dark?: boolean;
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
      setIsOpen(false);
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
    // close panel after a selection for quicker UX (configurable)
    if (autoCloseOnSelect) setIsOpen(false);
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

  useEffect(() => {
    if (!focusChain) return;
    // open panel and pre-fill search to focus the given chain
    setSearchTerm(focusChain ?? "");
    setIsOpen(true);
    // let the panel render then try to scroll the target into view
    setTimeout(() => {
      try {
        const selector = `button[data-chain="${focusChain}"]`;
        const el = panelRef.current?.querySelector(selector) as HTMLElement | null;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch (e) {
        // ignore
      }
    }, 80);
    onFocusHandled?.();
  }, [focusChain, onFocusHandled]);

  return (
    <div className="relative mt-6">
      <div className="flex items-center gap-3 flex-nowrap">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`flex flex-1 min-w-0 items-center justify-between gap-3 rounded-[32px] border px-4 py-3 shadow-sm shadow-black/20 transition ${
            dark
              ? "border-white/10 bg-[#111827]/90"
              : "border-black/10 bg-white"
          }`}
        >
          <span className={`flex items-center gap-3 text-sm font-medium ${dark ? "text-white" : "text-black"} min-w-0`}>
            <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#FFCC00]/15 text-[#FFCC00]">
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
            <div className="text-left min-w-0">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-400">Chain selector</p>
              <p className={`text-sm font-semibold truncate ${dark ? "text-white" : "text-black"}`}>{displayLabel}</p>
            </div>
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-5 w-5 text-[#FFCC00] transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border transition ${
            dark
              ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
              : "border-black/10 bg-black/5 text-black hover:bg-black/10"
          }`}
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
            className={`absolute left-0 top-full z-20 mt-4 w-full rounded-[32px] border p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:w-[32rem] ${
              dark
                ? "border-white/10 bg-[#08101f]/95"
                : "border-black/10 bg-white/95"
            }`}
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
                className={`w-full bg-transparent text-sm outline-none placeholder:text-gray-500 ${
                  dark ? "text-white" : "text-black"
                }`}
              />
            </div>

            <div className={`flex items-center justify-between gap-4 rounded-3xl border px-4 py-3 text-sm ${
              dark ? "border-white/10 bg-white/5 text-gray-300" : "border-black/10 bg-black/5 text-gray-700"
            }`}>
              <p className={`font-medium ${dark ? "text-white" : "text-black"}`}>Filter options</p>
              <p className="text-xs text-gray-400">
                {hasAllSelected ? "Showing all chains" : `${selectedChains.length} selected`}
              </p>
            </div>

            <div className={`max-h-[320px] overflow-y-auto rounded-3xl border p-3 ${
              dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
            }`}>
              <div className="grid gap-2">
                {filteredChains.map((chain) => {
                  const checked = hasAllSelected
                    ? chain === "All Chains"
                    : selectedChains.includes(chain);
                  return (
                    <button
                      key={chain}
                      type="button"
                      data-chain={chain}
                      onClick={() => toggleChain(chain)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                        checked
                          ? "bg-[#FFCC00]/10 text-white"
                          : dark
                          ? "bg-transparent text-gray-200 hover:bg-white/10"
                          : "bg-transparent text-black/80 hover:bg-black/10"
                      }`}
                    >
                      <span>{chain}</span>
                      <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${checked ? "border-[#FFCC00] bg-[#FFCC00]/15" : dark ? "border-white/10" : "border-black/10"}`}>
                        {checked ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-[#FFCC00]"
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
                className={`rounded-3xl border px-4 py-3 text-sm transition ${
                  dark
                    ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    : "border-black/10 bg-black/5 text-black hover:bg-black/10"
                }`}>

                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-3xl bg-[#FFCC00] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#E6B800]"
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
