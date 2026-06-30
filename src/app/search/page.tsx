"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { allNFTs } from "@/data";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const filtered = allNFTs.filter((nft: any) => {
      return (
        nft.name?.toLowerCase().includes(lowerQuery) ||
        nft.chain?.toLowerCase().includes(lowerQuery) ||
        nft.category?.toLowerCase().includes(lowerQuery) ||
        nft.marketplace?.toLowerCase().includes(lowerQuery) ||
        nft.description?.toLowerCase().includes(lowerQuery)
      );
    });

    setResults(filtered);

    const params = new URLSearchParams(searchParams);
    params.set("q", query);

    router.replace(`/search?${params.toString()}`);
  }, [query, router, searchParams]);

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      {/* CENTERED WRAPPER */}
      <div className="w-full min-h-screen flex justify-center px-6 md:px-10 py-14">
        <div className="w-full max-w-3xl">

          {/* SEARCH HEADER */}
          <div className="mb-12 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFCC00] tracking-tight">
              Search NFTs
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Search NFTs, marketplaces, chains, collections, and more
            </p>
          </div>

          {/* SEARCH BAR (UNCHANGED STRUCTURE) */}
          <div className="relative mb-12">
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">

              <Search className="w-5 h-5 text-white/50" />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search NFTs, chains, marketplaces..."
                className="flex-1 bg-transparent outline-none px-4 text-base text-white placeholder-white/40"
              />

              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-white/50 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* RESULTS */}
          <div className="space-y-5">
            {results.length > 0 ? (
              results.map((nft) => (
                <div
                  key={nft.id}
                  onClick={() => router.push(`/nft/${nft.id}`)}
                  className="
                    p-6 rounded-[24px]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    hover:bg-white/10
                    hover:border-white/15
                    transition-all duration-300
                    cursor-pointer
                    shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                  "
                >
                  <h2 className="text-2xl font-semibold text-[#FFCC00]">
                    {nft.name}
                  </h2>

                  <p className="text-white/70 mt-3 text-base">
                    {nft.chain} • {nft.category}
                  </p>

                  <p className="text-white/50 text-sm mt-4 leading-7 line-clamp-2">
                    {nft.description}
                  </p>
                </div>
              ))
            ) : query ? (
              <div className="text-center py-20 text-white/50 text-lg">
                No results found.
              </div>
            ) : (
              <div className="text-center py-20 text-white/40 text-lg">
                Start typing to search NFTs...
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}