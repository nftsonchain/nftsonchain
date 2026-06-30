"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logoImage from "@/images/yhxyWdcf_400x400.jpg";
import { useTheme } from "@/context/theme-context";

type Props = {
  onMenuClick: () => void;
  search: string;
  setSearch: (value: string) => void;
};

export default function Navbar({
  onMenuClick,
  search,
  setSearch,
}: Props) {
  const { theme } = useTheme();

  // Force system + light to still use dark mode styling
  const dark =
    theme === "dark" ||
    theme === "light" ||
    theme === "system";

  return (
    <header
      className={`
        sticky top-0 z-50 w-full border-b backdrop-blur-2xl
        ${
          dark
            ? "bg-black/60 border-white/10"
            : "bg-white/80 border-black/10"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-6 h-20 flex items-center gap-6">

        {/* LOGO */}
        <div className="flex items-center flex-shrink-0 min-w-[230px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-md">
              <Image
                src={logoImage}
                alt="NFTs OnChain Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>

            <h1 className="font-extrabold text-xl md:text-2xl text-[#FFCC00] flex items-center gap-2">
              NFTs OnChain
              <span className="text-[#FFCC00] text-2xl leading-none">◉</span>
            </h1>
          </Link>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center">
          <div
            className={`
              flex items-center gap-4 w-full max-w-xl
              px-6 py-4 rounded-2xl
              border backdrop-blur-2xl
              transition-all duration-300
              ${
                dark
                  ? "bg-white/5 border-white/10 shadow-[0_0_45px_-22px_rgba(255,204,0,0.3)]"
                  : "bg-white border-black/10"
              }
            `}
          >
            <Search className="w-5 h-7 text-gray-400 flex-shrink-0" />

            <input
              type="text"
              placeholder="Search NFTs, marketplaces, chains, supply..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`
                w-full bg-transparent outline-none text-base font-medium
                ${
                  dark
                    ? "text-white placeholder:text-gray-500"
                    : "text-black placeholder:text-gray-400"
                }
              `}
            />
          </div>
        </div>

        {/* AUTH + MENU */}
        <div className="flex items-center gap-3 flex-shrink-0 min-w-[290px] justify-end">

          <SignedOut>

            {/* SIGN IN */}
            <Link
              href="/sign-in"
              className={`
                inline-flex items-center justify-center
                px-7 py-3
                min-w-[70px]
                rounded-xl
                whitespace-nowrap
                text-sm md:text-base
                font-bold
                border backdrop-blur-xl
                transition-all duration-300 ease-out
                ${
                  dark
                    ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    : "bg-white border-black/10 text-black hover:bg-black/5"
                }
              `}
            >
              Sign In
            </Link>

            {/* SIGN UP */}
            <Link
              href="/sign-up"
              className="
                inline-flex items-center justify-center
                px-8 py-3
                min-w-[70px]
                rounded-xl
                whitespace-nowrap
                text-sm md:text-base
                font-bold text-black
                bg-gradient-to-r from-[#FFCC00] to-[#FFD84D]
                shadow-[0_12px_30px_-10px_rgba(255,204,0,0.65)]
                hover:shadow-[0_16px_40px_-10px_rgba(255,204,0,0.85)]
                transition-all duration-300 ease-out
                hover:scale-[1.03]
              "
            >
              Sign Up
            </Link>

          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-11 h-11",
                },
              }}
            />
          </SignedIn>

          {/* MENU BUTTON */}
          <button
            onClick={onMenuClick}
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center border
              transition-all duration-300
              ${
                dark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }
            `}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>
    </header>
  );
}