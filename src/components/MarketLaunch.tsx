"use client";

type Props = {
  dark: boolean;
};

const groups = [
  {
    base: "blue",
    items: [
      { name: "OpenSea", url: "https://opensea.io" },
      { name: "Magic Eden", url: "https://magiceden.io" },
      { name: "Blur", url: "https://blur.io" },
      { name: "Tensor", url: "https://tensor.trade" },
      { name: "Foundation", url: "https://foundation.app" },
      { name: "SuperRare", url: "https://superrare.com" },
      { name: "MakersPlace", url: "https://makersplace.com" },
      { name: "KnownOrigin", url: "https://knownorigin.io" },
      { name: "Nifty Gateway", url: "https://niftygateway.com" },
      { name: "Rarible", url: "https://rarible.com" },
      { name: "Mintable", url: "https://mintable.com" },
      { name: "LooksRare", url: "https://looksrare.org" },
      { name: "X2Y2", url: "https://x2y2.io" },
    ],
  },
  {
    base: "purple",
    items: [
      { name: "Element", url: "https://element.market" },
      { name: "NFTrade", url: "https://nftrade.com" },
      { name: "OKX NFT", url: "https://www.okx.com/web3/nft" },
      { name: "Binance NFT", url: "https://www.binance.com/en/nft" },
      { name: "TokenTrove", url: "https://tokentrove.com" },
      { name: "Joepegs", url: "https://joepegs.com" },
      { name: "Exchange Art", url: "https://exchange.art" },
      { name: "Hyperspace", url: "https://hyperspace.xyz" },
      { name: "Getgems", url: "https://getgems.io" },
      { name: "Stargaze", url: "https://stargaze.zone" },
      { name: "Talis", url: "https://talis.art" },
      { name: "JPG Store", url: "https://jpg.store" },
      { name: "Topaz", url: "https://topaz.so" },
    ],
  },
  {
    base: "yellow",
    items: [
      { name: "BlueMove", url: "https://bluemove.net" },
      { name: "TradePort", url: "https://tradeport.xyz" },
      { name: "Clutchy", url: "https://clutchy.io" },
      { name: "xrp.cafe", url: "https://xrp.cafe" },
      { name: "AtomicHub", url: "https://atomichub.io" },
      { name: "NeftyBlocks", url: "https://neftyblocks.com" },
      { name: "Rand Gallery", url: "https://randgallery.com" },
      { name: "SentX", url: "https://sentx.io" },
      { name: "Mavis Market", url: "https://marketplace.roninchain.com" },
      { name: "Palm NFT Studio", url: "https://palm.io" },
      { name: "Zora", url: "https://zora.co" },
      { name: "Objkt", url: "https://objkt.com" },
      { name: "fx(hash)", url: "https://fxhash.xyz" },
    ],
  },
  {
    base: "green",
    items: [
      { name: "Gamma", url: "https://gamma.io" },
      { name: "UniSat", url: "https://unisat.io" },
      { name: "Ordinals Wallet", url: "https://ordinalswallet.com" },
      { name: "GhostMarket", url: "https://ghostmarket.io" },
      { name: "AirNFTs", url: "https://airnfts.com" },
      { name: "TOFUNFT", url: "https://tofunft.com" },
      { name: "OnePlanet", url: "https://oneplanetnft.io" },
      { name: "GraveMint", url: "https://gravemint.com" },
      { name: "GraveMarket", url: "https://gravemarket.com" },
      { name: "Manifold", url: "https://manifold.xyz" },
      { name: "HeyMint", url: "https://heymint.xyz" },
      { name: "Highlight", url: "https://highlight.xyz" },
      { name: "Thirdweb", url: "https://thirdweb.com" },
    ],
  },
  {
    base: "red",
    items: [
      { name: "Crossmint", url: "https://crossmint.com" },
      { name: "NiftyKit", url: "https://niftykit.com" },
      { name: "Mintbase", url: "https://mintbase.xyz" },
      { name: "LaunchMyNFT", url: "https://launchmynft.io" },
      { name: "Holaplex", url: "https://holaplex.com" },
      { name: "Metaplex", url: "https://metaplex.com" },
      { name: "Fair.xyz", url: "https://fair.xyz" },
      { name: "Premint", url: "https://premint.xyz" },
      { name: "NMKR", url: "https://nmkr.io" },
      { name: "OrdinalsBot", url: "https://ordinalsbot.com" },
      { name: "Unlock Protocol", url: "https://unlock-protocol.com" },
      { name: "Bueno", url: "https://bueno.art" },
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