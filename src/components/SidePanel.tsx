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

const iconClass =
  "w-6 h-6 cursor-pointer transition hover:scale-110 hover:drop-shadow-[0_0_6px_#FFCC00]";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M18.244 2H21l-6.52 7.47L22 22h-6.8l-5.3-6.9L3.7 22H1l7-8.03L2 2h6.9l4.8 6.2L18.244 2Zm-2.4 18h1.7L7.2 4H5.4l10.444 16Z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M20 4.5A17 17 0 0 0 16.5 3l-.3.6a15 15 0 0 1 3 1.2A15 15 0 0 0 12 3a15 15 0 0 0-7.2 1.8A15 15 0 0 1 7.8 3.6L7.5 3A17 17 0 0 0 4 4.5C2.2 7.2 1.7 10 2 12.8c2 1.5 4 2.4 6 3l.8-1.2a12 12 0 0 1-2.5-1.2l.5-.4c2.8 1.3 5.8 1.3 8.6 0l.5.4a12 12 0 0 1-2.5 1.2l.8 1.2c2-.6 4-1.5 6-3 .3-2.8-.2-5.6-2-8.3ZM9 13c-.8 0-1.5-.8-1.5-1.8S8.2 9.4 9 9.4s1.5.8 1.5 1.8S9.8 13 9 13Zm6 0c-.8 0-1.5-.8-1.5-1.8S14.2 9.4 15 9.4s1.5.8 1.5 1.8S15.8 13 15 13Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M21.5 3.5 2.9 10.6c-1.3.5-1.3 1.3-.2 1.6l4.7 1.5 11-7c.5-.3.9-.1.5.2l-8.9 8.1-.3 4.8c.5 0 .7-.2 1-.5l2.4-2.3 4.7 3.5c.9.5 1.6.2 1.8-.9l3.2-15c.3-1.2-.5-1.7-1.3-1.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M23 7.5s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.3 4 12 4 12 4s-4.3 0-7.7.1c-.5.1-1.5.1-2.4 1C1.2 5.8 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1C6.7 20 12 20 12 20s4.3 0 7.7-.1c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8ZM10 14.7V9.3l5 2.7-5 2.7Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M16 3c.5 2.5 2 4 4.5 4v3.5c-1.8 0-3.5-.6-4.5-1.7v7.7c0 3.5-2.7 6.5-6.5 6.5S3 20 3 16.5 5.7 10 9.5 10c.5 0 1 .1 1.5.2v3.8c-.5-.2-1-.3-1.5-.3-1.7 0-3 1.4-3 3.3s1.3 3.3 3 3.3 3-1.5 3-3.5V3h4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
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