"use client";

import { useState } from "react";
import {
  useUser,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useTheme } from "@/context/theme-context";
import { Avatar } from "@/lib/avatars";
import Link from "next/link";
import {
  LogOut,
  LogIn,
  UserPlus,
  Heart,
  HelpCircle,
  Info,
  Settings,
  Users,
  Upload,
  UserCircle2,
  ChevronDown,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  dark: boolean;
};

type NavProps = {
  href: string;
  icon: any;
  label: string;
  dark: boolean;
  onClick?: () => void;
};

function NavItem({
  href,
  icon: Icon,
  label,
  dark,
  onClick,
}: NavProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-5
        px-2 py-4
        transition-all duration-300
        hover:translate-x-1
        ${
          dark
            ? "text-white/85 hover:text-white"
            : "text-black/85 hover:text-black"
        }
      `}
    >
      <Icon className="w-9 h-9 text-[#FFCC00]" />
      <span className="text-[1.55rem] font-semibold tracking-tight">
        {label}
      </span>
    </Link>
  );
}

const iconClass =
  "w-10 h-10 object-contain cursor-pointer transition duration-300 hover:scale-110";

const sectionTitle =
  "text-xs uppercase tracking-[0.28em] font-semibold text-[#FFCC00]/70";

export default function SidePanel({
  open,
  onClose,
  dark,
}: Props) {
  const { user: clerkUser } = useUser();
  const { userProfile } = useUserProfile();
  const { theme, setTheme } = useTheme();

  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          onClick={onClose}
        />
      )}

      {/* PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[22rem] z-50
          transition-transform duration-500 ease-out
          overflow-y-auto overflow-x-hidden
          backdrop-blur-3xl
          shadow-[0_40px_120px_rgba(0,0,0,0.85)]
          border-l border-white/10
          scrollbar-hide
          ${open ? "translate-x-0" : "translate-x-full"}
          ${dark ? "bg-black/70 text-white" : "bg-white/80 text-black"}
        `}
      >
        <div className="p-7">

          {/* USER CARD */}
          <div
            className={`
              rounded-2xl
              p-5
              backdrop-blur-xl
              border border-white/10
              ${dark ? "bg-white/5" : "bg-black/5"}
            `}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFCC00] to-yellow-500 flex items-center justify-center shadow-lg">
                {clerkUser && userProfile ? (
                  <Avatar avatar={userProfile.avatar} size="md" />
                ) : (
                  <UserCircle2 className="w-10 h-10 text-black" />
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {clerkUser && userProfile
                    ? userProfile.username
                    : "Guest User"}
                </h2>
                <p className="text-base text-white/50">
                  {clerkUser && userProfile
                    ? userProfile.email
                    : "Not signed in"}
                </p>
              </div>
            </div>
          </div>

          <div className="h-6" />

          {/* AUTH */}
          {!clerkUser ? (
            <>
              <SignInButton mode="modal">
                <button className="w-full py-5 rounded-2xl bg-[#FFCC00] text-black font-bold text-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition">
                  <LogIn className="w-7 h-7" />
                  Sign In
                </button>
              </SignInButton>

              <div className="h-3" />

              <SignUpButton mode="modal">
                <button className="w-full py-5 rounded-2xl bg-red-500/15 border border-red-400/20 text-red-300 font-bold text-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition">
                  <UserPlus className="w-7 h-7" />
                  Sign Up
                </button>
              </SignUpButton>
            </>
          ) : (
            <SignOutButton redirectUrl="/">
              <button className="w-full py-5 rounded-2xl bg-red-500/15 border border-red-400/20 text-red-300 font-bold text-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition">
                <LogOut className="w-7 h-7" />
                Sign Out
              </button>
            </SignOutButton>
          )}

          <div className="h-6" />

          {/* WORKSPACE */}
          <div>
            <h3 className={sectionTitle}>WORKSPACE</h3>

            <div className="h-2" />

            <NavItem
              href="/community"
              icon={Users}
              label="Join Community"
              dark={dark}
              onClick={onClose}
            />

            <div className="h-2" />

            <NavItem
              href="/profile/favorites"
              icon={Heart}
              label="Favorites"
              dark={dark}
              onClick={onClose}
            />

            <div className="h-2" />

            <NavItem
              href="/submit"
              icon={Upload}
              label="Submit"
              dark={dark}
              onClick={onClose}
            />
          </div>

          <div className="h-6" />

          {/* RESOURCES */}
          <div>
            <h3 className={sectionTitle}>RESOURCES</h3>

            <div className="h-2" />

            {/* SETTINGS DROPDOWN */}
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="w-full flex items-center justify-between px-2 py-4"
            >
              <div className="flex items-center gap-5">
                <Settings className="w-9 h-9 text-[#FFCC00]" />
                <span className="text-[1.55rem] font-semibold tracking-tight">
                  Settings
                </span>
              </div>

              <ChevronDown
                className={`transition ${
                  settingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {settingsOpen && (
              <div className="ml-14 mt-2 space-y-2">
                {["system", "light", "dark"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() =>
                      setTheme(
                        mode as "system" | "light" | "dark"
                      )
                    }
                    className={`block w-full text-left px-4 py-3 rounded-xl transition ${
                      theme === mode
                        ? "bg-[#FFCC00] text-black"
                        : dark
                        ? "text-white/70 hover:bg-white/5"
                        : "text-black/70 hover:bg-black/5"
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            )}

            <div className="h-2" />

            <NavItem
              href="/help"
              icon={HelpCircle}
              label="Help Center"
              dark={dark}
              onClick={onClose}
            />

            <div className="h-2" />

            <NavItem
              href="/about"
              icon={Info}
              label="About"
              dark={dark}
              onClick={onClose}
            />
          </div>

          <div className="h-6" />

          {/* FOLLOW */}
          <div className="pb-8">
            <h3 className={`${sectionTitle} mb-8`}>
              FOLLOW NFTs ONCHAIN
            </h3>

            <div className="flex items-center justify-between gap-2 px-1">
              <a href="https://x.com/nfts_onchain" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/twitterx.png" className={iconClass} alt="X" />
              </a>
              <a href="https://discord.gg/WvtMNVQjcw" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/48/discord.png" className={iconClass} alt="Discord" />
              </a>
              <a href="https://youtube.com/@nfts_onchain" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/48/youtube-play.png" className={iconClass} alt="YouTube" />
              </a>
              <a href="https://www.tiktok.com/@nfts_onchain" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/48/tiktok.png" className={iconClass} alt="TikTok" />
              </a>
              <a href="https://www.instagram.com/nfts_onchain" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/48/instagram-new.png" className={iconClass} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/share/1AxrJpxfwm/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/48/facebook-new.png" className={iconClass} alt="Facebook" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}