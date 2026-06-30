"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import SidePanel from "@/components/SidePanel";
import { CheckCircle } from "lucide-react";

const CHAINS = [
  "Ethereum",
  "Solana",
  "Bitcoin",
  "Cosmos",
  "TON",
  "XRP",
  "Polygon",
  "Base",
  "Cardano",
];

const CATEGORIES = ["PFP", "Art", "Gaming", "Anime", "Meme", "Utility"];

const MARKETPLACES = [
  "OpenSea",
  "Blur",
  "Magic Eden",
  "Tensor",
  "Gamma",
  "Unisat",
  "Stargaze",
  "Getgems",
  "XRP Cafe",
  "Rarible",
  "SuperRare",
];

export default function SubmitPage() {
  const { user } = useUser();
  const router = useRouter();

  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    chain: "",
    category: "",
    supply: "",
    launchYear: new Date().getFullYear().toString(),
    description: "",
    officialX: "",
    officialWebsite: "",
    marketplaces: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarketplaceToggle = (marketplace: string) => {
    setFormData((prev) => ({
      ...prev,
      marketplaces: prev.marketplaces.includes(marketplace)
        ? prev.marketplaces.filter((m) => m !== marketplace)
        : [...prev.marketplaces, marketplace],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return router.push("/sign-in");

    if (!formData.name || !formData.chain) {
      setError("Collection name and chain are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setSubmitted(true);

      setTimeout(() => {
        router.push("/profile/submissions");
      }, 2000);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={dark ? "bg-[#0B0F1A] text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      <Navbar
        onMenuClick={() => setMenuOpen(true)}
        search={search}
        setSearch={setSearch}
        dark={dark}
        setDark={setDark}
      />

      {/* 🔥 SCROLL AREA FIXED */}
      <div
        className="
          w-full
          h-[calc(100vh-80px)]
          overflow-y-auto
          px-6 md:px-16 lg:px-28
          py-10
          pb-56
          scroll-smooth
        "
      >

        {submitted && (
          <div className="p-8 rounded-2xl mb-10 flex items-center gap-5 border bg-green-500/10 border-green-500/30">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <div>
              <p className="font-bold text-green-400 text-xl">
                Submission Received!
              </p>
              <p className="text-base text-white/70">
                Your NFT will be reviewed and published soon.
              </p>
            </div>
          </div>
        )}

        {!submitted && (
          <div className="max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#FFCC00] mb-4">
                Submit NFT Collection
              </h1>
              <p className="text-xl text-white/60 max-w-3xl">
                Help us discover and list new NFT projects in the ecosystem.
              </p>
            </div>

            {error && (
              <div className="p-5 mb-8 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-lg">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <div className="space-y-8">
                <Input label="Collection Name *" dark name="name" value={formData.name} onChange={handleInputChange} placeholder="Bored Ape Yacht Club" />
                <Select label="Chain *" dark name="chain" value={formData.chain} options={CHAINS} onChange={handleInputChange} />
                <Select label="Category" dark name="category" value={formData.category} options={CATEGORIES} onChange={handleInputChange} />
                <Input label="Total Supply" dark name="supply" value={formData.supply} onChange={handleInputChange} placeholder="10000" />
              </div>

              <div className="space-y-8">
                <Input label="Launch Year" dark name="launchYear" value={formData.launchYear} onChange={handleInputChange} />
                <Input label="Official X" dark name="officialX" value={formData.officialX} onChange={handleInputChange} placeholder="@handle" />
                <Input label="Website" dark name="officialWebsite" value={formData.officialWebsite} onChange={handleInputChange} placeholder="https://example.com" />
                <Textarea label="Description" dark name="description" value={formData.description} onChange={handleInputChange} />
              </div>

              {/* MARKETPLACES */}
              <div className="lg:col-span-2 mt-4">
                <label className="block text-lg font-semibold mb-6">
                  Available Marketplaces
                </label>

                <div className="flex flex-wrap gap-4">
                  {MARKETPLACES.map((m) => {
                    const active = formData.marketplaces.includes(m);

                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => handleMarketplaceToggle(m)}
                        className={`
                          px-7 py-4 rounded-full text-base font-semibold transition border
                          ${active
                            ? "bg-[#FFCC00] text-black scale-105"
                            : dark
                              ? "bg-white/10 text-white border-white/10"
                              : "bg-black/10 text-black border-black/10"
                          }
                        `}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SUBMIT BUTTON — lifted above bottom */}
              <div className="lg:col-span-2 mt-10 mb-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    py-5
                    rounded-2xl
                    font-bold
                    text-xl
                    bg-[#FFCC00]
                    text-black
                    hover:bg-yellow-300
                    transition
                    disabled:opacity-50
                  "
                >
                  {loading ? "Submitting..." : "Submit Collection"}
                </button>
              </div>

              {/* EXTRA SPACE BELOW (IMPORTANT FIX) */}
              <div className="h-20 lg:h-32" />

            </form>
          </div>
        )}
      </div>

      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} dark={dark} />
      <BottomNav dark={dark} />
    </main>
  );
}

/* UI COMPONENTS */
function Input({ label, dark, ...props }: any) {
  return (
    <div>
      <label className="block text-lg font-semibold mb-3">{label}</label>
      <input
        {...props}
        className={`w-full p-5 rounded-2xl border text-lg ${
          dark
            ? "bg-white/10 border-white/10 text-white"
            : "bg-black/10 border-black/10 text-black"
        }`}
      />
    </div>
  );
}

function Select({ label, options, dark, ...props }: any) {
  return (
    <div>
      <label className="block text-lg font-semibold mb-3">{label}</label>
      <select
        {...props}
        className={`w-full p-5 rounded-2xl border text-lg ${
          dark
            ? "bg-white/10 border-white/10 text-white"
            : "bg-black/10 border-black/10 text-black"
        }`}
      >
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, dark, ...props }: any) {
  return (
    <div>
      <label className="block text-lg font-semibold mb-3">{label}</label>
      <textarea
        {...props}
        rows={6}
        className={`w-full p-5 rounded-2xl border text-lg ${
          dark
            ? "bg-white/10 border-white/10 text-white"
            : "bg-black/10 border-black/10 text-black"
        }`}
      />
    </div>
  );
}