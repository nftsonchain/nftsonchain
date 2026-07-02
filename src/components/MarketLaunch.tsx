"use client";

type Props = {
  dark: boolean;
};

const groups = [
  {
    base: "blue",
    items: [
      { name: "OpenSea", url: "https://opensea.io" },
      { name: "Blur", url: "https://blur.io" },
      { name: "Rarible", url: "https://rarible.com" },
      { name: "SuperRare", url: "https://superrare.com" },
      { name: "Foundation", url: "https://foundation.app" },
      { name: "LooksRare", url: "https://looksrare.org" },
      { name: "X2Y2", url: "https://x2y2.io" },
      { name: "Zora", url: "https://zora.co" },
      { name: "Sudoswap", url: "https://sudoswap.xyz" },
      { name: "NFTX", url: "https://nftx.io" },
      { name: "Nifty Gateway", url: "https://niftygateway.com" },
      { name: "Manifold", url: "https://manifold.xyz" },
      { name: "Async Art", url: "https://async.art" },
      { name: "Punks Terminal", url: "https://punksterminal.io" },
      { name: "HeyMint", url: "https://heymint.xyz" },
      { name: "Premint", url: "https://premint.xyz" },
      { name: "Fair.xyz", url: "https://fair.xyz" },
      { name: "Mooar", url: "https://mooar.com" },
    ],
  },
  {
    base: "purple",
    items: [
      { name: "Magic Eden", url: "https://magiceden.io" },
      { name: "Tensor", url: "https://tensor.trade" },
      { name: "Hyperspace", url: "https://hyperspace.xyz" },
      { name: "Solanart", url: "https://solanart.io" },
      { name: "Exchange Art", url: "https://exchange.art" },
      { name: "Floor", url: "https://floor.xyz" },
      { name: "Yawww", url: "https://yawww.io" },
      { name: "Lilypad", url: "https://lilypad.tech" },
      { name: "LaunchMyNFT", url: "https://launchmynft.io" },
      { name: "Mirror World", url: "https://mirrorworld.fun" },
      { name: "Tensor Launchpad", url: "https://tensor.trade" },
      { name: "Magic Eden Launchpad", url: "https://magiceden.io/launchpad" },
      { name: "LaunchLab", url: "https://launchlab.app" },
    ],
  },
  {
    base: "yellow",
    items: [
      { name: "Binance NFT", url: "https://www.binance.com/en/nft" },
      { name: "BakerySwap", url: "https://www.bakeryswap.org" },
      { name: "NFT20", url: "https://nft20.io" },
      { name: "Bueno", url: "https://bueno.art" },
      { name: "TokenWorks", url: "https://tokenworks.xyz" },
      { name: "Bored Candy City", url: "https://boredcandycity.com" },
      { name: "Ventory", url: "https://ventory.gg" },
      { name: "Castle", url: "https://castle.xyz" },
      { name: "Bluemove", url: "https://bluemove.net" },
      { name: "Mintsquare", url: "https://mintsquare.io" },
    ],
  },
  {
    base: "green",
    items: [
      { name: "Gamma", url: "https://gamma.io" },
      { name: "Ord.io", url: "https://ord.io" },
      { name: "Ordinals Wallet", url: "https://ordinalswallet.com" },
      { name: "Magic Eden BTC", url: "https://magiceden.io/ordinals" },
      { name: "OrdSwap", url: "https://ordswap.io" },
      { name: "Getgems", url: "https://getgems.io" },
      { name: "Fragment", url: "https://fragment.com" },
      { name: "AtomicMarket", url: "https://wax.atomichub.io" },
      { name: "Theta Drop", url: "https://thetadrop.com" },
      { name: "Ronin Market", url: "https://marketplace.roninchain.com" },
      { name: "Immutable Hub", url: "https://immutable.com" },
      { name: "DMarket", url: "https://dmarket.com" },
      { name: "Enjin Market", url: "https://enjin.io" },
      { name: "Flowverse", url: "https://flowverse.co" },
    ],
  },
  {
    base: "red",
    items: [
      { name: "Objkt", url: "https://objkt.com" },
      { name: "XRP Cafe", url: "https://xrpcafe.io" },
      { name: "Gravemint", url: "https://gravemint.com" },
      { name: "Grave Market", url: "https://graves.market" },
      { name: "OnXRP", url: "https://onxrp.com" },
      { name: "JPG Store", url: "https://jpg.store" },
      { name: "CNFT.io", url: "https://cnft.io" },
      { name: "Artano", url: "https://artano.io" },
      { name: "Salvor", url: "https://salvor.io" },
      { name: "Ebisu Bay", url: "https://ebisusbay.com" },
      { name: "Wasabi", url: "https://wasabi.xyz" },
      { name: "SuperVerse", url: "https://superverse.co" },
      { name: "Avatr", url: "https://avatr.com" },
      { name: "ShardingDAO", url: "https://shardingdao.com" },
    ],
  },
];

function shade(base: string, level: number) {
  const map: Record<string, string[]> = {
    blue: ["bg-blue-700", "bg-blue-600", "bg-blue-500", "bg-blue-400"],
    purple: ["bg-purple-700", "bg-purple-600", "bg-purple-500", "bg-purple-400"],
    yellow: ["bg-yellow-600", "bg-yellow-500", "bg-yellow-400"],
    green: ["bg-green-700", "bg-green-600", "bg-green-500", "bg-green-400"],
    red: ["bg-red-700", "bg-red-600", "bg-red-500", "bg-red-400"],
  };

  return map[base][level % map[base].length];
}

const marketplaces = groups.flatMap((group) =>
  group.items.map((item, i) => ({
    ...item,
    color: shade(group.base, i),
  }))
);

function sizeClass(name: string) {
  const len = name.length;

  if (len <= 6) return "w-[92px]";
  if (len <= 10) return "w-[115px]";
  if (len <= 14) return "w-[135px]";
  if (len <= 18) return "w-[155px]";
  return "w-[175px]";
}

export default function MarketLaunch({ dark }: Props) {
  return (
    <div className="w-full">
      <div className="mb-7">
        <h2
          className={`text-2xl md:text-3xl font-semibold tracking-tight ${
            dark ? "text-white" : "text-black"
          }`}
        >
          NFT Marketplaces & Launchpads
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {marketplaces.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center justify-center
              ${sizeClass(item.name)}
              h-[34px]
              px-2.5
              whitespace-nowrap
              rounded-full
              text-[14px] md:text-[15px]
              font-bold
              text-white
              ${item.color}
              border border-white/10
              transition-all duration-300 ease-out
              hover:scale-[1.03]
              hover:shadow-md
              hover:brightness-110
            `}
          >
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}