type Props = {
  dark: boolean;
};

function shade(base: string, level: number) {
  const map: Record<string, string[]> = {
    blue: ["bg-blue-700","bg-blue-600","bg-blue-500","bg-blue-400","bg-blue-300","bg-sky-400","bg-sky-300"],
    purple: ["bg-purple-700","bg-purple-600","bg-purple-500","bg-purple-400","bg-purple-300","bg-fuchsia-400"],
    yellow: ["bg-yellow-600","bg-yellow-500","bg-yellow-400","bg-amber-400"],
    red: ["bg-red-600","bg-red-500","bg-red-400","bg-rose-400"],
    green: ["bg-green-600","bg-green-500","bg-green-400","bg-emerald-400"],
    cyan: ["bg-cyan-600","bg-cyan-500","bg-cyan-400","bg-sky-400"],
    orange: ["bg-orange-600","bg-orange-500","bg-orange-400"],
  };
  return map[base][level % map[base].length];
}

const groups = [
  {
    base: "blue",
    items: [
      { name: "OpenSea", url: "https://opensea.io" },
      { name: "Blur", url: "https://blur.io" },
      { name: "Rarible", url: "https://rarible.com" },
      { name: "LooksRare", url: "https://looksrare.org" },
      { name: "X2Y2", url: "https://x2y2.io" },
      { name: "Foundation", url: "https://foundation.app" },
      { name: "SuperRare", url: "https://superrare.com" },
      { name: "KnownOrigin", url: "https://knownorigin.io" },
      { name: "MakersPlace", url: "https://makersplace.com" },
      { name: "Zora", url: "https://zora.co" },
      { name: "Manifold", url: "https://manifold.xyz" },
      { name: "Async Art", url: "https://async.art" },
      { name: "NFTX", url: "https://nftx.io" },
      { name: "Sudoswap", url: "https://sudoswap.xyz" },
      { name: "Element", url: "https://element.market" },
      { name: "Mintable", url: "https://mintable.app" },
    ],
  },
  {
    base: "purple",
    items: [
      { name: "Magic Eden", url: "https://magiceden.io" },
      { name: "Tensor", url: "https://tensor.trade" },
      { name: "Solanart", url: "https://solanart.io" },
      { name: "Exchange Art", url: "https://exchange.art" },
      { name: "DigitalEyes", url: "https://digitaleyes.market" },
      { name: "Metaplex", url: "https://metaplex.com" },
      { name: "Hyperspace", url: "https://hyperspace.xyz" },
      { name: "CoralCube", url: "https://coralcube.io" },
    ],
  },
  {
    base: "yellow",
    items: [
      { name: "Binance NFT", url: "https://www.binance.com/en/nft" },
      { name: "PancakeSwap NFT", url: "https://pancakeswap.finance/nfts" },
      { name: "NFTrade", url: "https://nftrade.com" },
      { name: "TofuNFT", url: "https://tofunft.com" },
    ],
  },
  {
    base: "red",
    items: [
      { name: "Joepegs", url: "https://joepegs.com" },
      { name: "Kalao", url: "https://kalao.io" },
      { name: "Campfire", url: "https://campfire.exchange" },
    ],
  },
  {
    base: "green",
    items: [
      { name: "Objkt", url: "https://objkt.com" },
      { name: "fxhash", url: "https://fxhash.xyz" },
      { name: "Versum", url: "https://versum.xyz" },
      { name: "Teia", url: "https://teia.art" },
      { name: "8bidou", url: "https://8bidou.com" },
    ],
  },
  {
    base: "cyan",
    items: [
      { name: "Stargaze", url: "https://stargaze.zone" },
      { name: "Omniflix", url: "https://omniflix.market" },
      { name: "Loop", url: "https://loop.markets" },
    ],
  },
  {
    base: "orange",
    items: [
      { name: "Gamma", url: "https://gamma.io" },
      { name: "Ordinals Wallet", url: "https://ordinalswallet.com" },
      { name: "Unisat", url: "https://unisat.io" },
      { name: "OKX Ordinals", url: "https://www.okx.com/web3/marketplace/nft" },
    ],
  },
  {
    base: "blue",
    items: [
      { name: "Fragment", url: "https://fragment.com" },
      { name: "Aqua", url: "https://aqua.xyz" },
      { name: "Tradeport", url: "https://tradeport.xyz" },
      { name: "Tokhun", url: "https://tokhun.io" },
      { name: "BloctoBay", url: "https://bloctobay.com" },
    ],
  },
];

const marketplaces = groups.flatMap((group) =>
  group.items.map((item, i) => ({
    ...item,
    color: shade(group.base, i),
  }))
);

export default function Marketplaces({ dark }: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-6">NFT Marketplaces</h2>

      <div className="flex flex-wrap gap-3">
        {marketplaces.map((m) => (
          <a
            key={m.name}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg text-sm font-medium text-white
            ${m.color}
            hover:scale-105 transition`}
          >
            {m.name}
          </a>
        ))}
      </div>
    </div>
  );
}