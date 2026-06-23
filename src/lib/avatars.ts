export const PRESET_AVATARS = [
  {
    id: "avatar-1",
    name: "Cosmic Glow",
    bg: "from-purple-500 to-pink-500",
    emoji: "✨",
  },
  {
    id: "avatar-2",
    name: "Ocean Wave",
    bg: "from-blue-500 to-cyan-500",
    emoji: "🌊",
  },
  {
    id: "avatar-3",
    name: "Forest Green",
    bg: "from-green-500 to-emerald-500",
    emoji: "🌲",
  },
  {
    id: "avatar-4",
    name: "Sunset Fire",
    bg: "from-orange-500 to-red-500",
    emoji: "🔥",
  },
  {
    id: "avatar-5",
    name: "Golden Sun",
    bg: "from-yellow-400 to-orange-400",
    emoji: "☀️",
  },
  {
    id: "avatar-6",
    name: "Electric Voltage",
    bg: "from-yellow-300 to-yellow-500",
    emoji: "⚡",
  },
  {
    id: "avatar-7",
    name: "Pastel Pink",
    bg: "from-pink-400 to-rose-400",
    emoji: "🌸",
  },
  {
    id: "avatar-8",
    name: "Deep Indigo",
    bg: "from-indigo-600 to-purple-600",
    emoji: "🌌",
  },
];

interface AvatarProps {
  avatar: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ avatar, size = "md", className = "" }: AvatarProps) {
  const avatarData = PRESET_AVATARS.find((a) => a.id === avatar) || PRESET_AVATARS[0];

  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-2xl",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br ${avatarData.bg} ${sizeClasses[size]} ${className}`}
    >
      <span>{avatarData.emoji}</span>
    </div>
  );
}
