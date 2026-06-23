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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    if (!user) {
      router.push("/sign-in");
      return;
    }

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

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      setTimeout(() => {
        router.push("/profile/submissions");
      }, 2000);
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={
        dark
          ? "bg-[#0B0F1A] text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar
        onMenuClick={() => setMenuOpen(true)}
        search={search}
        setSearch={setSearch}
        dark={dark}
        setDark={setDark}
      />

      <div className="max-w-2xl mx-auto px-4 py-8 pb-32">
        {submitted && (
          <div
            className={`p-6 rounded-lg mb-6 flex items-center gap-4 ${
              dark ? "bg-green-500/20 border border-green-500/30" : "bg-green-100 border border-green-300"
            }`}
          >
            <CheckCircle className={`w-6 h-6 ${dark ? "text-green-400" : "text-green-600"}`} />
            <div>
              <p className={`font-semibold ${dark ? "text-green-400" : "text-green-700"}`}>
                Submission Received!
              </p>
              <p className={`text-sm ${dark ? "text-green-300/80" : "text-green-600/80"}`}>
                Our team will review your submission. You'll see the status in your profile.
              </p>
            </div>
          </div>
        )}

        {!submitted && (
          <>
            <h1 className="text-3xl font-bold mb-2 text-[#FFCC00]">Submit NFT Collection</h1>
            <p className={`mb-8 ${dark ? "text-white/60" : "text-black/60"}`}>
              Help us discover new NFT projects. Fill out the form below to submit your collection.
            </p>

            {error && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  dark
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-red-100 border border-red-300 text-red-700"
                }`}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Collection Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Collection Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                  placeholder="e.g., Bored Ape Yacht Club"
                />
              </div>

              {/* Chain */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Chain *
                </label>
                <select
                  name="chain"
                  value={formData.chain}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-black/10 border-black/20 text-black"
                  }`}
                >
                  <option value="">Select a chain</option>
                  {CHAINS.map((chain) => (
                    <option key={chain} value={chain}>
                      {chain}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-black/10 border-black/20 text-black"
                  }`}
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Supply */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Total Supply
                </label>
                <input
                  type="number"
                  name="supply"
                  value={formData.supply}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                  placeholder="e.g., 10000"
                />
              </div>

              {/* Launch Year */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Launch Year
                </label>
                <input
                  type="number"
                  name="launchYear"
                  value={formData.launchYear}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                  placeholder="Tell us about this NFT collection..."
                />
              </div>

              {/* Official X */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Official X Account
                </label>
                <input
                  type="text"
                  name="officialX"
                  value={formData.officialX}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                  placeholder="@handle"
                />
              </div>

              {/* Official Website */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Official Website
                </label>
                <input
                  type="url"
                  name="officialWebsite"
                  value={formData.officialWebsite}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border transition ${
                    dark
                      ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                      : "bg-black/10 border-black/20 text-black placeholder-black/50"
                  }`}
                  placeholder="https://example.com"
                />
              </div>

              {/* Marketplaces */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Available Marketplaces
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {MARKETPLACES.map((marketplace) => (
                    <button
                      key={marketplace}
                      type="button"
                      onClick={() => handleMarketplaceToggle(marketplace)}
                      className={`p-2 rounded-lg text-sm font-medium transition ${
                        formData.marketplaces.includes(marketplace)
                          ? dark
                            ? "bg-[#FFCC00] text-black"
                            : "bg-[#FFCC00] text-black"
                          : dark
                            ? "bg-white/10 text-white"
                            : "bg-black/10 text-black"
                      }`}
                    >
                      {marketplace}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full p-3 rounded-lg font-semibold transition ${
                  dark
                    ? "bg-[#FFCC00] text-black hover:bg-[#FFEE00] disabled:opacity-50"
                    : "bg-[#FFCC00] text-black hover:bg-[#FFEE00] disabled:opacity-50"
                }`}
              >
                {loading ? "Submitting..." : "Submit Collection"}
              </button>
            </form>
          </>
        )}
      </div>

      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} dark={dark} />
      <BottomNav dark={dark} />
    </main>
  );
}
