"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { CheckCircle, AlertCircle, UploadCloud, Info } from "lucide-react";
import { useTheme } from "@/context/theme-context";

const CHAINS = [
  "Ethereum",
  "Solana",
  "Bitcoin",
  "Cosmos",
  "Gram",
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
  const { dark } = useTheme();

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        headers: {
          "Content-Type": "application/json",
        },
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

  const pageBg = dark
    ? "bg-[#0B0F1A] text-white min-h-screen"
    : "bg-[#FAFAFA] text-black min-h-screen";

  const cardStyle = dark
    ? "border-white/10 bg-[#0e1424]/80 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
    : "border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]";

  return (
    <main className={pageBg}>
      <Navbar search={search} setSearch={setSearch} />

      <div className="max-w-4xl mx-auto px-6 py-12 pb-36">
        
        {/* SUBMISSION SUCCESSFUL BANNER */}
        {submitted && (
          <div className="p-6 rounded-2xl mb-10 flex items-start gap-4 border bg-green-500/10 border-green-500/30 text-green-400">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Submission Received successfully!</p>
              <p className="text-xs opacity-80 mt-1">
                Your NFT collection data has been queued for curator review. Redirecting to submissions overview...
              </p>
            </div>
          </div>
        )}

        {!submitted && (
          <div className="space-y-10">
            
            {/* HEADER */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFCC00]/20 bg-[#FFCC00]/10 text-xs font-bold text-[#FFCC00] uppercase tracking-wider">
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Submit Collection</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
                Submit an <span className="bg-gradient-to-r from-[#FFCC00] to-yellow-500 bg-clip-text text-transparent">NFT Collection</span>
              </h1>
              <p className={`text-sm ${dark ? "text-white/60" : "text-black/60"}`}>
                Help us keep our multi-chain directory up to date by submitting new, exciting, or culturally significant collections.
              </p>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex gap-2 items-center">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* FORM WRAPPER */}
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border ${cardStyle} space-y-8`}>
              
              {/* PRIMARY METADATA */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-wide uppercase text-[#FFCC00]/80">Primary Information</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Collection Name *"
                    dark={dark}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Bored Ape Yacht Club"
                  />

                  <Select
                    label="Chain *"
                    dark={dark}
                    name="chain"
                    value={formData.chain}
                    options={CHAINS}
                    onChange={handleInputChange}
                  />

                  <Select
                    label="Category"
                    dark={dark}
                    name="category"
                    value={formData.category}
                    options={CATEGORIES}
                    onChange={handleInputChange}
                  />

                  <Input
                    label="Total Supply"
                    dark={dark}
                    name="supply"
                    value={formData.supply}
                    onChange={handleInputChange}
                    placeholder="10000"
                  />
                </div>
              </div>

              <hr className={dark ? "border-white/5" : "border-black/5"} />

              {/* DETAILS & COMMUNITY LINKS */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-wide uppercase text-[#FFCC00]/80">Launch & Community Links</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Launch Year"
                    dark={dark}
                    name="launchYear"
                    value={formData.launchYear}
                    onChange={handleInputChange}
                  />

                  <Input
                    label="Official X"
                    dark={dark}
                    name="officialX"
                    value={formData.officialX}
                    onChange={handleInputChange}
                    placeholder="@handle"
                  />

                  <Input
                    label="Official Website"
                    dark={dark}
                    name="officialWebsite"
                    value={formData.officialWebsite}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                  />

                  <div className="sm:col-span-2">
                    <Textarea
                      label="Collection Description"
                      dark={dark}
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Give a brief summary of the collection story, founders, and cultural background..."
                    />
                  </div>
                </div>
              </div>

              <hr className={dark ? "border-white/5" : "border-black/5"} />

              {/* MARKETPLACES CHECKS */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#FFCC00]/85">
                  Available Marketplaces
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {MARKETPLACES.map((m) => {
                    const active = formData.marketplaces.includes(m);

                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => handleMarketplaceToggle(m)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          active
                            ? "bg-[#FFCC00] text-black border-[#FFCC00] shadow-sm transform scale-[1.02]"
                            : dark
                            ? "bg-white/5 text-white/80 border-white/5 hover:bg-white/10 hover:border-white/10"
                            : "bg-black/5 text-black/80 border-black/5 hover:bg-black/10 hover:border-black/10"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm bg-[#FFCC00] text-black hover:bg-[#FFEE00] transition-all duration-300 transform hover:scale-[1.005] disabled:opacity-50 shadow-md shadow-[#FFCC00]/10"
                >
                  {loading ? "Submitting to network..." : "Submit NFT Collection"}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </main>
  );
}

function Input({ label, dark, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className={`block text-[11px] font-semibold uppercase tracking-wider ${dark ? "text-white/50" : "text-black/50"}`}>{label}</label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition duration-200 ${
          dark
            ? "bg-white/5 border-white/5 text-white placeholder-white/30 focus:border-[#FFCC00]/40 focus:bg-white/[0.07]"
            : "bg-black/5 border-black/5 text-black placeholder-black/30 focus:border-[#FFCC00]/40 focus:bg-black/[0.07]"
        }`}
      />
    </div>
  );
}

function Select({ label, options, dark, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className={`block text-[11px] font-semibold uppercase tracking-wider ${dark ? "text-white/50" : "text-black/50"}`}>{label}</label>
      <select
        {...props}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition duration-200 cursor-pointer ${
          dark
            ? "bg-[#0e1424] border-white/5 text-white focus:border-[#FFCC00]/40"
            : "bg-white border-black/5 text-black focus:border-[#FFCC00]/40"
        }`}
      >
        <option value="" className={dark ? "bg-[#0e1424]" : "bg-white"}>Select Blockchain</option>
        {options.map((o: string) => (
          <option key={o} value={o} className={dark ? "bg-[#0e1424]" : "bg-white"}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, dark, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className={`block text-[11px] font-semibold uppercase tracking-wider ${dark ? "text-white/50" : "text-black/50"}`}>{label}</label>
      <textarea
        {...props}
        rows={4}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition duration-200 ${
          dark
            ? "bg-white/5 border-white/5 text-white placeholder-white/30 focus:border-[#FFCC00]/40 focus:bg-white/[0.07]"
            : "bg-black/5 border-black/5 text-black placeholder-black/30 focus:border-[#FFCC00]/40 focus:bg-black/[0.07]"
        }`}
      />
    </div>
  );
}