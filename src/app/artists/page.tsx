import Link from "next/link";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { artists } from "@/data/artists";
import { DirectoryPageShell } from "@/components/DirectoryPageShell";

export default function ArtistsDirectoryPage() {
  return (
    <DirectoryPageShell
      eyebrow="Artist Directory"
      title="Discover NFT Artists"
      description="Explore the creators redefining digital culture, generative art, and collectible communities on-chain."
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFCC00]">
          {artists.length} artists
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artists/${artist.id}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFCC00]/40 hover:bg-[#FFCC00]/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-black/60 dark:text-white/40">Artist</p>
                <h2 className="mt-2 text-base font-bold tracking-tight">{artist.displayName}</h2>
              </div>
              <ArrowUpRight className="h-4 w-4 text-black/40 dark:text-white/40 transition group-hover:text-[#FFCC00]" />
            </div>

            <p className="mt-4 text-sm leading-6 text-black/70 dark:text-white/70">{artist.knownFor}</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-black/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70">
              <ExternalLink className="h-3.5 w-3.5" />
              Official X
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageShell>
  );
}
