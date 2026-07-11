"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  useUser,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useTheme } from "@/context/theme-context";
import { Avatar } from "@/lib/avatars";
import {
  Compass,
  Link2,
  Store,
  User,
  Users,
  Award,
  Heart,
  Upload,
  MessageSquare,
  Settings,
  HelpCircle,
  Info,
  LogOut,
  LogIn,
  UserPlus,
  Menu,
} from "lucide-react";

type NavLinkProps = {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  badge?: string | number;
};

export default function Sidebar() {
  const pathname = usePathname();
  const { user: clerkUser } = useUser();
  const { userProfile } = useUserProfile();
  const { theme, setTheme, dark, sidebarOpen, setSidebarOpen } = useTheme();

  const sidebarRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close sidebar when user clicks outside of the sidebar and the toggle button
  useEffect(() => {
    if (!sidebarOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const NavLink = ({ href, icon: Icon, label, badge }: NavLinkProps) => {
    const active = isLinkActive(href);
    return (
      <Link
        href={href}
        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 group text-sm font-medium ${
          active
            ? "bg-[#FFCC00]/10 text-[#FFCC00] border border-[#FFCC00]/25"
            : dark
            ? "text-white/60 hover:text-white hover:bg-white/[0.03] border border-transparent"
            : "text-black/60 hover:text-black hover:bg-black/[0.03] border border-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon
            className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
              active
                ? "text-[#FFCC00]"
                : dark
                ? "text-white/40 group-hover:text-white/70"
                : "text-black/40 group-hover:text-black/70"
            }`}
          />
          <span>{label}</span>
        </div>
        {badge !== undefined && (
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold border ${
              active
                ? "bg-[#FFCC00]/10 border-[#FFCC00]/20 text-[#FFCC00]"
                : dark
                ? "bg-white/5 border-white/10 text-white/50"
                : "bg-black/5 border-black/10 text-black/50"
            }`}
          >
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close navigation sidebar" : "Open navigation sidebar"}
        className={`fixed right-4 top-4 z-[40] flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 ${
          dark
            ? "border-white/10 bg-[#05070D]/90 text-white"
            : "border-black/10 bg-white/90 text-black"
        }`}
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 bottom-0 w-[270px] max-w-[85vw] z-30 flex flex-col border-l h-screen overflow-y-auto scrollbar-none transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } ${
          dark ? "bg-[#05070D] border-white/10 text-white" : "bg-gray-50 border-black/10 text-black"
        }`}
      >
        {/* BRAND HEADER */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-inherit shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#FFCC00] flex items-center justify-center font-black text-black shadow-md shadow-[#FFCC00]/20">
              ◉
            </div>
            <span className="font-black text-base tracking-tight bg-gradient-to-r from-[#FFCC00] to-yellow-500 bg-clip-text text-transparent">
              NFTs OnChain
            </span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-6 p-4">
          {/* USER PROFILE CARD */}
          <div
            className={`p-4 rounded-2xl border transition ${
              dark ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFCC00] to-yellow-500 flex items-center justify-center text-black font-bold shadow-sm">
                {clerkUser && userProfile ? (
                  <Avatar avatar={userProfile.avatar} size="sm" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold truncate">
                  {clerkUser && userProfile ? userProfile.username : "Guest User"}
                </h4>
                <p className={`text-[10px] truncate ${dark ? "text-white/40" : "text-black/40"}`}>
                  {clerkUser && userProfile ? userProfile.email : "Not signed in"}
                </p>
              </div>
            </div>

            <div className="mt-3.5 pt-3.5 border-t border-inherit">
              {!clerkUser ? (
                <div className="grid grid-cols-2 gap-2">
                  <SignInButton mode="modal">
                    <button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#FFCC00] hover:bg-[#FFD633] text-black font-bold text-xs transition">
                      <LogIn className="w-3 h-3" />
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg border font-bold text-xs transition ${
                      dark ? "border-white/10 hover:bg-white/5 text-white" : "border-black/10 hover:bg-black/5 text-black"
                    }`}>
                      <UserPlus className="w-3 h-3" />
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              ) : (
                <SignOutButton redirectUrl="/">
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/10 border border-red-500/25 hover:bg-red-500/15 text-red-500 font-bold text-xs transition">
                    <LogOut className="w-3 h-3" />
                    Sign Out
                  </button>
                </SignOutButton>
              )}
            </div>
          </div>

          {/* SECTION: DISCOVER */}
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 mb-1.5 ${
              dark ? "text-white/30" : "text-black/30"
            }`}>
              Discover
            </span>
            <NavLink href="/" icon={Compass} label="NFT Collections" />
            <NavLink href="/blockchains" icon={Link2} label="Blockchains" />
            <NavLink href="/marketplaces" icon={Store} label="NFT Marketplaces" />
            <NavLink href="/artists" icon={User} label="NFT Artists" />
            <NavLink href="/founders" icon={Users} label="NFT Founders" />
            <NavLink href="/artists-and-founders" icon={Award} label="Artists & Founders" />
          </div>

          {/* SECTION: WORKSPACE */}
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 mb-1.5 ${
              dark ? "text-white/30" : "text-black/30"
            }`}>
              Workspace
            </span>
            <NavLink href="/favorites" icon={Heart} label="Favorites" />
            <NavLink href="/submit" icon={Upload} label="Submit" />
            <NavLink href="/community" icon={MessageSquare} label="Join Community" />
          </div>

          {/* SECTION: SETTINGS */}
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 mb-1.5 ${
              dark ? "text-white/30" : "text-black/30"
            }`}>
              Settings
            </span>
            <NavLink href="/settings" icon={Settings} label="Preferences" />

            {/* Inline Theme Toggle in sidebar for high usability */}
            <div className="px-3.5 py-1.5 flex items-center justify-between">
              <span className={`text-xs ${dark ? "text-white/50" : "text-black/50"}`}>Appearance</span>
              <div className={`flex rounded-lg p-0.5 border ${
                dark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
              }`}>
                {(["light", "dark"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTheme(mode)}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md capitalize transition ${
                      theme === mode
                        ? "bg-[#FFCC00] text-black"
                        : dark
                        ? "text-white/60 hover:text-white"
                        : "text-black/60 hover:text-black"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: SUPPORT */}
          <div className="flex flex-col gap-1 mt-auto">
            <NavLink href="/help" icon={HelpCircle} label="Help Center" />
            <NavLink href="/about" icon={Info} label="About" />
          </div>
        </div>
      </aside>
    </>
  );
}
