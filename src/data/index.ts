// src/data/index.ts

import type { NFT } from "./types";
import { ethereumNFTs } from "./ethereum";
import { polygonNFTs } from "./polygon";
import { arbitrumNFTs } from "./arbitrum";
import { optimismNFTs } from "./optimism";
import { baseNFTs } from "./base";
import { solanaNFTs } from "./solana";
import { bnbNFTs } from "./bnb";
import { avalancheNFTs } from "./avalanche";
import { flowNFTs } from "./flow";
import { tezosNFTs } from "./tezos";
import { nearNFTs } from "./near";
import { cardanoNFTs } from "./cardano";
import { immutableNFTs } from "./immutable";
import { cosmosNFTs } from "./cosmos";
import { bitcoinNFTs } from "./bitcoin";
import { waxNFTs } from "./wax";
import { tonNFTs } from "./ton";
import { injectiveNFTs } from "./injective";
import { seiNFTs } from "./sei";
import { celestiaNFTs } from "./celestia";
import { junoNFTs } from "./juno";
import { osmosisNFTs } from "./osmosis";
import { secretNFTs } from "./secret";
import { moonbeamNFTs } from "./moonbeam";
import { vechainNFTs } from "./vechain";
import { tronNFTs } from "./tron";
import { eosNFTs } from "./eos";
import { hederaNFTs } from "./hedera";
import { zilliqaNFTs } from "./zilliqa";
import { algorandNFTs } from "./algorand";

// New chains added in Phase 1
import { abstractNFTs } from "./abstract";
import { apechainNFTs } from "./apechain";
import { blastNFTs } from "./blast";
import { suiNFTs } from "./sui";
import { aptosNFTs } from "./aptos";
import { berachainNFTs } from "./berachain";
import { mantleNFTs } from "./mantle";
import { roninNFTs } from "./ronin";
import { shapeNFTs } from "./shape";
import { lineaNFTs } from "./linea";
import { zksyncNFTs } from "./zksync";
import { xionNFTs } from "./xion";

export const allNFTs = [
  ...ethereumNFTs,
  ...polygonNFTs,
  ...arbitrumNFTs,
  ...optimismNFTs,
  ...baseNFTs,
  ...solanaNFTs,
  ...bnbNFTs,
  ...avalancheNFTs,
  ...flowNFTs,
  ...tezosNFTs,
  ...nearNFTs,
  ...cardanoNFTs,
  ...immutableNFTs,
  ...cosmosNFTs,
  ...bitcoinNFTs,
  ...waxNFTs,
  ...tonNFTs,
  ...injectiveNFTs,
  ...seiNFTs,
  ...celestiaNFTs,
  ...junoNFTs,
  ...osmosisNFTs,
  ...secretNFTs,
  ...moonbeamNFTs,
  ...vechainNFTs,
  ...tronNFTs,
  ...eosNFTs,
  ...hederaNFTs,
  ...zilliqaNFTs,
  ...algorandNFTs,
  
  ...abstractNFTs,
  ...apechainNFTs,
  ...blastNFTs,
  ...suiNFTs,
  ...aptosNFTs,
  ...berachainNFTs,
  ...mantleNFTs,
  ...roninNFTs,
  ...shapeNFTs,
  ...lineaNFTs,
  ...zksyncNFTs,
  ...xionNFTs,
] as NFT[];