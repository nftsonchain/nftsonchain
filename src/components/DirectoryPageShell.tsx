"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import Navbar from "@/components/Navbar";

type DirectoryPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
};

export function DirectoryPageShell({
  eyebrow,
  title,
  description,
  children,
  backHref,
  backLabel = "Back to directory",
}: DirectoryPageShellProps) {
  const [search, setSearch] = useState("");
  const { dark } = useTheme();

  const pageBg = dark
    ? "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,204,0,0.16),_transparent_24%),linear-gradient(135deg,_#06080f_0%,_#0b1120_100%)] text-white"
    : "min-h-screen bg-[linear-gradient(135deg,_#fffdf7_0%,_#f7f8fb_100%)] text-black";

  const cardStyle = dark
    ? "border-white/10 bg-white/[0.035] shadow-[0_20px_70px_rgba(0,0,0,0.22)]"
    : "border-black/[0.08] bg-white/90 shadow-[0_18px_55px_rgba(0,0,0,0.06)]";

  return (
    <main className={pageBg}>
      <Navbar search={search} setSearch={setSearch} />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:px-10 md:py-16 pb-36">
        <div className="space-y-5">
          {backHref ? (
            <Link
              href={backHref}
              className={`inline-flex items-center gap-2 text-sm font-semibold transition hover:translate-x-[-2px] ${
                dark ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{backLabel}</span>
            </Link>
          ) : null}

          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FFCC00]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{eyebrow}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-black tracking-tight md:text-4xl">
                {title}
              </h1>
              <p className={`max-w-3xl text-sm leading-7 md:text-base ${dark ? "text-white/70" : "text-black/70"}`}>
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className={`rounded-[32px] border p-6 md:p-8 ${cardStyle}`}>
          {children}
        </div>
      </div>
    </main>
  );
}
