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

function TelegramIcon() {
  return (
    <img
      src="https://img.icons8.com/fluency/48/telegram-app.png"
      alt="Telegram"
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
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 backdrop-blur-3xl shadow-[0_30px_90px_-35px_rgba(0,0,0,0.75)]
        ${open ? "translate-x-0" : "translate-x-full"}
        ${dark ? "bg-black/50 text-white border-white/10" : "bg-white/70 text-black border-black/10"} border-l`}
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
          <div className={`pt-4 border-t ${dark ? "border-white/10" : "border-black/10"}`}>
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