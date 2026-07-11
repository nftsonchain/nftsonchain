import Link from "next/link";
import { ArrowUpRight, Building2, Globe2 } from "lucide-react";
import { marketplaces } from "@/data/marketplaces";
import { DirectoryPageShell } from "@/components/DirectoryPageShell";

export default function MarketplacesDirectoryPage() {
  return (
    <DirectoryPageShell
      eyebrow="Marketplace Directory"
      title="Discover NFT Marketplaces"
      description="Browse the full landscape of NFT marketplaces and launchpads. This directory reflects the same marketplace count as the launch section for consistent discovery."
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFCC00]">
          {marketplaces.length} marketplaces
        </div>
        <div className="text-sm text-black/60 dark:text-white/50">Curated across the most active Web3 ecosystems.</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketplaces.map((marketplace) => (
          <Link
            key={marketplace.id}
            href={`/marketplaces/${marketplace.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFCC00]/40 hover:bg-[#FFCC00]/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFCC00] to-yellow-500 text-lg shadow-lg shadow-[#FFCC00]/20">
                  {marketplace.logo}
                </div>
                <div>
                  <h2 className="text-base font-bold tracking-tight">{marketplace.name}</h2>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/40">{marketplace.category}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-black/40 dark:text-white/40 transition group-hover:text-[#FFCC00]" />
            </div>

            <p className="mt-4 text-sm leading-6 text-black/70 dark:text-white/70">
              {marketplace.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-black/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70">
                <Building2 className="h-3.5 w-3.5" />
                Founded {marketplace.foundedYear}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-black/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70">
                <Globe2 className="h-3.5 w-3.5" />
                {marketplace.supportedChains.length} chains
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageShell>
  );
}
