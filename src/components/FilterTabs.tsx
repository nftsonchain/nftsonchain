"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ChevronDown, Link2, Layers, Package } from "lucide-react";

const chainOptions = [
  "All Chains",
  "Bitcoin",
  "Ethereum",
  "Solana",
  "Polygon",
  "Base",
  "Arbitrum",
  "Optimism",
  "Avalanche",
  "BNB",
  "BNB Chain",
  "Cardano",
  "Tezos",
  "Flow",
  "Hedera",
  "Immutable",
  "Cosmos",
  "Juno",
  "Celestia",
  "Injective",
  "SEI",
  "Near",
  "Algorand",
  "Tron",
  "VeChain",
  "WAX",
  "Moonbeam",
  "Zilliqa",
  "Abstract",
  "ApeChain",
  "Blast",
  "Soneium",
  "Aptos",
  "TON",
  "Berachain",
  "Mantle",
  "Ronin",
  "Shape",
  "Linea",
  "zkSync Era",
  "Zion",
];

const categoryOptions = [
  "All",
  "PFP",
  "Gaming",
  "Photography",
  "Music",
  "AI",
  "Anime",
  "Pixel",
  "Meme",
  "Sports",
  "Fashion",
  "Collectible",
];

const supplyOptions = [
  "All",
  "0–100",
  "101–500",
  "501–1,000",
  "1,001–5,000",
  "5,001–10,000",
  "10,001–15,000",
  "15,001–20,000",
  "20,001–50,000",
  "50,001–100,000",
  "100,000+",
];

type OpenPanel = "chain" | "category" | "supply" | null;

export default function FilterTabs({
  selectedChains,
  setSelectedChains,
  focusChain,
  onFocusHandled,
  autoCloseOnSelect = true,
  dark = true,
  selectedCategory,
  setSelectedCategory,
  selectedSupply,
  setSelectedSupply,
}: {
  selectedChains: string[];
  setSelectedChains: Dispatch<SetStateAction<string[]>>;
  focusChain?: string | null;
  onFocusHandled?: () => void;
  autoCloseOnSelect?: boolean;
  dark?: boolean;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedSupply: string;
  setSelectedSupply: Dispatch<SetStateAction<string>>;
}) {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const [chainSearch, setChainSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredChains = useMemo(
    () =>
      chainOptions.filter((chain) =>
        chain.toLowerCase().includes(chainSearch.toLowerCase())
      ),
    [chainSearch]
  );

  const hasAllSelected =
    selectedChains.length === 0 || selectedChains.includes("All Chains");

  const chainLabel = useMemo(() => {
    if (hasAllSelected) return "All Chains";
    if (selectedChains.length === 1) return selectedChains[0];
    return `${selectedChains.length} Chains`;
  }, [hasAllSelected, selectedChains]);

  const categoryLabel = selectedCategory === "All" ? "All Categories" : selectedCategory;
  const supplyLabel = selectedSupply === "All" ? "All Supplies" : selectedSupply;

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

    if (autoCloseOnSelect) setOpenPanel(null);
  };

  const toggle = (panel: OpenPanel) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpenPanel(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus chain
  useEffect(() => {
    if (!focusChain) return;

    const timer = window.setTimeout(() => {
      setChainSearch(focusChain ?? "");
      setOpenPanel("chain");
      onFocusHandled?.();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [focusChain, onFocusHandled]);

  // Shared styles
  const triggerBase = `
    flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4
    backdrop-blur-xl transition-all duration-300 cursor-pointer select-none
    hover:-translate-y-[1px] hover:shadow-lg
  `;

  const triggerIdle = dark
    ? "border-white/10 bg-white/[0.04] text-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
    : "border-black/10 bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.06)]";

  const triggerActive = dark
    ? "border-[#FFCC00]/30 bg-[#FFCC00]/[0.06] text-white shadow-[0_12px_40px_rgba(255,204,0,0.10)]"
    : "border-[#FFCC00]/40 bg-[#FFCC00]/[0.06] text-black shadow-[0_12px_40px_rgba(255,204,0,0.10)]";

  const dropdownBase = `
    overflow-hidden transition-all duration-300 ease-out
    rounded-2xl border backdrop-blur-2xl mt-3 p-4
    shadow-[0_20px_60px_rgba(0,0,0,0.24)]
  `;

  const dropdownBg = dark
    ? "border-white/10 bg-[#0b1220]/95"
    : "border-black/10 bg-white";

  const optionBase = `flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all duration-200`;

  const optionActive = "border-[#FFCC00]/30 bg-[#FFCC00]/10 text-[#FFCC00] font-medium";

  const optionIdle = dark
    ? "border-white/[0.06] bg-white/[0.03] text-white/80 hover:bg-white/[0.07] hover:border-white/10"
    : "border-black/[0.06] bg-black/[0.02] text-black/80 hover:bg-black/[0.06] hover:border-black/10";

  const Radio = ({ checked }: { checked: boolean }) => (
    <span
      className={`flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 transition-colors ${
        checked ? "border-[#FFCC00]" : dark ? "border-white/20" : "border-black/20"
      }`}
    >
      {checked && (
        <span className="h-2 w-2 rounded-full bg-[#FFCC00] animate-[scale-in_0.15s_ease-out]" />
      )}
    </span>
  );

  return (
    <div ref={containerRef} className="mt-6 space-y-3">
      <div className="grid gap-3 md:grid-cols-3">

        {/* ═══ CHAIN FILTER ═══ */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("chain")}
            className={`${triggerBase} ${openPanel === "chain" ? triggerActive : triggerIdle}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFCC00]/15 text-[#FFCC00]">
                <Link2 className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left">
                <p className={`text-[10px] uppercase tracking-[0.2em] ${dark ? "text-white/35" : "text-black/35"}`}>
                  Chain
                </p>
                <p className="truncate text-sm font-semibold">{chainLabel}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openPanel === "chain" ? "rotate-180 text-[#FFCC00]" : dark ? "text-white/30" : "text-black/30"
              }`}
            />
          </button>

          <div
            className={`${dropdownBase} ${dropdownBg} ${
              openPanel === "chain"
                ? "max-h-[400px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 !p-0 !mt-0 !border-0 pointer-events-none"
            }`}
          >
            <input
              value={chainSearch}
              onChange={(e) => setChainSearch(e.target.value)}
              placeholder="Search chains..."
              className={`mb-3 w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${
                dark
                  ? "border-white/10 bg-white/5 text-white placeholder-white/35 focus:border-[#FFCC00]/40"
                  : "border-black/10 bg-black/5 text-black placeholder-black/35 focus:border-[#FFCC00]/40"
              }`}
            />
            <div className="max-h-[280px] space-y-1.5 overflow-y-auto pr-1 scrollbar-none">
              {filteredChains.map((chain) => {
                const checked = hasAllSelected
                  ? chain === "All Chains"
                  : selectedChains.includes(chain);

                return (
                  <button
                    key={chain}
                    data-chain={chain}
                    onClick={() => toggleChain(chain)}
                    className={`${optionBase} ${checked ? optionActive : optionIdle}`}
                  >
                    <span>{chain}</span>
                    <Radio checked={checked} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══ CATEGORY FILTER ═══ */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("category")}
            className={`${triggerBase} ${openPanel === "category" ? triggerActive : triggerIdle}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFCC00]/15 text-[#FFCC00]">
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left">
                <p className={`text-[10px] uppercase tracking-[0.2em] ${dark ? "text-white/35" : "text-black/35"}`}>
                  Category
                </p>
                <p className="truncate text-sm font-semibold">{categoryLabel}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openPanel === "category" ? "rotate-180 text-[#FFCC00]" : dark ? "text-white/30" : "text-black/30"
              }`}
            />
          </button>

          <div
            className={`${dropdownBase} ${dropdownBg} ${
              openPanel === "category"
                ? "max-h-[400px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 !p-0 !mt-0 !border-0 pointer-events-none"
            }`}
          >
            <div className="max-h-[320px] space-y-1.5 overflow-y-auto pr-1 scrollbar-none">
              {categoryOptions.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenPanel(null);
                    }}
                    className={`${optionBase} ${active ? optionActive : optionIdle}`}
                  >
                    <span>{category}</span>
                    <Radio checked={active} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══ SUPPLY FILTER ═══ */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("supply")}
            className={`${triggerBase} ${openPanel === "supply" ? triggerActive : triggerIdle}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFCC00]/15 text-[#FFCC00]">
                <Package className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left">
                <p className={`text-[10px] uppercase tracking-[0.2em] ${dark ? "text-white/35" : "text-black/35"}`}>
                  Total Supply
                </p>
                <p className="truncate text-sm font-semibold">{supplyLabel}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openPanel === "supply" ? "rotate-180 text-[#FFCC00]" : dark ? "text-white/30" : "text-black/30"
              }`}
            />
          </button>

          <div
            className={`${dropdownBase} ${dropdownBg} ${
              openPanel === "supply"
                ? "max-h-[400px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 !p-0 !mt-0 !border-0 pointer-events-none"
            }`}
          >
            <div className="max-h-[320px] space-y-1.5 overflow-y-auto pr-1 scrollbar-none">
              {supplyOptions.map((range) => {
                const active = selectedSupply === range;
                return (
                  <button
                    key={range}
                    onClick={() => {
                      setSelectedSupply(range);
                      setOpenPanel(null);
                    }}
                    className={`${optionBase} ${active ? optionActive : optionIdle}`}
                  >
                    <span>{range}</span>
                    <Radio checked={active} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* RESET ALL — shown when any filter is active */}
      {(!hasAllSelected || selectedCategory !== "All" || selectedSupply !== "All") && (
        <div className="flex justify-end">
          <button
            onClick={() => {
              setSelectedChains(["All Chains"]);
              setSelectedCategory("All");
              setSelectedSupply("All");
              setChainSearch("");
              setOpenPanel(null);
            }}
            className={`rounded-xl border px-5 py-2.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-[1px] ${
              dark
                ? "border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.07]"
                : "border-black/10 bg-black/[0.03] text-black/60 hover:text-black hover:bg-black/[0.06]"
            }`}
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}