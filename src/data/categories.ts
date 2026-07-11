import { CATEGORIES } from "./types";

export { CATEGORIES };

/** Display metadata for categories */
export const CATEGORY_META: Record<
  string,
  { label: string; icon: string; color: string }
> = {
  PFP: { label: "PFP", icon: "👤", color: "#8B5CF6" },
  Gaming: { label: "Gaming", icon: "🎮", color: "#10B981" },
  Photography: { label: "Photography", icon: "📸", color: "#F59E0B" },
  Music: { label: "Music", icon: "🎵", color: "#EC4899" },
  AI: { label: "AI", icon: "🤖", color: "#06B6D4" },
  Anime: { label: "Anime", icon: "🌸", color: "#F472B6" },
  Pixel: { label: "Pixel", icon: "👾", color: "#6366F1" },
  Meme: { label: "Meme", icon: "😂", color: "#F97316" },
  Sports: { label: "Sports", icon: "⚽", color: "#22C55E" },
  Fashion: { label: "Fashion", icon: "👗", color: "#D946EF" },
  Collectibles: { label: "Collectibles", icon: "💎", color: "#3B82F6" },
};
