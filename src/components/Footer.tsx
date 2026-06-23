"use client";

import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

type Props = {
  dark: boolean;
};

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: "X", url: "https://x.com/nfts_onchain", icon: "𝕏" },
  { name: "Discord", url: "https://discord.gg/WvtMNVQjcw", icon: "💬" },
  { name: "YouTube", url: "https://youtube.com/@nfts_onchain", icon: "📺" },
  { name: "TikTok", url: "https://www.tiktok.com/@nfts_onchain", icon: "🎵" },
  { name: "Instagram", url: "https://www.instagram.com/nfts_onchain", icon: "📷" },
  { name: "Facebook", url: "https://www.facebook.com/share/1AxrJpxfwm/", icon: "f" },
];

export default function Footer({ dark }: Props) {
  return (
    <footer
      className={`border-t ${
        dark ? "bg-black/40 border-white/10" : "bg-white/70 border-black/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-[#FFCC00] mb-4">NFTs OnChain</h3>
            <p className={`text-sm ${dark ? "text-white/60" : "text-black/60"}`}>
              NFT discovery and education platform across all blockchains.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-[#FFCC00] mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Submit NFT
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-[#FFCC00] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-[#FFCC00] transition ${
                    dark ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-[#FFCC00] mb-4">Community</h3>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition ${
                    dark
                      ? "bg-white/10 text-white hover:bg-[#FFCC00] hover:text-black"
                      : "bg-black/10 text-black hover:bg-[#FFCC00] hover:text-black"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${dark ? "border-white/10" : "border-black/10"}`}
        />

        {/* Bottom */}
        <div className="mt-8 text-center space-y-4">
          <p className={`text-sm ${dark ? "text-white/50" : "text-black/50"}`}>
            © 2026 NFTs OnChain • All rights reserved
          </p>

          <p className={`text-xs ${dark ? "text-white/40" : "text-black/40"} leading-relaxed max-w-2xl mx-auto`}>
            NFTs OnChain provides NFT discovery and educational content only. Nothing on
            this platform constitutes financial, investment, legal, or trading advice.
            Always conduct your own research before making decisions. The cryptocurrency
            market is highly volatile and risky.
          </p>
        </div>
      </div>
    </footer>
  );
}
