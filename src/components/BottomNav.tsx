"use client";

import { Home, Search, Zap, Upload, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  dark: boolean;
};

export default function BottomNav({ dark }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/search", label: "Search", icon: Search },
    { path: "/ai", label: "AI", icon: Zap },
    { path: "/submit", label: "Submit", icon: Upload },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 border-t
        ${dark ? "bg-black/80 border-white/10" : "bg-white/80 border-black/10"} 
        backdrop-blur-xl z-40`}
    >
      <div className="flex justify-around items-center h-16 max-w-7xl mx-auto w-full px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all
                ${
                  active
                    ? dark
                      ? "text-[#FFCC00] bg-white/10"
                      : "text-[#FFCC00] bg-black/10"
                    : dark
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
