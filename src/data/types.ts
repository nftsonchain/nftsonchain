export type NFT = {
  name: string;
  chain: string;
  category: string;
  supply: number;
  description: string;
  knownFor: string;
  year: number;
  twitter: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
};