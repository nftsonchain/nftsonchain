import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { artists } from "@/data/artists";
import { DirectoryPageShell } from "@/components/DirectoryPageShell";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArtistProfilePage({ params }: Props) {
  const { id } = await params;
  const artist = artists.find((item) => item.id === id);

  if (!artist) {
    notFound();
  }

  return (
    <DirectoryPageShell
      eyebrow="Artist Profile"
      title={artist.displayName}
      description={artist.knownFor}
      backHref="/artists"
      backLabel="Back to artist directory"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFCC00] to-yellow-500 text-2xl font-black text-black shadow-lg shadow-[#FFCC00]/20">
              {artist.displayName.charAt(0)}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/40">NFT Artist</p>
              <h2 className="text-xl font-bold tracking-tight">{artist.displayName}</h2>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-black/60 dark:text-white/40">Known For</p>
            <p className="mt-2 text-sm leading-7 text-black/70 dark:text-white/70">{artist.knownFor}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold">Official Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={artist.twitter}
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

          <div className="rounded-2xl border border-[#FFCC00]/20 bg-[#FFCC00]/10 p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#FFCC00]" />
              <h3 className="text-lg font-semibold text-[#FFCC00]">Creator Spotlight</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-black/75 dark:text-white/75">
              This profile highlights the artist’s public identity and the themes they are known for in the NFT ecosystem.
            </p>
          </div>
        </div>
      </div>
    </DirectoryPageShell>
  );
}
