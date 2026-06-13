"use client";

import { useState, ReactNode } from "react";

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
      className={`border-b pb-2 ${
        dark ? "border-white/10" : "border-black/10"
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

/* ================= SOCIAL ICONS ================= */

const iconClass = "w-6 h-6 cursor-pointer transition hover:scale-110";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${iconClass} text-[#1DA1F2]`}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-[#5865F2]`}>
      <path d="M7.5 7c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm13 0c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-8.5 8c-.75.75-1.9 1.5-3.5 1.5-1.6 0-2.75-.75-3.5-1.5A9.96 9.96 0 0 1 2 7.5C2 4.47 4.47 2 7.5 2h9c3.03 0 5.5 2.47 5.5 5.5 0 2.75-1.85 5.06-4.5 5.72-.7.2-1.4.3-2.2.3-1.5 0-2.5-.4-3-1.1z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-[#26A5E4]`}>
      <path d="M22 3.5 2 10.3c-1.2.4-1.2 1.1-.2 1.5l4.6 1.5 11.1-6.9c.5-.3.9-.1.5.2l-8.7 7.9-.3 4.7c.5 0 .7-.2 1-.5l2.4-2.2 4.7 3.4c.9.5 1.6.2 1.8-.9l3.2-14.9c.3-1.1-.5-1.6-1.3-1.1Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className={`${iconClass} text-[#FF0000]`}>
      <rect x="2" y="5" width="20" height="14" rx="5" fill="currentColor" />
      <polygon points="10,8 16,12 10,16" fill="#fff" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className={`${iconClass} text-[#69C9D0]`}>
      <path d="M17.5 3h-2c-1.1 0-2 .9-2 2v7.5c0 1.7 1.4 3.1 3.1 3.1 1.5 0 2.8-1.1 3-2.6v-2.4h-1.8v2.3c-.1.4-.5.7-.9.7-.6 0-1.1-.5-1.1-1.1V6.4h3.8V3Z" fill="currentColor" />
      <path d="M7 14.5c0 2.7 2.3 4.8 5 4.8s5-2.1 5-4.8V3h-2v10.5c0 1.5-1.2 2.7-2.7 2.7s-2.8-1.2-2.8-2.7V8H7v6.5Z" fill="#010101" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={`${iconClass} text-[#E1306C]`}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-[#1877F2]`}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.4V12H17l-.4 3h-2.5v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

/* ================= PANEL ================= */

export default function SidePanel({ open, onClose, dark }: Props) {
  const [active, setActive] = useState<string | null>(null);

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
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        ${dark ? "bg-[#0B0F1A] text-white" : "bg-white text-black"}
        border-l ${dark ? "border-white/10" : "border-black/10"}`}
      >
        <div className="p-5 space-y-4">

          <Section title="NFTs Onchain" active={active} toggle={toggle} dark={dark}>
            NFTs Onchain is a cross-chain NFT cultural discovery hub where NFT
            projects, communities, and identities come together to explore,
            learn, and connect across ecosystems.
          </Section>

          <Section title="About NFTs Onchain" active={active} toggle={toggle} dark={dark}>
            NFTs Onchain is a global NFT discovery engine and cultural meeting
            point across all chains.
          </Section>

          <Section title="Connect with NFT Projects" active={active} toggle={toggle} dark={dark}>
            Explore communities via Discord only.Join the discord server to explore all communities.          </Section>

          <Section title="Apply to List" active={active} toggle={toggle} dark={dark}>
            Submit your NFT collection to be featured on NFTs Onchain.
            Reach us out on X @nfts_onchain or via discord.
          </Section>

          {/* SOCIALS */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-4 items-center">

              <a href="https://x.com/nfts_onchain?s=21" target="_blank"><XIcon /></a>
              <a href="https://discord.gg/WvtMNVQjcw" target="_blank"><DiscordIcon /></a>
              <a href="https://t.me/nftsonchain" target="_blank"><TelegramIcon /></a>
              <a href="https://youtube.com/@nfts_onchain?si=AdjYjhcEIoihXnI_" target="_blank"><YouTubeIcon /></a>
              <a href="https://www.tiktok.com/@nfts_onchain?_r=1&_t=ZS-95oe6sXkSwh" target="_blank"><TikTokIcon /></a>
              <a href="https://www.instagram.com/nfts_onchain" target="_blank"><InstagramIcon /></a>
              <a href="https://www.facebook.com/share/1AxrJpxfwm/" target="_blank"><FacebookIcon /></a>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}