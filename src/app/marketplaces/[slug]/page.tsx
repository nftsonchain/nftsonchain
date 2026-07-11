import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Globe2, Rocket, ExternalLink } from "lucide-react";
import { marketplaces } from "@/data/marketplaces";
import { blockchains } from "@/data/blockchains";
import { DirectoryPageShell } from "@/components/DirectoryPageShell";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function MarketplaceProfilePage({ params }: Props) {
  const { slug } = await params;
  const marketplace = marketplaces.find((item) => item.slug === slug);

  if (!marketplace) {
    notFound();
  }

  const supportedChains = marketplace.supportedChains
    .map((chainId) => blockchains.find((chain) => chain.id === chainId))
    .filter((chain): chain is (typeof blockchains)[number] => Boolean(chain));

  return (
    <DirectoryPageShell
      eyebrow="Marketplace Profile"
      title={marketplace.name}
      description={marketplace.description}
      backHref="/marketplaces"
      backLabel="Back to marketplace directory"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 p-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFCC00] to-yellow-500 text-3xl shadow-lg shadow-[#FFCC00]/20">
              {marketplace.logo}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/40">Marketplace</p>
              <h2 className="text-2xl font-bold tracking-tight">{marketplace.name}</h2>
              <p className="text-sm text-black/60 dark:text-white/60">{marketplace.category} · {marketplace.foundedYear}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-black/60 dark:text-white/40">Founded</p>
              <p className="mt-2 text-xl font-semibold text-black/70 dark:text-white/70">{marketplace.foundedYear}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-black/60 dark:text-white/40">Supported Chains</p>
              <p className="mt-2 text-xl font-semibold text-black/70 dark:text-white/70">{supportedChains.length}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex items-center gap-2">
              <Rocket className="h-4 w-4 text-[#FFCC00]" />
              <h3 className="text-lg font-semibold">About</h3>
            </div>
            <p className="text-sm leading-7 text-black/70 dark:text-white/70">{marketplace.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold">Supported Blockchains</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {supportedChains.map((chain) => (
                <span
                  key={chain.id}
                  className="inline-flex items-center gap-2 rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 px-3 py-1.5 text-sm font-semibold text-[#FFCC00]"
                >
                  <span>{chain.logo}</span>
                  <span>{chain.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold">Official Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={marketplace.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-black/10 bg-black/10 px-4 py-3 text-sm font-semibold text-black/80 transition hover:border-[#FFCC00]/40 hover:text-black dark:border-white/10 dark:bg-black/20 dark:text-white/80 dark:hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[#FFCC00]" />
                  Official Website
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={marketplace.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-black/10 bg-black/10 px-4 py-3 text-sm font-semibold text-black/80 transition hover:border-[#FFCC00]/40 hover:text-black dark:border-white/10 dark:bg-black/20 dark:text-white/80 dark:hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-[#FFCC00]" />
                  Official X account
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DirectoryPageShell>
  );
}
