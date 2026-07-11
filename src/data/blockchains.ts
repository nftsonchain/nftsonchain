import type { Blockchain } from "./types";

export const blockchains: Blockchain[] = [
  // ─── Layer 1 Majors ────────────────────────────────────
  {
    id: "bitcoin",
    name: "Bitcoin",
    slug: "bitcoin",
    description:
      "The original blockchain. Bitcoin NFTs emerged through Ordinals and BRC-20 inscriptions, bringing digital artifacts to the most decentralized and secure network in existence.",
    website: "https://bitcoin.org",
    twitter: "https://x.com/bitcoin",
    accentColor: "#F7931A",
    logo: "₿",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    slug: "ethereum",
    description:
      "The birthplace of NFTs. Ethereum's smart contract platform pioneered digital ownership with ERC-721 and ERC-1155 standards, hosting the majority of the world's NFT collections.",
    website: "https://ethereum.org",
    twitter: "https://x.com/ethereum",
    accentColor: "#627EEA",
    logo: "Ξ",
  },
  {
    id: "solana",
    name: "Solana",
    slug: "solana",
    description:
      "A high-performance blockchain known for fast transactions and low fees. Solana has become a major NFT hub with vibrant communities and innovative compressed NFT technology.",
    website: "https://solana.com",
    twitter: "https://x.com/solana",
    accentColor: "#9945FF",
    logo: "◎",
  },
  {
    id: "cardano",
    name: "Cardano",
    slug: "cardano",
    description:
      "A research-driven blockchain with a growing NFT ecosystem. Cardano offers native token support without smart contracts for basic NFT minting, making it unique among chains.",
    website: "https://cardano.org",
    twitter: "https://x.com/cardano",
    accentColor: "#0033AD",
    logo: "₳",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    slug: "avalanche",
    description:
      "A fast, low-cost platform with subnet architecture. Avalanche supports NFTs across its C-Chain and custom subnets, enabling gaming and collectible ecosystems.",
    website: "https://avax.network",
    twitter: "https://x.com/avaborz",
    accentColor: "#E84142",
    logo: "🔺",
  },
  {
    id: "bnb",
    name: "BNB Chain",
    slug: "bnb-chain",
    description:
      "Binance's smart contract blockchain with high throughput and low fees. BNB Chain hosts a diverse NFT ecosystem including gaming, PFPs, and marketplace infrastructure.",
    website: "https://www.bnbchain.org",
    twitter: "https://x.com/BNBCHAIN",
    accentColor: "#F0B90B",
    logo: "⬡",
  },
  {
    id: "ton",
    name: "TON",
    slug: "ton",
    description:
      "The Open Network, originally designed by Telegram. TON has a rapidly growing NFT ecosystem with deep integration into the Telegram messenger platform.",
    website: "https://ton.org",
    twitter: "https://x.com/ton_blockchain",
    accentColor: "#0098EA",
    logo: "💎",
  },
  {
    id: "near",
    name: "NEAR",
    slug: "near",
    description:
      "A sharded, developer-friendly blockchain with human-readable accounts. NEAR supports NFTs through its NEP-171 standard and has a strong creative community.",
    website: "https://near.org",
    twitter: "https://x.com/NEARProtocol",
    accentColor: "#00C1DE",
    logo: "Ⓝ",
  },
  {
    id: "tezos",
    name: "Tezos",
    slug: "tezos",
    description:
      "A self-amending blockchain beloved by digital artists. Tezos is known for its environmentally friendly proof-of-stake consensus and thriving generative art scene.",
    website: "https://tezos.com",
    twitter: "https://x.com/taborz",
    accentColor: "#2C7DF7",
    logo: "ꜩ",
  },
  {
    id: "flow",
    name: "Flow",
    slug: "flow",
    description:
      "Built by Dapper Labs (creators of CryptoKitties), Flow is purpose-built for NFTs and digital collectibles. Home to NBA Top Shot and other major entertainment brands.",
    website: "https://flow.com",
    twitter: "https://x.com/flow_blockchain",
    accentColor: "#00EF8B",
    logo: "🌊",
  },
  {
    id: "algorand",
    name: "Algorand",
    slug: "algorand",
    description:
      "A carbon-negative blockchain with instant finality. Algorand supports NFTs as Algorand Standard Assets (ASAs) with built-in royalty enforcement.",
    website: "https://algorand.co",
    twitter: "https://x.com/Algorand",
    accentColor: "#000000",
    logo: "Ⱥ",
  },
  {
    id: "tron",
    name: "Tron",
    slug: "tron",
    description:
      "A high-throughput blockchain focused on decentralized content. Tron supports NFTs through TRC-721 standard with very low transaction costs.",
    website: "https://tron.network",
    twitter: "https://x.com/traborz",
    accentColor: "#FF0013",
    logo: "⟁",
  },
  {
    id: "hedera",
    name: "Hedera",
    slug: "hedera",
    description:
      "An enterprise-grade hashgraph network with predictable fees. Hedera's native token service enables NFT minting without smart contracts.",
    website: "https://hedera.com",
    twitter: "https://x.com/hedera",
    accentColor: "#8259EF",
    logo: "ℏ",
  },
  {
    id: "vechain",
    name: "VeChain",
    slug: "vechain",
    description:
      "An enterprise blockchain focused on supply chain and sustainability. VeChain supports NFTs tied to real-world assets and phygital collectibles.",
    website: "https://vechain.org",
    twitter: "https://x.com/vechainofficial",
    accentColor: "#15BDFF",
    logo: "⌬",
  },
  {
    id: "zilliqa",
    name: "Zilliqa",
    slug: "zilliqa",
    description:
      "A sharded blockchain with smart contract support. Zilliqa has an active NFT community with marketplace infrastructure and gaming projects.",
    website: "https://zilliqa.com",
    twitter: "https://x.com/zilliqa",
    accentColor: "#49C1BF",
    logo: "◇",
  },
  {
    id: "wax",
    name: "WAX",
    slug: "wax",
    description:
      "The Worldwide Asset eXchange, purpose-built for digital collectibles and gaming NFTs. WAX is home to massive trading card and virtual item ecosystems.",
    website: "https://wax.io",
    twitter: "https://x.com/WAX_io",
    accentColor: "#F89022",
    logo: "🌐",
  },
  {
    id: "sui",
    name: "Sui",
    slug: "sui",
    description:
      "A Move-based Layer 1 with object-centric data model. Sui enables dynamic NFTs that can be upgraded and composed, with sub-second finality.",
    website: "https://sui.io",
    twitter: "https://x.com/SuiNetwork",
    accentColor: "#4DA2FF",
    logo: "💧",
  },
  {
    id: "aptos",
    name: "Aptos",
    slug: "aptos",
    description:
      "A Move-based Layer 1 focused on safety and scalability. Aptos supports NFTs through its Digital Asset standard with composability features.",
    website: "https://aptoslabs.com",
    twitter: "https://x.com/Aptos",
    accentColor: "#2DD8A7",
    logo: "🌀",
  },

  // ─── Layer 2 / Rollups ────────────────────────────────
  {
    id: "polygon",
    name: "Polygon",
    slug: "polygon",
    description:
      "Ethereum's leading scaling solution. Polygon offers low-cost NFT minting and trading while inheriting Ethereum's security, hosting major brands like Starbucks and Reddit.",
    website: "https://polygon.technology",
    twitter: "https://x.com/0xPolygon",
    accentColor: "#8247E5",
    logo: "⬡",
  },
  {
    id: "base",
    name: "Base",
    slug: "base",
    description:
      "Coinbase's Layer 2 built on the OP Stack. Base has rapidly become a hub for NFT innovation with Zora, onchain art, and social applications.",
    website: "https://base.org",
    twitter: "https://x.com/base",
    accentColor: "#0052FF",
    logo: "🔵",
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    slug: "arbitrum",
    description:
      "An optimistic rollup on Ethereum with a thriving NFT and gaming ecosystem. Arbitrum hosts Treasure and other major NFT platforms.",
    website: "https://arbitrum.io",
    twitter: "https://x.com/arbitrum",
    accentColor: "#28A0F0",
    logo: "🔷",
  },
  {
    id: "optimism",
    name: "Optimism",
    slug: "optimism",
    description:
      "An optimistic rollup focused on public goods and retroactive funding. Optimism's NFT ecosystem emphasizes community-driven and artistic collections.",
    website: "https://optimism.io",
    twitter: "https://x.com/Optimism",
    accentColor: "#FF0420",
    logo: "🔴",
  },
  {
    id: "blast",
    name: "Blast",
    slug: "blast",
    description:
      "An Ethereum Layer 2 with native yield for ETH and stablecoins. Blast supports NFTs with built-in yield mechanics and a growing DeFi-NFT ecosystem.",
    website: "https://blast.io",
    twitter: "https://x.com/blast",
    accentColor: "#FCFC03",
    logo: "💥",
  },
  {
    id: "mantle",
    name: "Mantle",
    slug: "mantle",
    description:
      "A modular Layer 2 backed by BitDAO with data availability powered by EigenDA. Mantle offers low-cost NFT operations with Ethereum security.",
    website: "https://mantle.xyz",
    twitter: "https://x.com/0xMantle",
    accentColor: "#000000",
    logo: "🏔️",
  },
  {
    id: "linea",
    name: "Linea",
    slug: "linea",
    description:
      "A zkEVM Layer 2 developed by Consensys. Linea combines zero-knowledge proof technology with full EVM compatibility for NFT applications.",
    website: "https://linea.build",
    twitter: "https://x.com/LineaBuild",
    accentColor: "#121212",
    logo: "⟟",
  },
  {
    id: "zksync",
    name: "zkSync Era",
    slug: "zksync-era",
    description:
      "A ZK rollup with native account abstraction. zkSync Era enables gasless NFT minting and trading with Ethereum-level security.",
    website: "https://zksync.io",
    twitter: "https://x.com/zaborync",
    accentColor: "#8C8DFC",
    logo: "⟐",
  },
  {
    id: "immutable",
    name: "Immutable",
    slug: "immutable",
    description:
      "A gaming-focused Layer 2 with zero gas fees for NFT minting and trading. Immutable partners with major game studios for web3 gaming.",
    website: "https://immutable.com",
    twitter: "https://x.com/Immutable",
    accentColor: "#00BFBF",
    logo: "⬢",
  },
  {
    id: "ronin",
    name: "Ronin",
    slug: "ronin",
    description:
      "An EVM-compatible sidechain built for gaming by Sky Mavis. Ronin is home to Axie Infinity and a growing ecosystem of web3 games.",
    website: "https://roninchain.com",
    twitter: "https://x.com/Ronin_Network",
    accentColor: "#1273EA",
    logo: "⚔️",
  },
  {
    id: "shape",
    name: "Shape",
    slug: "shape",
    description:
      "A creator-focused Layer 2 built on the OP Stack. Shape is designed for artists and creators to mint and distribute digital art and collectibles.",
    website: "https://shape.network",
    twitter: "https://x.com/Shape_L2",
    accentColor: "#FF6B6B",
    logo: "🔶",
  },
  {
    id: "abstract",
    name: "Abstract",
    slug: "abstract",
    description:
      "A consumer-focused Layer 2 built on zkSync technology. Abstract aims to bring crypto-powered applications to mainstream users with a focus on culture and creativity.",
    website: "https://abs.xyz",
    twitter: "https://x.com/AbstractChain",
    accentColor: "#00D395",
    logo: "◈",
  },
  {
    id: "apechain",
    name: "ApeChain",
    slug: "apechain",
    description:
      "An Arbitrum Orbit Layer 3 powered by the APE ecosystem. ApeChain is built for the Bored Ape community with native yield and gaming infrastructure.",
    website: "https://apechain.com",
    twitter: "https://x.com/apechain",
    accentColor: "#0054FA",
    logo: "🦍",
  },

  // ─── Cosmos Ecosystem ─────────────────────────────────
  {
    id: "cosmos",
    name: "Cosmos",
    slug: "cosmos",
    description:
      "The Internet of Blockchains. Cosmos enables interoperable sovereign chains connected via IBC, with NFT collections living across the ecosystem.",
    website: "https://cosmos.network",
    twitter: "https://x.com/cosmos",
    accentColor: "#2E3148",
    logo: "⚛️",
  },
  {
    id: "osmosis",
    name: "Osmosis",
    slug: "osmosis",
    description:
      "The largest DEX in the Cosmos ecosystem. Osmosis has expanded into NFTs with cross-chain marketplace integrations via IBC.",
    website: "https://osmosis.zone",
    twitter: "https://x.com/osmaborzone",
    accentColor: "#5E12A0",
    logo: "🧪",
  },
  {
    id: "juno",
    name: "Juno",
    slug: "juno",
    description:
      "A CosmWasm-enabled smart contract platform in the Cosmos ecosystem. Juno supports NFTs through its permissionless smart contract deployment.",
    website: "https://junonetwork.io",
    twitter: "https://x.com/JunoNetwork",
    accentColor: "#F0827D",
    logo: "🪐",
  },
  {
    id: "celestia",
    name: "Celestia",
    slug: "celestia",
    description:
      "A modular data availability layer. Celestia's ecosystem includes NFT collections celebrating the modular blockchain thesis.",
    website: "https://celestia.org",
    twitter: "https://x.com/CelestiaOrg",
    accentColor: "#7B2BF9",
    logo: "⟡",
  },
  {
    id: "injective",
    name: "Injective",
    slug: "injective",
    description:
      "A fast, interoperable Layer 1 optimized for finance. Injective's NFT ecosystem includes unique financial NFTs and art collections.",
    website: "https://injective.com",
    twitter: "https://x.com/injective",
    accentColor: "#00F2FE",
    logo: "🔷",
  },
  {
    id: "sei",
    name: "Sei",
    slug: "sei",
    description:
      "The fastest Layer 1 blockchain, purpose-built for trading. Sei supports NFTs with parallelized transaction processing for high-speed marketplace operations.",
    website: "https://sei.io",
    twitter: "https://x.com/SeiNetwork",
    accentColor: "#9B1C1C",
    logo: "🌊",
  },
  {
    id: "xion",
    name: "XION",
    slug: "xion",
    description:
      "A generalized abstraction layer built on the Cosmos SDK. XION enables gasless, walletless NFT experiences for mainstream consumer adoption.",
    website: "https://xion.burnt.com",
    twitter: "https://x.com/burnt_xion",
    accentColor: "#FF4D00",
    logo: "✦",
  },

  // ─── Other Chains ─────────────────────────────────────
  {
    id: "moonbeam",
    name: "Moonbeam",
    slug: "moonbeam",
    description:
      "A Polkadot parachain with full Ethereum compatibility. Moonbeam enables cross-chain NFT experiences connecting the Polkadot and Ethereum ecosystems.",
    website: "https://moonbeam.network",
    twitter: "https://x.com/MoonbeamNetwork",
    accentColor: "#53CBC9",
    logo: "🌙",
  },
  {
    id: "berachain",
    name: "Berachain",
    slug: "berachain",
    description:
      "An EVM-compatible Layer 1 using Proof of Liquidity consensus. Berachain has a deeply community-driven NFT culture centered around the Bera ecosystem.",
    website: "https://berachain.com",
    twitter: "https://x.com/beaborhain",
    accentColor: "#7C3AED",
    logo: "🐻",
  },
];

/** Lookup blockchain by id */
export function getBlockchainById(id: string): Blockchain | undefined {
  return blockchains.find((b) => b.id === id);
}

/** Lookup blockchain by slug */
export function getBlockchainBySlug(slug: string): Blockchain | undefined {
  return blockchains.find((b) => b.slug === slug);
}

/** Get blockchain by name (fuzzy match for data compatibility) */
export function getBlockchainByName(name: string): Blockchain | undefined {
  const normalized = name.toLowerCase().replace(/\s+/g, "");
  return blockchains.find((b) => {
    const bNorm = b.name.toLowerCase().replace(/\s+/g, "");
    return bNorm === normalized || b.id === normalized;
  });
}

/** Get all blockchain names for filter UI */
export function getAllBlockchainNames(): string[] {
  return blockchains.map((b) => b.name);
}
