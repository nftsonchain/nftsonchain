// ─── Category ───────────────────────────────────────────
export const CATEGORIES = [
  "PFP",
  "Gaming",
  "Photography",
  "Music",
  "AI",
  "Anime",
  "Pixel",
  "Meme",
  "Sports",
  "Fashion",
  "Collectibles",
] as const;

export type Category = (typeof CATEGORIES)[number];

// ─── Supply Ranges ──────────────────────────────────────
export const SUPPLY_RANGES = [
  { label: "0–100", min: 0, max: 100 },
  { label: "101–500", min: 101, max: 500 },
  { label: "501–1,000", min: 501, max: 1000 },
  { label: "1,001–5,000", min: 1001, max: 5000 },
  { label: "5,001–10,000", min: 5001, max: 10000 },
  { label: "10,001–15,000", min: 10001, max: 15000 },
  { label: "15,001–20,000", min: 15001, max: 20000 },
  { label: "20,001–50,000", min: 20001, max: 50000 },
  { label: "50,001–100,000", min: 50001, max: 100000 },
  { label: "100,000+", min: 100001, max: Infinity },
] as const;

export type SupplyRange = (typeof SUPPLY_RANGES)[number];

// ─── NFT Collection ─────────────────────────────────────
export type NFT = {
  id?: string;
  name: string;
  chain: string;
  category: string;
  supply: number;
  description: string;
  knownFor: string; // displayed as "Why It Matters" in UI
  year: number;
  twitter: string;
  website?: string;
  // deprecated — kept for backward compat with existing data
  rarity?:
    | "common"
    | "rare"
    | "epic"
    | "legendary"
    | "Common"
    | "Rare"
    | "Epic"
    | "Legendary";
};

// ─── Blockchain ─────────────────────────────────────────
export type Blockchain = {
  id: string;
  name: string;
  slug: string;
  description: string;
  website: string;
  twitter: string;
  accentColor: string;
  logo: string; // emoji
};

// ─── Marketplace ────────────────────────────────────────
export type MarketplaceCategory =
  | "General"
  | "Art"
  | "Gaming"
  | "Music"
  | "Launchpad"
  | "Ordinals"
  | "Domain"
  | "Curated";

export type Marketplace = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: MarketplaceCategory;
  foundedYear: number;
  supportedChains: string[]; // blockchain ids
  website: string;
  twitter: string;
  logo: string; // emoji
};

// ─── Person (Artist / Founder / Both) ───────────────────
export type PersonType = "artist" | "founder" | "both";

export type Person = {
  id: string;
  displayName: string;
  knownFor: string;
  twitter: string;
  type: PersonType;
  blockchain?: string;
  website?: string;
  image?: string;
};