export const chainLogoMap: Record<string, string> = {
  ethereum: "/ethereum.svg",
  abstract: "/abstract.svg",
  algorand: "/algorand.svg",
  apechain: "/apechain.svg",
  aptos: "/aptos.svg",
  arbitrum: "/arbitrum.svg",
  avalanche: "/avalanche.svg",
  base: "/base.svg",
  berachain: "/berachain.svg",
  bitcoin: "/bitcoin.svg",
  blast: "/blast.svg",
  bnb: "/bnb.svg",
  "bnb chain": "/bnb.svg",
  bnbchain: "/bnb.svg",
};

export function getChainLogo(chain: string) {
  const normalized = chain.trim().toLowerCase();
  return (
    chainLogoMap[normalized] ||
    chainLogoMap[normalized.replace(/\s+/g, "")] ||
    chainLogoMap[normalized.replace(/[^a-z0-9]/g, "")]
  );
}
