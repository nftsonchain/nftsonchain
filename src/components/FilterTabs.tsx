"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

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
  "Gram",
  "Injective",
  "Sei",
  "Celestia",
  "Juno",
  "Osmosis",
  "Secret",
  "Moonbeam",
  "VeChain",
  "EOS",
  "Hedera",
  "Zilliqa",
  "Algorand",
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

    setSearchTerm(focusChain ?? "");
    setIsOpen(true);

    setTimeout(() => {
      const selector = `button[data-chain="${focusChain}"]`;
      const el = panelRef.current?.querySelector(selector) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);

    onFocusHandled?.();
  }, [focusChain, onFocusHandled]);

  return (
    <div className="relative mt-6">

      {/* MAIN BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={`
          w-full flex items-center justify-between
          px-5 py-4
          rounded-2xl
          border
          shadow-lg
          backdrop-blur-xl
          transition
          ${dark ? "border-white/10 bg-white/5 text-white" : "border-black/10 bg-white text-black"}
        `}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-[#FFCC00]/15 flex items-center justify-center text-[#FFCC00]">
            ⛓
          </div>

          <div className="text-left min-w-0">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">
              Chain Filter
            </p>
            <p className="font-semibold truncate">{displayLabel}</p>
          </div>
        </div>

        <div className={`transition ${isOpen ? "rotate-180" : ""}`}>
          ⌄
        </div>
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          ref={panelRef}
          className={`
            absolute left-0 top-full mt-4 z-20
            w-full sm:w-[32rem]
            rounded-2xl
            border
            shadow-2xl
            backdrop-blur-2xl
            p-4
            ${dark ? "bg-[#0b1220]/90 border-white/10" : "bg-white border-black/10"}
          `}
        >

          {/* SEARCH */}
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search chains..."
            className={`
              w-full mb-4
              px-4 py-3
              rounded-xl
              border
              outline-none
              text-sm
              ${dark
                ? "bg-white/5 border-white/10 text-white placeholder-white/40"
                : "bg-black/5 border-black/10 text-black placeholder-black/40"}
            `}
          />

          {/* LIST */}
          <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1">
            {filteredChains.map((chain) => {
              const checked =
                hasAllSelected ? chain === "All Chains" : selectedChains.includes(chain);

              return (
                <button
                  key={chain}
                  data-chain={chain}
                  onClick={() => toggleChain(chain)}
                  className={`
                    w-full flex items-center justify-between
                    px-4 py-3
                    rounded-xl
                    border
                    transition
                    text-sm
                    ${
                      checked
                        ? "bg-[#FFCC00]/10 border-[#FFCC00]/30 text-white"
                        : dark
                        ? "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                        : "bg-black/5 border-black/10 text-black/80 hover:bg-black/10"
                    }
                  `}
                >
                  <span>{chain}</span>

                  <span
                    className={`
                      h-5 w-5 rounded-full border flex items-center justify-center
                      ${checked ? "border-[#FFCC00]" : "border-white/20"}
                    `}
                  >
                    {checked && (
                      <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => {
                setSelectedChains(["All Chains"]);
                setSearchTerm("");
              }}
              className={`
                flex-1 py-3 rounded-xl border text-sm
                ${dark ? "border-white/10 bg-white/5 text-white" : "border-black/10 bg-black/5 text-black"}
              `}
            >
              Reset
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-3 rounded-xl bg-[#FFCC00] text-black font-semibold text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}