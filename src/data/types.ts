export type NFT = {
  id?: string;
  name: string;
  chain: string;
  category: string;
  supply: number;
  description: string;
  knownFor: string;
  year: number;
  twitter: string;
  rarity:
    | "common"
    | "rare"
    | "epic"
    | "legendary"
    | "Common"
    | "Rare"
    | "Epic"
    | "Legendary";
};