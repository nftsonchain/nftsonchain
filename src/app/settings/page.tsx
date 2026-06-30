"use client";

import { useTheme } from "@/context/theme-context";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const options = [
    { label: "System", value: "system" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
  ];

  return (
    <main
      className={`min-h-screen px-8 md:px-14 py-16 pb-36 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0B0F19] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Settings className="text-[#FFCC00]" size={30} />

            <h1 className="text-5xl font-bold text-[#FFCC00]">
              Settings
            </h1>
          </div>

          <p
            className={`text-xl leading-relaxed ${
              theme === "dark"
                ? "text-white/70"
                : "text-black/70"
            }`}
          >
            Customize your app experience and appearance.
          </p>
        </div>

        {/* THEME SETTINGS CARD */}
        <div
          className={`rounded-2xl border p-10 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-8 text-[#FFCC00]">
            Theme Settings
          </h2>

          <div className="space-y-4">
            {options.map((option) => {
              const active = theme === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() =>
                    setTheme(
                      option.value as
                        | "system"
                        | "light"
                        | "dark"
                    )
                  }
                  className={`
                    w-full text-left
                    px-6 py-5
                    rounded-xl
                    border
                    transition-all duration-300
                    ${
                      active
                        ? "bg-[#FFCC00] text-black border-[#FFCC00]"
                        : theme === "dark"
                        ? "bg-white/5 text-white border-white/10 hover:bg-white/10"
                        : "bg-black/5 text-black border-black/10 hover:bg-black/10"
                    }
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}