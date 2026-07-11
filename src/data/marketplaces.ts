import type { Marketplace } from "./types";

export const marketplaces: Marketplace[] = [
  // ─── Multi-Chain Majors ───────────────────────────────
  {
    id: "opensea",
    name: "OpenSea",
    slug: "opensea",
    description:
      "The world's largest NFT marketplace. OpenSea pioneered the peer-to-peer NFT trading experience and supports collections across multiple blockchains.",
    category: "General",
    foundedYear: 2017,
    supportedChains: ["ethereum", "polygon", "base", "arbitrum", "optimism", "avalanche", "bnb", "zksync", "blast"],
    website: "https://opensea.io",
    twitter: "https://x.com/opensea",
    logo: "🌊",
  },
  {
    id: "magic-eden",
    name: "Magic Eden",
    slug: "magic-eden",
    description:
      "A leading cross-chain NFT marketplace originally built on Solana. Magic Eden has expanded to support Bitcoin Ordinals, Ethereum, Polygon, and Base.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["solana", "bitcoin", "ethereum", "polygon", "base", "aptos", "sei", "abstract", "apechain"],
    website: "https://magiceden.io",
    twitter: "https://x.com/MagicEden",
    logo: "✧",
  },
  {
    id: "rarible",
    name: "Rarible",
    slug: "rarible",
    description:
      "A community-owned NFT marketplace with a governance token. Rarible supports multi-chain collections and offers tools for creators.",
    category: "General",
    foundedYear: 2020,
    supportedChains: ["ethereum", "polygon", "base", "arbitrum", "immutable", "zksync"],
    website: "https://rarible.com",
    twitter: "https://x.com/rarible",
    logo: "🎨",
  },
  {
    id: "element",
    name: "Element",
    slug: "element",
    description:
      "A community-driven aggregated marketplace supporting multiple blockchains with optimized gas fees and batch trading.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["ethereum", "bnb", "polygon", "avalanche", "linea", "zksync"],
    website: "https://element.market",
    twitter: "https://x.com/Element_Market",
    logo: "⚡",
  },
  {
    id: "nftrade",
    name: "NFTrade",
    slug: "nftrade",
    description:
      "A multi-chain decentralized NFT platform enabling cross-chain NFT swaps, minting, and trading.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["ethereum", "polygon", "avalanche", "bnb"],
    website: "https://nftrade.com",
    twitter: "https://x.com/NFTrade",
    logo: "🔄",
  },

  // ─── Ethereum Focused ─────────────────────────────────
  {
    id: "blur",
    name: "Blur",
    slug: "blur",
    description:
      "The fastest NFT marketplace for pro traders. Blur features zero marketplace fees, instant listings, and portfolio-level analytics for Ethereum NFTs.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["ethereum", "blast"],
    website: "https://blur.io",
    twitter: "https://x.com/blur_io",
    logo: "✨",
  },
  {
    id: "looksrare",
    name: "LooksRare",
    slug: "looksrare",
    description:
      "A community-first NFT marketplace that rewards traders with LOOKS tokens. Known for competitive trading fees and innovative reward mechanisms.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["ethereum"],
    website: "https://looksrare.org",
    twitter: "https://x.com/LooksRare",
    logo: "👀",
  },
  {
    id: "superrare",
    name: "SuperRare",
    slug: "superrare",
    description:
      "A curated marketplace for single-edition digital artworks. SuperRare positions itself as a high-end gallery for rare digital art.",
    category: "Curated",
    foundedYear: 2018,
    supportedChains: ["ethereum"],
    website: "https://superrare.com",
    twitter: "https://x.com/SuperRare",
    logo: "🏆",
  },
  {
    id: "foundation",
    name: "Foundation",
    slug: "foundation",
    description:
      "A creator-first marketplace for digital art. Foundation empowers artists to mint and auction their work to collectors worldwide.",
    category: "Art",
    foundedYear: 2021,
    supportedChains: ["ethereum", "base"],
    website: "https://foundation.app",
    twitter: "https://x.com/foundation",
    logo: "🎭",
  },
  {
    id: "makersplace",
    name: "MakersPlace",
    slug: "makersplace",
    description:
      "A premium digital art marketplace where creators can sell authentic and unique digital creations with blockchain-verified authenticity.",
    category: "Art",
    foundedYear: 2018,
    supportedChains: ["ethereum"],
    website: "https://makersplace.com",
    twitter: "https://x.com/makersplaceco",
    logo: "🖌️",
  },
  {
    id: "knownorigin",
    name: "KnownOrigin",
    slug: "knownorigin",
    description:
      "A digital art marketplace powered by Ethereum where artists can create, discover, and collect rare digital art.",
    category: "Art",
    foundedYear: 2018,
    supportedChains: ["ethereum"],
    website: "https://knownorigin.io",
    twitter: "https://x.com/KnownOrigin_io",
    logo: "🌟",
  },
  {
    id: "nifty-gateway",
    name: "Nifty Gateway",
    slug: "nifty-gateway",
    description:
      "A premium NFT marketplace owned by Gemini. Known for exclusive drops from top artists and brands with credit card support.",
    category: "Curated",
    foundedYear: 2018,
    supportedChains: ["ethereum"],
    website: "https://niftygateway.com",
    twitter: "https://x.com/nabortygateway",
    logo: "💫",
  },
  {
    id: "mintable",
    name: "Mintable",
    slug: "mintable",
    description:
      "A user-friendly NFT marketplace enabling gasless minting. Mintable makes it easy for creators to mint and sell NFTs without upfront costs.",
    category: "General",
    foundedYear: 2018,
    supportedChains: ["ethereum", "immutable", "zksync"],
    website: "https://mintable.com",
    twitter: "https://x.com/mintaborle",
    logo: "🪙",
  },
  {
    id: "x2y2",
    name: "X2Y2",
    slug: "x2y2",
    description:
      "A decentralized NFT marketplace focused on fair token distribution and community governance with competitive trading fees.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["ethereum"],
    website: "https://x2y2.io",
    twitter: "https://x.com/the_x2y2",
    logo: "✖️",
  },
  {
    id: "manifold",
    name: "Manifold",
    slug: "manifold",
    description:
      "Creator tools for minting NFTs with your own smart contract. Manifold empowers artists with full ownership and control.",
    category: "Launchpad",
    foundedYear: 2021,
    supportedChains: ["ethereum", "base", "optimism"],
    website: "https://manifold.xyz",
    twitter: "https://x.com/manifoldxyz",
    logo: "🔮",
  },

  // ─── Solana Focused ───────────────────────────────────
  {
    id: "tensor",
    name: "Tensor",
    slug: "tensor",
    description:
      "The fastest Solana NFT marketplace with real-time data, AMM pools, and professional trading tools for power users.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["solana"],
    website: "https://tensor.trade",
    twitter: "https://x.com/tensor_hq",
    logo: "⚡",
  },
  {
    id: "drip",
    name: "DRiP",
    slug: "drip",
    description:
      "A free-to-collect NFT platform on Solana. DRiP delivers curated drops from artists directly to collectors using compressed NFT technology.",
    category: "Art",
    foundedYear: 2022,
    supportedChains: ["solana"],
    website: "https://drip.haus",
    twitter: "https://x.com/draborphaus",
    logo: "💧",
  },
  {
    id: "exchange-art",
    name: "Exchange Art",
    slug: "exchange-art",
    description:
      "A curated fine art marketplace on Solana. Exchange Art focuses on high-quality 1/1 artworks and limited editions from established digital artists.",
    category: "Art",
    foundedYear: 2021,
    supportedChains: ["solana"],
    website: "https://exchange.art",
    twitter: "https://x.com/exchaborge_art",
    logo: "🖼️",
  },
  {
    id: "hyperspace",
    name: "Hyperspace",
    slug: "hyperspace",
    description:
      "An aggregated NFT marketplace on Solana offering cross-marketplace listings, analytics, and portfolio tracking.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["solana"],
    website: "https://hyperspace.xyz",
    twitter: "https://x.com/hyperaborspace",
    logo: "🚀",
  },

  // ─── Bitcoin / Ordinals ───────────────────────────────
  {
    id: "gamma",
    name: "Gamma",
    slug: "gamma",
    description:
      "A Bitcoin NFT marketplace and creator platform. Gamma enables no-code Ordinals creation, collection, and trading on Bitcoin.",
    category: "Ordinals",
    foundedYear: 2022,
    supportedChains: ["bitcoin"],
    website: "https://gamma.io",
    twitter: "https://x.com/Gamaborma_io",
    logo: "🎯",
  },
  {
    id: "unisat",
    name: "UniSat",
    slug: "unisat",
    description:
      "A Bitcoin wallet and marketplace for Ordinals and BRC-20 tokens. UniSat provides essential infrastructure for the Bitcoin NFT ecosystem.",
    category: "Ordinals",
    foundedYear: 2023,
    supportedChains: ["bitcoin"],
    website: "https://unisat.io",
    twitter: "https://x.com/unisat_wallet",
    logo: "⛓️",
  },
  {
    id: "ordinals-wallet",
    name: "Ordinals Wallet",
    slug: "ordinals-wallet",
    description:
      "A dedicated wallet and marketplace for Bitcoin Ordinals inscriptions with a clean, user-friendly interface.",
    category: "Ordinals",
    foundedYear: 2023,
    supportedChains: ["bitcoin"],
    website: "https://ordinalswallet.com",
    twitter: "https://x.com/ordwallet",
    logo: "📜",
  },
  {
    id: "ordinalsbot",
    name: "OrdinalsBot",
    slug: "ordinalsbot",
    description:
      "An inscription service for Bitcoin Ordinals. OrdinalsBot makes it easy to inscribe images, text, and files onto the Bitcoin blockchain.",
    category: "Launchpad",
    foundedYear: 2023,
    supportedChains: ["bitcoin"],
    website: "https://ordinalsbot.com",
    twitter: "https://x.com/OrdinalsBot",
    logo: "🤖",
  },

  // ─── Chain-Specific ───────────────────────────────────
  {
    id: "jpg-store",
    name: "JPG Store",
    slug: "jpg-store",
    description:
      "The leading NFT marketplace on Cardano. JPG Store is the go-to destination for Cardano NFT trading and discovery.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["cardano"],
    website: "https://jpg.store",
    twitter: "https://x.com/jpgstoreNFT",
    logo: "🖼️",
  },
  {
    id: "sentx",
    name: "SentX",
    slug: "sentx",
    description:
      "The premier NFT marketplace on Hedera. SentX enables trading of Hedera native tokens and NFTs with low, predictable fees.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["hedera"],
    website: "https://sentx.io",
    twitter: "https://x.com/sentx_io",
    logo: "📡",
  },
  {
    id: "stargaze",
    name: "Stargaze",
    slug: "stargaze",
    description:
      "The NFT marketplace and launchpad for the Cosmos ecosystem. Stargaze enables cross-chain NFT trading via IBC.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["cosmos", "osmosis", "juno"],
    website: "https://stargaze.zone",
    twitter: "https://x.com/StargazeZone",
    logo: "🌟",
  },
  {
    id: "talis",
    name: "Talis",
    slug: "talis",
    description:
      "The leading NFT marketplace on Injective. Talis provides a curated art marketplace experience for the Injective community.",
    category: "Art",
    foundedYear: 2023,
    supportedChains: ["injective"],
    website: "https://talis.art",
    twitter: "https://x.com/taborlis_art",
    logo: "🎨",
  },
  {
    id: "getgems",
    name: "Getgems",
    slug: "getgems",
    description:
      "The largest NFT marketplace on TON. Getgems integrates with Telegram for seamless NFT discovery, minting, and trading.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["ton"],
    website: "https://getgems.io",
    twitter: "https://x.com/getgemsio",
    logo: "💎",
  },
  {
    id: "objkt",
    name: "Objkt",
    slug: "objkt",
    description:
      "The largest NFT marketplace on Tezos. Objkt is the hub for the vibrant Tezos art scene with generative art and 1/1 pieces.",
    category: "Art",
    foundedYear: 2021,
    supportedChains: ["tezos"],
    website: "https://objkt.com",
    twitter: "https://x.com/objktcom",
    logo: "◉",
  },
  {
    id: "fxhash",
    name: "fx(hash)",
    slug: "fxhash",
    description:
      "A generative art marketplace on Tezos and Ethereum. fx(hash) enables artists to publish generative tokens that produce unique outputs for each collector.",
    category: "Art",
    foundedYear: 2021,
    supportedChains: ["tezos", "ethereum", "base"],
    website: "https://fxhash.xyz",
    twitter: "https://x.com/fx_hash_",
    logo: "🧬",
  },
  {
    id: "joepegs",
    name: "Joepegs",
    slug: "joepegs",
    description:
      "The leading NFT marketplace on Avalanche. Built by the Trader Joe team, Joepegs supports Avalanche C-Chain NFTs.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["avalanche"],
    website: "https://joepegs.com",
    twitter: "https://x.com/joaborpegs",
    logo: "🐸",
  },
  {
    id: "topaz",
    name: "Topaz",
    slug: "topaz",
    description:
      "The premier NFT marketplace on Aptos. Topaz offers a curated experience for discovering and trading Move-based NFTs.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["aptos"],
    website: "https://topaz.so",
    twitter: "https://x.com/topaz_market",
    logo: "💠",
  },
  {
    id: "bluemove",
    name: "BlueMove",
    slug: "bluemove",
    description:
      "A multi-chain NFT marketplace supporting Aptos and Sui. BlueMove offers a comprehensive NFT trading experience across Move-based chains.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["aptos", "sui"],
    website: "https://bluemove.net",
    twitter: "https://x.com/BlueMove_OA",
    logo: "🔷",
  },
  {
    id: "tradeport",
    name: "TradePort",
    slug: "tradeport",
    description:
      "A multi-chain NFT aggregator supporting Sui, Aptos, and Sei with cross-marketplace listing aggregation.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["sui", "aptos", "sei"],
    website: "https://tradeport.xyz",
    twitter: "https://x.com/trabordeport_xyz",
    logo: "🏪",
  },
  {
    id: "atomichub",
    name: "AtomicHub",
    slug: "atomichub",
    description:
      "The leading NFT marketplace on WAX. AtomicHub supports trading card collections, gaming assets, and digital collectibles.",
    category: "General",
    foundedYear: 2020,
    supportedChains: ["wax"],
    website: "https://atomichub.io",
    twitter: "https://x.com/AtomicHub",
    logo: "⚛️",
  },
  {
    id: "neftyblocks",
    name: "NeftyBlocks",
    slug: "neftyblocks",
    description:
      "An NFT creation and trading platform on WAX focused on drops, blends, and pack mechanics for collectible experiences.",
    category: "Launchpad",
    foundedYear: 2021,
    supportedChains: ["wax"],
    website: "https://neftyblocks.com",
    twitter: "https://x.com/neftyblocks",
    logo: "🧱",
  },
  {
    id: "rand-gallery",
    name: "Rand Gallery",
    slug: "rand-gallery",
    description:
      "An NFT marketplace and explorer on Algorand. Rand Gallery provides a clean, curated interface for Algorand Standard Assets.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["algorand"],
    website: "https://randgallery.com",
    twitter: "https://x.com/RandGallery",
    logo: "🎲",
  },
  {
    id: "mavis-market",
    name: "Mavis Market",
    slug: "mavis-market",
    description:
      "The official NFT marketplace on Ronin Network. Mavis Market is the primary trading platform for Axie Infinity and Ronin ecosystem NFTs.",
    category: "Gaming",
    foundedYear: 2022,
    supportedChains: ["ronin"],
    website: "https://marketplace.roninchain.com",
    twitter: "https://x.com/RoninNetwork",
    logo: "⚔️",
  },
  {
    id: "treasure",
    name: "Treasure",
    slug: "treasure",
    description:
      "The gaming NFT ecosystem on Arbitrum. Treasure provides marketplace infrastructure and community tools for web3 gaming.",
    category: "Gaming",
    foundedYear: 2021,
    supportedChains: ["arbitrum"],
    website: "https://treasure.lol",
    twitter: "https://x.com/Treasure_DAO",
    logo: "🏴‍☠️",
  },

  // ─── Launchpads & Tools ───────────────────────────────
  {
    id: "zora",
    name: "Zora",
    slug: "zora",
    description:
      "A decentralized marketplace protocol and creator tools platform. Zora enables permissionless NFT creation with on-chain metadata.",
    category: "Launchpad",
    foundedYear: 2020,
    supportedChains: ["ethereum", "base", "optimism", "blast"],
    website: "https://zora.co",
    twitter: "https://x.com/zaborzone",
    logo: "🟣",
  },
  {
    id: "highlight",
    name: "Highlight",
    slug: "highlight",
    description:
      "A creative platform for generative art and open editions. Highlight empowers artists to deploy to multiple chains with no-code tools.",
    category: "Launchpad",
    foundedYear: 2022,
    supportedChains: ["ethereum", "base", "optimism", "arbitrum", "polygon", "zksync"],
    website: "https://highlight.xyz",
    twitter: "https://x.com/highlightxyz",
    logo: "✨",
  },
  {
    id: "crossmint",
    name: "Crossmint",
    slug: "crossmint",
    description:
      "Enterprise NFT infrastructure enabling credit card minting and cross-chain deployment for brands and developers.",
    category: "Launchpad",
    foundedYear: 2021,
    supportedChains: ["ethereum", "polygon", "solana", "base", "arbitrum", "avalanche"],
    website: "https://crossmint.com",
    twitter: "https://x.com/crossmint",
    logo: "🔀",
  },
  {
    id: "mintbase",
    name: "Mintbase",
    slug: "mintbase",
    description:
      "An NFT infrastructure platform on NEAR Protocol enabling no-code minting, stores, and marketplace creation.",
    category: "Launchpad",
    foundedYear: 2018,
    supportedChains: ["near"],
    website: "https://mintbase.xyz",
    twitter: "https://x.com/mintbase",
    logo: "🏗️",
  },
  {
    id: "metaplex",
    name: "Metaplex",
    slug: "metaplex",
    description:
      "The NFT standard and tooling protocol for Solana. Metaplex defines the metadata standard used by virtually all Solana NFTs.",
    category: "Launchpad",
    foundedYear: 2021,
    supportedChains: ["solana"],
    website: "https://metaplex.com",
    twitter: "https://x.com/metaplex",
    logo: "⚙️",
  },
  {
    id: "nmkr",
    name: "NMKR",
    slug: "nmkr",
    description:
      "The leading NFT minting and tokenization platform on Cardano. NMKR enables no-code NFT creation and smart contract deployment.",
    category: "Launchpad",
    foundedYear: 2021,
    supportedChains: ["cardano"],
    website: "https://nmkr.io",
    twitter: "https://x.com/nmkr_io",
    logo: "🛠️",
  },

  // ─── CEX Marketplaces ─────────────────────────────────
  {
    id: "binance-nft",
    name: "Binance NFT",
    slug: "binance-nft",
    description:
      "Binance's official NFT marketplace. Supports multiple chains and offers exclusive drops, mystery boxes, and IGO events.",
    category: "General",
    foundedYear: 2021,
    supportedChains: ["bnb", "ethereum", "polygon"],
    website: "https://www.binance.com/en/nft",
    twitter: "https://x.com/TheBinanceNFT",
    logo: "🟡",
  },
  {
    id: "okx-nft",
    name: "OKX NFT",
    slug: "okx-nft",
    description:
      "OKX's multi-chain NFT marketplace with zero platform fees. Supports aggregated listings from other marketplaces.",
    category: "General",
    foundedYear: 2022,
    supportedChains: ["ethereum", "polygon", "bnb", "solana", "avalanche", "arbitrum", "optimism", "base"],
    website: "https://www.okx.com/web3/nft",
    twitter: "https://x.com/okx",
    logo: "⬟",
  },
];

// ─── Helper Functions ───────────────────────────────────

/** Get marketplaces that support a given blockchain id */
export function getMarketplacesForChain(chainId: string): Marketplace[] {
  return marketplaces.filter((m) => m.supportedChains.includes(chainId));
}

/** Get marketplace by slug */
export function getMarketplaceBySlug(slug: string): Marketplace | undefined {
  return marketplaces.find((m) => m.slug === slug);
}

/** Get marketplace by name */
export function getMarketplaceByName(name: string): Marketplace | undefined {
  return marketplaces.find(
    (m) => m.name.toLowerCase() === name.toLowerCase()
  );
}

/** Get marketplace names for a chain (for NFT modal backward compat) */
export function getMarketplaceNamesForChain(chainName: string): string[] {
  const chainSlugMap: Record<string, string> = {
    Ethereum: "ethereum",
    Solana: "solana",
    Bitcoin: "bitcoin",
    Polygon: "polygon",
    Base: "base",
    Arbitrum: "arbitrum",
    Optimism: "optimism",
    Avalanche: "avalanche",
    "BNB Chain": "bnb",
    BNB: "bnb",
    Cardano: "cardano",
    Tezos: "tezos",
    Flow: "flow",
    NEAR: "near",
    Near: "near",
    Hedera: "hedera",
    Cosmos: "cosmos",
    Injective: "injective",
    TON: "ton",
    Gram: "ton",
    WAX: "wax",
    Wax: "wax",
    Algorand: "algorand",
    Immutable: "immutable",
    "Immutable X": "immutable",
    Sui: "sui",
    Aptos: "aptos",
    Ronin: "ronin",
    Sei: "sei",
    Abstract: "abstract",
    ApeChain: "apechain",
    Blast: "blast",
    Mantle: "mantle",
    Linea: "linea",
    "zkSync Era": "zksync",
    zkSync: "zksync",
    Moonbeam: "moonbeam",
    VeChain: "vechain",
    Zilliqa: "zilliqa",
    Tron: "tron",
    TRON: "tron",
  };

  const chainId = chainSlugMap[chainName] || chainName.toLowerCase();
  const results = getMarketplacesForChain(chainId);
  return results.length > 0
    ? results.map((m) => m.name)
    : ["Marketplace not available"];
}
