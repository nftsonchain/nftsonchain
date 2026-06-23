"use client";

import { useState, ReactNode } from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Avatar } from "@/lib/avatars";
import Link from "next/link";
import { LogOut, Heart, ThumbsUp, FileText, HelpCircle, Info, Settings } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  dark: boolean;
};

type SectionProps = {
  title: string;
  children: ReactNode;
  active: string | null;
  toggle: (title: string) => void;
  dark: boolean;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`ml-auto transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  );
}

function Section({ title, children, active, toggle, dark }: SectionProps) {
  const isOpen = active === title;

  return (
    <div
      className={`border-b pb-2 backdrop-blur-xl ${
        dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
      }`}
    >
      <button
        onClick={() => toggle(title)}
        className="w-full flex items-center gap-2 py-3 font-semibold text-left text-[#FFCC00] hover:opacity-80 transition"
      >
        {title}
        <Chevron open={isOpen} />
      </button>

      {isOpen && (
        <div
          className={`text-sm leading-relaxed pb-3 ${
            dark ? "text-white/80" : "text-black/70"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function NavLink({ href, icon: Icon, label, dark, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 py-2 px-3 rounded-lg transition ${
        dark
          ? "text-white/70 hover:text-white hover:bg-white/5"
          : "text-black/70 hover:text-black hover:bg-black/5"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
}

/* ================= SOCIAL ICONS ================= */

const iconClass = "w-6 h-6 cursor-pointer transition hover:scale-110";

function XIcon() {
  return (
    <img
      src="https://sl.bing.net/c4Puknh5iQS"
      alt="X"
      className={iconClass}
      loading="lazy"
    />
  );
}

function DiscordIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/discord.png"
      alt="Discord"
      className={iconClass}
      loading="lazy"
    />
  );
}

function YouTubeIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/youtube-play.png"
      alt="YouTube"
      className={iconClass}
      loading="lazy"
    />
  );
}

function TikTokIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/tiktok.png"
      alt="TikTok"
      className={iconClass}
      loading="lazy"
    />
  );
}

function InstagramIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/instagram-new.png"
      alt="Instagram"
      className={iconClass}
      loading="lazy"
    />
  );
}

function FacebookIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/facebook-new.png"
      alt="Facebook"
      className={iconClass}
      loading="lazy"
    />
  );
}

/* ================= PANEL ================= */

export default function SidePanel({ open, onClose, dark }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const { user: clerkUser } = useUser();
  const { userProfile, loading } = useUserProfile();

  const toggle = (title: string) => {
    setActive(active === title ? null : title);
  };

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 backdrop-blur-3xl shadow-[0_30px_90px_-35px_rgba(0,0,0,0.75)] overflow-y-auto
        ${open ? "translate-x-0" : "translate-x-full"}
        ${dark ? "bg-black/50 text-white border-white/10" : "bg-white/70 text-black border-black/10"} border-l`}
      >
        <div className="p-5 space-y-4">
          
          {/* USER SECTION */}
          {clerkUser && userProfile && !loading && (
            <div
              className={`p-4 rounded-lg mb-4 ${
                dark ? "bg-white/10" : "bg-black/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar avatar={userProfile.avatar} size="md" />
                <div>
                  <p className="font-semibold text-[#FFCC00]">
                    {userProfile.username}
                  </p>
                  <p className={`text-xs ${dark ? "text-white/60" : "text-black/60"}`}>
                    {userProfile.email}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <NavLink
                  href="/profile"
                  icon={() => null}
                  label="My Profile"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/profile/likes"
                  icon={ThumbsUp}
                  label="My Likes"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/profile/favorites"
                  icon={Heart}
                  label="My Favorites"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/profile/submissions"
                  icon={FileText}
                  label="My Submissions"
                  dark={dark}
                  onClick={onClose}
                />
              </div>
            </div>
          )}

          {/* NAVIGATION */}
          {clerkUser && userProfile && !loading && (
            <>
              <div
                className={`border-b ${dark ? "border-white/10" : "border-black/10"}`}
              >
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#FFCC00]/70 px-3 py-2">
                  Settings
                </h3>
                <NavLink
                  href="/settings"
                  icon={Settings}
                  label="Settings"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/help"
                  icon={HelpCircle}
                  label="Help Center"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/about"
                  icon={Info}
                  label="About NFTs On Chain"
                  dark={dark}
                  onClick={onClose}
                />
              </div>

              {/* SIGN OUT */}
              <SignOutButton redirectUrl="/">
                <button
                  className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition font-medium
                  ${
                    dark
                      ? "text-red-400 hover:bg-red-400/10"
                      : "text-red-600 hover:bg-red-600/10"
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </SignOutButton>
            </>
          )}

          {/* NOT LOGGED IN */}
          {!clerkUser && (
            <>
              <Section
                title="About NFTs OnChain"
                active={active}
                toggle={toggle}
                dark={dark}
              >
                NFTs OnChain is a cross-chain NFT discovery hub where NFT
                projects, communities, and identities come together to explore,
                learn, and connect across ecosystems.
              </Section>

              <Section
                title="Join the Community"
                active={active}
                toggle={toggle}
                dark={dark}
              >
                Sign in to like collections, create favorites, and submit your
                NFT projects to be featured.
              </Section>

              <div className={`border-b ${dark ? "border-white/10" : "border-black/10"}`}>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#FFCC00]/70 px-3 py-2">
                  Resources
                </h3>
                <NavLink
                  href="/help"
                  icon={HelpCircle}
                  label="Help Center"
                  dark={dark}
                  onClick={onClose}
                />
                <NavLink
                  href="/about"
                  icon={Info}
                  label="About"
                  dark={dark}
                  onClick={onClose}
                />
              </div>
            </>
          )}

          {/* SOCIALS */}
          <div className={`pt-4 border-t ${dark ? "border-white/10" : "border-black/10"}`}>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#FFCC00]/70 px-3 py-2">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center px-3 py-3">
              <a
                href="https://x.com/nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <a
                href="https://discord.gg/WvtMNVQjcw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://youtube.com/@nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.tiktok.com/@nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.instagram.com/nfts_onchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/share/1AxrJpxfwm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}