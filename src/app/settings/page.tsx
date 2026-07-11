"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import { Settings, Sun, Moon, Laptop, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme, dark } = useTheme();
  const [search, setSearch] = useState("");

  const options = [
    { label: "System", value: "system", icon: <Laptop className="w-4 h-4" /> },
    { label: "Light Mode", value: "light", icon: <Sun className="w-4 h-4" /> },
    { label: "Dark Mode", value: "dark", icon: <Moon className="w-4 h-4" /> },
  ];

  const pageBg = dark
    ? "bg-[#0B0F1A] text-white min-h-screen"
    : "bg-[#FAFAFA] text-black min-h-screen";

  const cardStyle = dark
    ? "border-white/10 bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
    : "border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]";

  return (
    <main className={`${pageBg} transition-colors duration-300`}>
      <Navbar search={search} setSearch={setSearch} />

      <div className="max-w-3xl mx-auto px-6 py-16 pb-36">
        
        {/* HEADER */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#FFCC00]/10 text-[#FFCC00]">
              <Settings className="w-5 h-5" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Preferences
            </h1>
          </div>
          <p className={`text-sm ${dark ? "text-white/60" : "text-black/60"}`}>
            Adjust display options, visual themes, and local storage overrides.
          </p>
        </div>

        {/* THEME SETTINGS CARD */}
        <div className={`rounded-2xl border p-8 ${cardStyle}`}>
          <div className="mb-6">
            <h2 className="text-base font-bold tracking-tight">Appearance Theme</h2>
            <p className={`text-xs mt-1 ${dark ? "text-white/40" : "text-black/40"}`}>
              Choose how NFTs OnChain looks in your system context.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {options.map((option) => {
              const active = theme === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => setTheme(option.value as "system" | "light" | "dark")}
                  className={`
                    flex items-center gap-3 justify-center text-center
                    px-5 py-4 rounded-xl border text-xs font-bold
                    transition-all duration-300 cursor-pointer select-none
                    ${
                      active
                        ? "bg-[#FFCC00] text-black border-[#FFCC00] shadow-md shadow-[#FFCC00]/10 transform scale-[1.01]"
                        : dark
                        ? "bg-white/5 text-white border-white/10 hover:bg-white/10"
                        : "bg-black/5 text-black border-black/10 hover:bg-black/10"
                    }
                  `}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECURITY & LOCAL DATA (PLACEHOLDER DECORATION) */}
        <div className={`rounded-2xl border p-8 ${cardStyle} mt-6 flex items-start gap-4`}>
          <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-semibold">Local Storage Saved Preferences</h3>
            <p className={`text-xs leading-relaxed ${dark ? "text-white/50" : "text-black/50"}`}>
              Likes and favorite list keys are cached locally on your device database endpoints. Refreshing or changing browsers preserves these settings cleanly.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}