"use client";

import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import Sidebar from "@/components/Sidebar";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dark, sidebarOpen, setSidebarOpen } = useTheme();

  return (
    <div className="flex min-h-screen relative">

      {/* MAIN CONTENT WRAPPER */}
      <div
        className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ${
          sidebarOpen ? "pr-0 lg:pr-[320px]" : "pr-0"
        }`}
      >
        {children}
      </div>

      {/* SIDEBAR ON THE RIGHT */}
      <Sidebar />
    </div>
  );
}
