export default function Marquee({ dark }: { dark: boolean }) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y
      ${dark ? "bg-[#05070D] border-white/10" : "bg-gray-100 border-black/10"}`}
    >
      <div className="flex w-max animate-marquee">
        
        {/* FIRST COPY */}
        <span className="px-4 py-2 text-[#00FF3B] font-medium">
          NFTs Onchain ◉ — Discover NFT projects, culture, and communities across multiple chains
        </span>

        {/* SECOND COPY (CRITICAL FOR LOOP) */}
        <span className="px-4 py-2 text-[#00FF3B] font-medium">
          NFTs Onchain ◉ — Checkout @nfts_onchain on X - Discord - Youtube - Tiktok - Facebook
        </span>

      </div>
    </div>
  );
}