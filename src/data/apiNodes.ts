import { APINode } from '../types/nodes';

export const apiNodes: APINode[] = [
  // 1. Wallet - DeFi Portfolio
  {
    type: 'apiNode',
    label: 'DeFi Portfolio Balance',
    endpoint: '/api/v2/wallet/balance/defi',
    method: 'GET',
    category: 'Wallet',
    description: 'Get DeFi position balance by wallet',
    params: {
      address: { type: 'array', required: true, description: 'Wallet addresses' },
      blockchain: { type: 'string', default: 'ethereum', description: 'Blockchain filter' },
      time_range: { type: 'string', default: 'all', description: 'Time range filter' },
      offset: { type: 'integer', default: 0, description: 'Page index (≥0)' },
      limit: { type: 'integer', default: 30, description: 'Results per page (1-100)' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Wallet address' },
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimals' },
          quantity: { type: 'integer', description: 'Token balance quantity' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },

  // 2. Wallet - NFT Portfolio
  {
    type: 'apiNode',
    label: 'NFT Portfolio Balance',
    endpoint: '/api/v2/wallet/balance/nft',
    method: 'GET',
    category: 'Wallet',
    description: 'Get NFT balance by wallet',
    params: {
      wallet: { type: 'array', required: true, description: 'Wallet addresses' },
      blockchain: { type: 'string', default: 'ethereum', description: 'Blockchain filter' },
      time_range: { type: 'string', default: 'all', description: 'Time range filter' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_type: { type: 'string', description: 'Contract type (ERC721/ERC1155)' },
          quantity: { type: 'integer', description: 'Token quantity' },
          token_id: { type: 'string', description: 'Token identifier' },
          wallet: { type: 'string', description: 'Wallet address' }
        }
      }
    }
  },

  // 3. Wallet - ERC20 Portfolio
  {
    type: 'apiNode',
    label: 'ERC20 Token Balance',
    endpoint: '/api/x2/wallet/balance/token',
    method: 'GET',
    category: 'Wallet',
    description: 'Get ERC20 token balance by wallet',
    params: {
      address: { type: 'array', required: true, description: 'Wallet addresses' },
      blockchain: { type: 'string', default: 'ethereum', description: 'Blockchain filter' },
      time_range: { type: 'string', default: 'all' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Wallet address' },
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimals' },
          quantity: { type: 'integer', description: 'Token quantity' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },

  // 4. Wallet - Label
  {
    type: 'apiNode',
    label: 'Wallet Labels',
    endpoint: '/api/v2/wallet/label',
    method: 'GET',
    category: 'Wallet',
    description: 'Get labels mapped to addresses',
    params: {
      address: { type: 'array', required: true },
      blockchain: { type: 'array', description: 'Blockchain filter' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Wallet address' },
          arbitrage: { type: 'boolean', description: 'Arbitrage activity flag' },
          at_risk: { type: 'boolean', description: 'Risk status flag' },
          blockchain: { type: 'string', description: 'Blockchain name' },
          bot: { type: 'boolean', description: 'Bot activity flag' },
          bridge: { type: 'boolean', description: 'Bridge usage flag' },
          bridge_name: { type: 'string', description: 'Bridge protocol name' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          cloud_mining: { type: 'boolean', description: 'Cloud mining activity flag' },
          contract: { type: 'boolean', description: 'Contract interaction flag' },
          custodial: { type: 'boolean', description: 'Custodial wallet flag' },
          custodial_name: { type: 'string', description: 'Custodial service name' },
          darknet: { type: 'boolean', description: 'Darknet activity flag' },
          defi: { type: 'boolean', description: 'DeFi activity flag' },
          defi_name: { type: 'string', description: 'DeFi protocol name' },
          defi_trader: { type: 'boolean', description: 'DeFi trading activity flag' },
          deployer: { type: 'boolean', description: 'Contract deployer flag' },
          derivatives: { type: 'boolean', description: 'Derivatives trading flag' },
          derivatives_name: { type: 'string', description: 'Derivatives platform name' },
          dex: { type: 'boolean', description: 'DEX usage flag' },
          dex_aggregator: { type: 'boolean', description: 'DEX aggregator usage flag' },
          dex_aggregator_name: { type: 'string', description: 'DEX aggregator name' },
          dex_name: { type: 'string', description: 'DEX platform name' },
          ens_name: { type: 'string', description: 'ENS domain name' },
          entity_name: { type: 'string', description: 'Entity identifier' },
          exchange: { type: 'boolean', description: 'Exchange activity flag' },
          exchange_name: { type: 'string', description: 'Exchange platform name' },
          exit_scam: { type: 'boolean', description: 'Exit scam flag' },
          exploit: { type: 'boolean', description: 'Exploit activity flag' },
          fake_celebrity_endorsement: { type: 'boolean', description: 'Fake endorsement flag' },
          gambling: { type: 'boolean', description: 'Gambling activity flag' },
          giveaway_scam: { type: 'boolean', description: 'Giveaway scam flag' },
          hack: { type: 'boolean', description: 'Hack activity flag' },
          illicit: { type: 'boolean', description: 'Illicit activity flag' },
          lending: { type: 'boolean', description: 'Lending activity flag' },
          lending_name: { type: 'string', description: 'Lending platform name' },
          liquidation: { type: 'boolean', description: 'Liquidation flag' },
          loan_defaulter: { type: 'boolean', description: 'Loan default flag' },
          marketplace: { type: 'boolean', description: 'Marketplace activity flag' },
          marketplace_name: { type: 'string', description: 'Marketplace name' },
          mev: { type: 'boolean', description: 'MEV activity flag' },
          miner: { type: 'boolean', description: 'Mining activity flag' },
          mixer: { type: 'boolean', description: 'Mixer usage flag' },
          mixer_name: { type: 'string', description: 'Mixer service name' },
          multisig: { type: 'boolean', description: 'Multisig wallet flag' },
          nft_creator: { type: 'boolean', description: 'NFT creator flag' },
          nft_diamond_hand: { type: 'boolean', description: 'NFT long-term holder flag' },
          nft_holder: { type: 'boolean', description: 'NFT holder flag' },
          nft_shark: { type: 'boolean', description: 'NFT shark trader flag' },
          nft_trader: { type: 'boolean', description: 'NFT trader flag' },
          nft_whale: { type: 'boolean', description: 'NFT whale holder flag' },
          ofac_sanction: { type: 'boolean', description: 'OFAC sanction flag' },
          phish: { type: 'boolean', description: 'Phishing activity flag' },
          ponzi: { type: 'boolean', description: 'Ponzi scheme flag' },
          pump_dump: { type: 'boolean', description: 'Pump and dump flag' },
          ransomware: { type: 'boolean', description: 'Ransomware activity flag' },
          risk_category: { type: 'integer', description: 'Risk category level' },
          risk_depth: { type: 'integer', description: 'Risk depth level' },
          rug_pull: { type: 'boolean', description: 'Rug pull flag' },
          sanction_name: { type: 'string', description: 'Sanction list name' },
          scam: { type: 'boolean', description: 'Scam activity flag' },
          spam: { type: 'boolean', description: 'Spam activity flag' },
          staking: { type: 'boolean', description: 'Staking activity flag' },
          suspicious: { type: 'boolean', description: 'Suspicious activity flag' },
          validator: { type: 'boolean', description: 'Validator node flag' },
          yield_protocol: { type: 'boolean', description: 'Yield protocol usage flag' },
          yield_protocol_name: { type: 'string', description: 'Yield protocol name' }
        }
      }
    }
  },

  // 5. DeFi - Pool Metadata
  {
    type: 'apiNode',
    label: 'DeFi Pool Metadata',
    endpoint: '/api/v2/defi/pool/metadata',
    method: 'GET',
    category: 'DeFi',
    description: 'Get DeFi pool metadata',
    params: {
      blockchain: { type: 'array', description: 'Blockchain filter' },
      pair_address: { type: 'array', description: 'Pool addresses' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          deployed_date: { type: 'string', description: 'Contract deployment date' },
          deployer: { type: 'string', description: 'Contract deployer address' },
          pair_address: { type: 'string', description: 'Pool pair address' },
          pool: { type: 'string', description: 'Pool version' },
          protocol: { type: 'string', description: 'Protocol name' },
          token0: { type: 'string', description: 'First token address' },
          token0_decimal: { type: 'integer', description: 'First token decimals' },
          token0_name: { type: 'string', description: 'First token name' },
          token0_symbol: { type: 'string', description: 'First token symbol' },
          token1: { type: 'string', description: 'Second token address' },
          token1_decimal: { type: 'integer', description: 'Second token decimals' },
          token1_name: { type: 'string', description: 'Second token name' },
          token1_symbol: { type: 'string', description: 'Second token symbol' }
        }
      }
    }
  },

  // 6. DeFi - Pool Metrics
  {
    type: 'apiNode',
    label: 'DeFi Pool Metrics',
    endpoint: '/api/v2/defi/pool/metrics',
    method: 'GET',
    category: 'DeFi',
    description: 'Get DEX pool metrics',
    params: {
      blockchain: { type: 'array' },
      pair_address: { type: 'array' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain name' },
          pair_address: { type: 'string', description: 'Pool pair address' },
          protocol: { type: 'string', description: 'Protocol name' },
          token0: { type: 'string', description: 'First token address' },
          token0_price: { type: 'number', description: 'First token price' },
          token0_reserve: { type: 'number', description: 'First token reserve amount' },
          token0_share: { type: 'number', description: 'First token share percentage' },
          token0_tvl: { type: 'number', description: 'First token total value locked' },
          token1: { type: 'string', description: 'Second token address' },
          token1_price: { type: 'number', description: 'Second token price' },
          token1_reserve: { type: 'number', description: 'Second token reserve amount' },
          token1_share: { type: 'number', description: 'Second token share percentage' },
          token1_tvl: { type: 'number', description: 'Second token total value locked' },
          total_tvl: { type: 'number', description: 'Total value locked in pool' },
          transactions_24hrs: { type: 'integer', description: '24-hour transaction count' },
          transactions_24hrs_change: { type: 'number', description: '24-hour transaction change' },
          transactions_30d: { type: 'integer', description: '30-day transaction count' },
          transactions_30d_change: { type: 'number', description: '30-day transaction change' },
          transactions_7d: { type: 'integer', description: '7-day transaction count' },
          transactions_7d_change: { type: 'number', description: '7-day transaction change' },
          transactions_90d: { type: 'integer', description: '90-day transaction count' },
          transactions_90d_change: { type: 'number', description: '90-day transaction change' },
          transactions_all: { type: 'integer', description: 'All-time transaction count' },
          volume_24hrs: { type: 'number', description: '24-hour trading volume' },
          volume_24hrs_change: { type: 'number', description: '24-hour volume change' },
          volume_30d: { type: 'number', description: '30-day trading volume' },
          volume_30d_change: { type: 'number', description: '30-day volume change' },
          volume_7d: { type: 'number', description: '7-day trading volume' },
          volume_7d_change: { type: 'number', description: '7-day volume change' },
          volume_90d: { type: 'number', description: '90-day trading volume' },
          volume_90d_change: { type: 'number', description: '90-day volume change' },
          volume_all: { type: 'number', description: 'All-time trading volume' }
        }
      }
    }
  },

  // 7. DeFi - Protocol Metadata
  {
    type: 'apiNode',
    label: 'DeFi Protocol Metadata',
    endpoint: '/api/x2/defi/pool',
    method: 'GET',
    category: 'DeFi',
    description: 'Get protocol metadata',
    params: {
      blockchain: { type: 'array' },
      protocol: { type: 'array', description: 'Protocol IDs' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          deployed_date: { type: 'string', description: 'Contract deployment date' },
          deployer: { type: 'string', description: 'Contract deployer address' },
          pair_address: { type: 'string', description: 'Pool pair address' },
          pool: { type: 'string', description: 'Pool version' },
          protocol: { type: 'string', description: 'Protocol name' },
          token0: { type: 'string', description: 'First token contract address' },
          token0_decimal: { type: 'integer', description: 'First token decimals' },
          token0_name: { type: 'string', description: 'First token name' },
          token0_symbol: { type: 'string', description: 'First token symbol' },
          token1: { type: 'string', description: 'Second token contract address' },
          token1_decimal: { type: 'integer', description: 'Second token decimals' },
          token1_name: { type: 'string', description: 'Second token name' },
          token1_symbol: { type: 'string', description: 'Second token symbol' }
        }
      }
    }
  },

  // 8. DeFi - Supported Protocols
  {
    type: 'apiNode',
    label: 'DeFi Supported Protocols',
    endpoint: '/api/v2/defi/pool/supported_protocols',
    method: 'GET',
    category: 'DeFi',
    description: 'Get supported DeFi protocols',
    params: {
      blockchain: { type: 'array' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network name' },
          protocol: { type: 'string', description: 'DeFi protocol identifier' }
        }
      }
    }
  },

  // 9. Token - Balance
  {
    type: 'apiNode',
    label: 'Token Balance Details',
    endpoint: '/api/v2/token/balance',
    method: 'GET',
    category: 'Token',
    description: 'Retrieve token balance details',
    params: {
      blockchain: { type: 'array', required: true },
      token_address: { type: 'array', required: true },
      address: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Wallet address' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimals' },
          quantity: { type: 'number', description: 'Token balance amount' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },

  // 10. Token - Metrics
  {
    type: 'apiNode',
    label: 'Token Metrics',
    endpoint: '/api/x2/token/metrics',
    method: 'GET',
    category: 'Token',
    description: 'Retrieve token metrics',
    params: {
      blockchain: { type: 'array' },
      token_address: { type: 'array' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          hr24_high: { type: 'number', description: '24-hour highest price' },
          hr24_high_change: { type: 'number', description: '24-hour price change' },
          hr24_trading_volume: { type: 'number', description: '24-hour trading volume' },
          all_time_high: { type: 'number', description: 'All-time highest price' },
          all_time_low: { type: 'number', description: 'All-time lowest price' },
          all_trading_volume: { type: 'number', description: 'All-time trading volume' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          circulating_supply: { type: 'number', description: 'Current circulating supply' },
          current_price: { type: 'number', description: 'Current token price' },
          fully_diluted_valuation: { type: 'number', description: 'Fully diluted market value' },
          holder_type_score: { type: 'number', description: 'Holder type metric score' },
          holders: { type: 'integer', description: 'Total number of holders' },
          holders_distribution_score: { type: 'number', description: 'Holder distribution metric' },
          lp_participants_score: { type: 'number', description: 'Liquidity provider participation score' },
          lp_size_score: { type: 'number', description: 'Liquidity pool size score' },
          lp_stability_score: { type: 'number', description: 'Liquidity pool stability score' },
          market_cap: { type: 'number', description: 'Current market capitalization' },
          marketcap_lp_score: { type: 'number', description: 'Market cap to LP ratio score' },
          profitable_trade_score: { type: 'number', description: 'Profitable trades metric' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_age_score: { type: 'number', description: 'Token age metric' },
          token_holders_score: { type: 'number', description: 'Token holder metric' },
          token_name: { type: 'string', description: 'Token name' },
          token_pair_score: { type: 'number', description: 'Token trading pair metric' },
          token_score: { type: 'number', description: 'Overall token score' },
          token_symbol: { type: 'string', description: 'Token symbol' },
          total_supply: { type: 'number', description: 'Total token supply' },
          traders_score: { type: 'number', description: 'Trader activity metric' },
          trading_pattern_score: { type: 'number', description: 'Trading pattern analysis score' },
          transactions_score: { type: 'number', description: 'Transaction activity score' },
          volume_liquidity_score: { type: 'number', description: 'Volume to liquidity ratio score' },
          volume_score: { type: 'number', description: 'Trading volume metric' }
        }
      }
    }
  },

  {
    // 11. Token - Holders
    type: 'apiNode',
    label: 'Token Holders',
    endpoint: '/api/v2/token/holders',
    method: 'GET',
    category: 'Token',
    description: 'Retrieve token holders details',
    params: {
      blockchain: { type: 'array', description: 'Blockchain filter' },
      token_address: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Holder wallet address' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimals' },
          quantity: { type: 'number', description: 'Token balance amount' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },
  
  // 12. Token - Transfers
  {
    type: 'apiNode',
    label: 'Token Transfers',
    endpoint: '/api/v2/token/transfers',
    method: 'GET',
    category: 'Token',
    description: 'Get token transfer history',
    params: {
      token_address: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: 'all' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          receiver: { type: 'string', description: 'Receiving wallet address' },
          sender: { type: 'string', description: 'Sending wallet address' },
          timestamp: { type: 'string', description: 'Transaction timestamp' },
          token_address: { type: 'string', description: 'Token contract address' },
          transaction_hash: { type: 'string', description: 'Transaction hash' },
          value_native: { type: 'number', description: 'Transfer amount in native token' },
          value_usd: { type: 'number', description: 'Transfer amount in USD' }
        }
      }
    }
  },
  
  // 13. Token - Price Prediction
  {
    type: 'apiNode',
    label: 'Token Price Prediction',
    endpoint: '/api/v2/token/price_prediction',
    method: 'GET',
    category: 'Token',
    description: 'Get token price prediction',
    params: {
      token_address: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_date: { type: 'string', description: 'Prediction timestamp' },
          data_type: { type: 'string', description: 'Type of data' },
          open: { type: 'number', description: 'Opening price' },
          prediction: { type: 'number', description: 'Predicted price value' },
          prediction_lb: { type: 'number', description: 'Lower bound of prediction' },
          prediction_ub: { type: 'number', description: 'Upper bound of prediction' },
          token: { type: 'string', description: 'Token name' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },
  
  // 14. NFT Brand - Metadata
  {
    type: 'apiNode',
    label: 'NFT Brand Metadata',
    endpoint: '/api/v2/nft/brand/metadata',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Retrieve brand identity and visuals',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      brand: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'Brand category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_type: { type: 'string', description: 'Contract standard type' },
          contracts: { type: 'array', description: 'List of associated contracts' }
        }
      }
    }
  },
  
  // 15. NFT Brand - Metrics
  {
    type: 'apiNode',
    label: 'NFT Brand Metrics',
    endpoint: '/api/x2/nft/brand/metrics',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Performance and trading metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      brand: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'mint_tokens' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          No_of_contracts: { type: 'string', description: 'Number of contracts' },
          assets_all: { type: 'string', description: 'Total assets' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name' },
          contracts: { type: 'string', description: 'Contract address' },
          growth_rate: { type: 'number', description: 'Growth rate' },
          holders: { type: 'string', description: 'Number of holders' },
          interactions: { type: 'string', description: 'Number of interactions' },
          marketplace_volume: { type: 'array', description: 'Volume by marketplace' },
          mcap: { type: 'number', description: 'Market capitalization' },
          mint_revenue: { type: 'number', description: 'Revenue from minting' },
          mint_tokens: { type: 'string', description: 'Number of minted tokens' },
          primary_sale_revenue: { type: 'number', description: 'Primary sale revenue' },
          retained_traders: { type: 'string', description: 'Number of retained traders' },
          royalty_revenue: { type: 'number', description: 'Revenue from royalties' },
          secondary_sale_revenue: { type: 'number', description: 'Secondary sale revenue' },
          total_revenue: { type: 'number', description: 'Total revenue' },
          total_volume: { type: 'number', description: 'Total trading volume' },
          traders: { type: 'string', description: 'Number of traders' }
        }
      }
    }
  },
  
  // 16. NFT Brand - Profile
  {
    type: 'apiNode',
    label: 'NFT Brand Profile',
    endpoint: '/api/v2/nft/brand/profile',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Trading insights and token scores',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      brand: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'diamond_hands' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'NFT category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          diamond_hands: { type: 'string', description: 'Long-term holder count' },
          loss_making_trades: { type: 'string', description: 'Number of trades at loss' },
          loss_making_volume: { type: 'number', description: 'Volume of loss-making trades' },
          profitable_trades: { type: 'string', description: 'Number of profitable trades' },
          profitable_volume: { type: 'number', description: 'Volume of profitable trades' },
          token_score: { type: 'number', description: 'Token performance score' }
        }
      }
    }
  },
  
  // 17. NFT Brand - Contract Metadata
  {
    type: 'apiNode',
    label: 'NFT Contract Metadata',
    endpoint: '/api/x2/nft/brand/contract_metadata',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Brand contract details',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'Brand category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_type: { type: 'string', description: 'Contract standard type' },
          contracts: { type: 'array', description: 'List of associated contracts' },
          description: { type: 'string', description: 'Detailed collection description' },
          discord_url: { type: 'string', description: 'Discord community URL' },
          instagram_url: { type: 'string', description: 'Instagram profile URL' },
          medium_url: { type: 'string', description: 'Medium blog URL' },
          telegram_url: { type: 'string', description: 'Telegram channel URL' },
          thumbnail_palette: { type: 'string', description: 'Thumbnail color palette' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          twitter_url: { type: 'string', description: 'Twitter profile URL' }
        }
      }
    }
  },
  
  // 18. NFT Brand - Contract Metrics
  {
    type: 'apiNode',
    label: 'NFT Contract Metrics',
    endpoint: '/api/x2/nft/brand/contract_metrics',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Marketplace volumes and revenue',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'mint_tokens' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          No_of_contracts: { type: 'string', description: 'Number of contracts' },
          assets_all: { type: 'string', description: 'Total assets' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name' },
          contract_address: { type: 'string', description: 'Contract address' },
          contracts: { type: 'string', description: 'Contract identifier' },
          growth_rate: { type: 'number', description: 'Growth rate' },
          holders: { type: 'string', description: 'Number of holders' },
          interactions: { type: 'string', description: 'Number of interactions' },
          marketplace_volume: { type: 'array', description: 'Volume by marketplace' },
          mcap: { type: 'number', description: 'Market capitalization' },
          mint_revenue: { type: 'number', description: 'Revenue from minting' },
          mint_tokens: { type: 'string', description: 'Number of minted tokens' },
          primary_sale_revenue: { type: 'number', description: 'Primary sale revenue' },
          retained_traders: { type: 'string', description: 'Number of retained traders' },
          royalty_revenue: { type: 'number', description: 'Revenue from royalties' },
          secondary_sale_revenue: { type: 'number', description: 'Secondary sale revenue' },
          total_revenue: { type: 'number', description: 'Total revenue' },
          total_volume: { type: 'number', description: 'Total trading volume' },
          traders: { type: 'string', description: 'Number of traders' }
        }
      }
    }
  },
  
  // 19. NFT Brand - Category
  {
    type: 'apiNode',
    label: 'NFT Brand Category',
    endpoint: '/api/x2/nft/brand/category',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Category information',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      category: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'Brand category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_type: { type: 'string', description: 'Contract standard type' },
          contracts: { type: 'array', description: 'List of associated contracts' },
          description: { type: 'string', description: 'Collection description' },
          discord_url: { type: 'string', description: 'Discord community URL' },
          instagram_url: { type: 'string', description: 'Instagram profile URL' },
          medium_url: { type: 'string', description: 'Medium blog URL' },
          telegram_url: { type: 'string', description: 'Telegram channel URL' },
          thumbnail_palette: { type: 'string', description: 'Thumbnail color palette' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          twitter_url: { type: 'string', description: 'Twitter profile URL' }
        }
      }
    }
  },
  
  // 20. NFT Brand - Contract Profile
  {
    type: 'apiNode',
    label: 'NFT Contract Profile',
    endpoint: '/api/x2/nft/brand/contract_profile',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Contract engagement metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'diamond_hands' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'NFT category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          diamond_hands: { type: 'string', description: 'Long-term holder count' },
          loss_making_trades: { type: 'string', description: 'Number of trades at loss' },
          loss_making_volume: { type: 'number', description: 'Volume of loss-making trades' },
          profitable_trades: { type: 'string', description: 'Number of profitable trades' },
          profitable_volume: { type: 'number', description: 'Volume of profitable trades' },
          token_score: { type: 'number', description: 'Token performance score' }
        }
      }
    }
  },

  {
    // 21. NFT Price - Token Estimate
    type: 'apiNode',
    label: 'NFT Token Price Estimate',
    endpoint: '/api/x2/nft/liquify/price_estimate',
    method: 'GET',
    category: 'NFT Price',
    description: 'Predicted price for specific NFT',
    params: {
      blockchain: { type: 'string', required: true },
      contract_address: { type: 'string', required: true },
      token_id: { type: 'string', required: true }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Contract address' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection_drivers: { type: 'string', description: 'Collection-level price drivers' },
          collection_name: { type: 'string', description: 'Collection name' },
          nft_rarity_drivers: { type: 'string', description: 'Rarity-based price drivers' },
          nft_sales_drivers: { type: 'string', description: 'Sales-based price drivers' },
          prediction_percentile: { type: 'string', description: 'Price prediction confidence' },
          price_estimate: { type: 'number', description: 'Estimated NFT price' },
          price_estimate_lower_bound: { type: 'number', description: 'Lower price estimate' },
          price_estimate_upper_bound: { type: 'number', description: 'Upper price estimate' },
          thumbnail_palette: { type: 'string', description: 'Color palette of thumbnail' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          token_id: { type: 'string', description: 'NFT token identifier' },
          token_image_url: { type: 'string', description: 'Full NFT image URL' }
        }
      }
    }
  },
  
  // 22. NFT Price - Collection Estimate
  {
    type: 'apiNode',
    label: 'NFT Collection Price Estimate',
    endpoint: '/api/x2/nft/liquify/collection/price_estimate',
    method: 'GET',
    category: 'NFT Price',
    description: 'Price predictions for collection',
    params: {
      blockchain: { type: 'string', required: true },
      contract_address: { type: 'string', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Contract address' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection_drivers: { type: 'string', description: 'Collection-level price drivers' },
          collection_name: { type: 'string', description: 'Collection name' },
          nft_rarity_drivers: { type: 'string', description: 'Rarity-based price drivers' },
          nft_sales_drivers: { type: 'string', description: 'Sales-based price drivers' },
          prediction_percentile: { type: 'string', description: 'Price prediction confidence' },
          price_estimate: { type: 'number', description: 'Estimated NFT price' },
          price_estimate_lower_bound: { type: 'number', description: 'Lower price estimate' },
          price_estimate_upper_bound: { type: 'number', description: 'Upper price estimate' },
          thumbnail_palette: { type: 'string', description: 'Color palette of thumbnail' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          token_id: { type: 'string', description: 'NFT token identifier' },
          token_image_url: { type: 'string', description: 'Full NFT image URL' }
        }
      }
    }
  },
  
  // 23. NFT Price - Supported Collections
  {
    type: 'apiNode',
    label: 'Supported Prediction Collections',
    endpoint: '/api/v2/nft/liquify/collection/supported_collections',
    method: 'GET',
    category: 'NFT Price',
    description: 'Collections supported by AI model',
    params: {
      blockchain: { type: 'string', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          address: { type: 'string', description: 'Contract address' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection_name: { type: 'string', description: 'Collection name' },
          thumbnail_palette: { type: 'string', description: 'Color palette of thumbnail' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          token_image_url: { type: 'string', description: 'Full NFT image URL' }
        }
      }
    }
  },
  
  // 24. Transactions - NFT Transactions
  {
    type: 'apiNode',
    label: 'NFT Transaction History',
    endpoint: '/api/v2/nft/transactions',
    method: 'GET',
    category: 'Transactions',
    description: 'Paginated NFT transaction list',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' },
      contract_address: { type: 'array' },
      token_id: { type: 'array' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_date: { type: 'string', description: 'Transaction block date' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'NFT collection name' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation date' },
          contract_type: { type: 'string', description: 'NFT contract standard' },
          hash: { type: 'string', description: 'Transaction hash' },
          is_washtrade: { type: 'string', description: 'Wash trading flag' },
          marketplace: { type: 'string', description: 'Trading platform name' },
          receiving_address: { type: 'string', description: 'Recipient address' },
          sale_price_usd: { type: 'number', description: 'Sale price in USD' },
          sending_address: { type: 'string', description: 'Sender address' },
          timestamp: { type: 'string', description: 'Transaction timestamp' },
          token_id: { type: 'string', description: 'NFT token identifier' },
          transaction_type: { type: 'string', description: 'Type of transaction' }
        }
      }
    }
  },
  
  // 25. Gaming - Wallet Metrics
  {
    type: 'apiNode',
    label: 'Wallet Gaming Metrics',
    endpoint: '/api/v2/wallet/gaming/metrics',
    method: 'GET',
    category: 'Gaming',
    description: 'Gaming metrics for NFT contract',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'total_users' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          active_users: { type: 'string', description: 'Number of active users' },
          active_users_change: { type: 'string', description: 'Change in active users' },
          avg_earnings: { type: 'number', description: 'Average earnings per user' },
          avg_game_action: { type: 'string', description: 'Average actions per user' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          bot_count: { type: 'string', description: 'Number of bot accounts' },
          bot_native_price: { type: 'number', description: 'Native token price for bots' },
          bot_volume: { type: 'number', description: 'Trading volume from bots' },
          category: { type: 'string', description: 'NFT category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          churn_rate: { type: 'string', description: 'User churn rate' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation date' },
          engagement_rate: { type: 'string', description: 'User engagement rate' },
          game: { type: 'string', description: 'Game name' },
          game_activity: { type: 'string', description: 'Game activity level' },
          game_interactions: { type: 'string', description: 'Number of game interactions' },
          game_interactions_change: { type: 'string', description: 'Change in game interactions' },
          game_revenue: { type: 'number', description: 'Revenue from game' },
          interaction_rate: { type: 'string', description: 'User interaction rate' },
          interaction_rate_change: { type: 'string', description: 'Change in interaction rate' },
          name: { type: 'string', description: 'Collection name' },
          nft_count: { type: 'string', description: 'Total NFTs in collection' },
          overall_transactions: { type: 'string', description: 'Total transaction count' },
          retained_players: { type: 'string', description: 'Number of retained players' },
          retained_players_percentage: { type: 'string', description: 'Percentage of retained players' },
          retention_rate: { type: 'string', description: 'Player retention rate' },
          retention_rate_change: { type: 'string', description: 'Change in retention rate' },
          smart_contract_interactions: { type: 'string', description: 'Smart contract interaction count' },
          smart_contract_interactions_change: { type: 'string', description: 'Change in contract interactions' },
          thumbnail_palette: { type: 'string', description: 'Color palette of thumbnail' },
          thumbnail_url: { type: 'string', description: 'Thumbnail image URL' },
          total_interaction: { type: 'string', description: 'Total user interactions' },
          total_interaction_change: { type: 'string', description: 'Change in total interactions' },
          total_interactions_volume: { type: 'number', description: 'Volume of interactions' },
          total_interactions_volume_change: { type: 'number', description: 'Change in interaction volume' },
          total_marketcap: { type: 'number', description: 'Total market capitalization' },
          total_marketcap_change: { type: 'number', description: 'Change in market cap' },
          total_transaction: { type: 'string', description: 'Total transaction count' },
          total_transaction_change: { type: 'string', description: 'Change in transaction count' },
          total_users: { type: 'string', description: 'Total number of users' },
          total_users_change: { type: 'string', description: 'Change in total users' },
          transactions_excluding_bots: { type: 'string', description: 'Transactions without bots' },
          transactions_including_bots: { type: 'string', description: 'Transactions including bots' },
          trending_players: { type: 'string', description: 'List of trending players' },
          unique_wallets: { type: 'string', description: 'Number of unique wallets' },
          unique_wallets_change: { type: 'string', description: 'Change in unique wallets' },
          verified: { type: 'string', description: 'Verification status' }
        }
      }
    }
  },
  
  // 26. Gaming - Collection Metrics
  {
    type: 'apiNode',
    label: 'Gaming Collection Metrics',
    endpoint: '/api/v2/nft/wallet/gaming/collection/metrics',
    method: 'GET',
    category: 'Gaming',
    description: 'Performance metrics for gaming NFTs',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'total_users' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          active_users: { type: 'integer', description: 'Number of active users' },
          active_users_change: { type: 'number', description: 'Change in active users' },
          avg_earnings: { type: 'number', description: 'Average earnings per user' },
          avg_game_action: { type: 'number', description: 'Average actions per game session' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          bot_count: { type: 'integer', description: 'Number of bot accounts detected' },
          bot_native_price: { type: 'number', description: 'Native token price for bots' },
          bot_volume: { type: 'number', description: 'Trading volume from bots' },
          category: { type: 'string', description: 'Game category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Smart contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation date' },
          game: { type: 'string', description: 'Game name' },
          game_activity: { type: 'number', description: 'Game activity level' },
          game_interactions: { type: 'integer', description: 'Number of game interactions' },
          game_interactions_change: { type: 'number', description: 'Change in game interactions' },
          game_revenue: { type: 'number', description: 'Revenue generated from game' },
          interaction_rate: { type: 'number', description: 'Rate of user interactions' },
          interaction_rate_change: { type: 'number', description: 'Change in interaction rate' },
          name: { type: 'string', description: 'Game display name' },
          nft_count: { type: 'integer', description: 'Number of NFTs' },
          retention_rate: { type: 'number', description: 'User retention rate' },
          retention_rate_change: { type: 'number', description: 'Change in retention rate' },
          smart_contract_interactions: { type: 'integer', description: 'Contract interaction count' },
          smart_contract_interactions_change: { type: 'number', description: 'Change in contract interactions' },
          thumbnail_palette: { type: 'string', description: 'Color palette for thumbnail' },
          thumbnail_url: { type: 'string', description: 'URL of thumbnail image' },
          total_interaction: { type: 'integer', description: 'Total number of interactions' },
          total_interaction_change: { type: 'number', description: 'Change in total interactions' },
          total_interactions_volume: { type: 'number', description: 'Volume of interactions' },
          total_interactions_volume_change: { type: 'number', description: 'Change in interaction volume' },
          total_marketcap: { type: 'number', description: 'Total market capitalization' },
          total_marketcap_change: { type: 'number', description: 'Change in market cap' },
          total_transaction: { type: 'integer', description: 'Total number of transactions' },
          total_transaction_change: { type: 'number', description: 'Change in total transactions' },
          total_users: { type: 'integer', description: 'Total number of users' },
          total_users_change: { type: 'number', description: 'Change in total users' },
          unique_wallets: { type: 'integer', description: 'Number of unique wallets' },
          unique_wallets_change: { type: 'number', description: 'Change in unique wallets' },
          verified: { type: 'string', description: 'Verification status' }
        }
      }
    }
  },
  
  // 27. Gaming - Collection Trends
  {
    type: 'apiNode',
    label: 'Gaming Collection Trends',
    endpoint: '/api/v2/nft/wallet/gaming/collection/trend',
    method: 'GET',
    category: 'Gaming',
    description: 'Sales and user activity trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'active_users' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          active_users: { type: 'array', items: { type: 'string' }, description: 'Hourly active user counts' },
          active_users_change: { type: 'array', items: { type: 'string' }, description: 'Changes in active users' },
          avg_earnings: { type: 'array', items: { type: 'string' }, description: 'Average earnings per hour' },
          avg_game_action: { type: 'array', items: { type: 'string' }, description: 'Average actions per user per hour' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          game: { type: 'string', description: 'Game name' },
          game_activity: { type: 'array', items: { type: 'string' }, description: 'Hourly game activity counts' },
          game_interactions: { type: 'array', items: { type: 'string' }, description: 'Hourly interaction counts' },
          game_interactions_change: { type: 'array', items: { type: 'string' }, description: 'Changes in interactions' },
          game_revenue: { type: 'array', items: { type: 'string' }, description: 'Hourly revenue' },
          maxdate: { type: 'string', description: 'Hourly timestamps' }
        }
      }
    }
  },
  
  // 28. NFT Core - Traders
  {
    type: 'apiNode',
    label: 'NFT Trader Metrics',
    endpoint: '/api/v2/nft/traders',
    method: 'GET',
    category: 'NFT',
    description: 'Trader engagement metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      token_id: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'traders' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          token_id: { type: 'string', description: 'Token identifier' },
          traders: { type: 'integer', description: 'Total number of traders' },
          traders_buyers: { type: 'integer', description: 'Number of buyers' },
          traders_buyers_change: { type: 'number', description: 'Change in number of buyers' },
          traders_change: { type: 'number', description: 'Change in total traders' },
          traders_sellers: { type: 'integer', description: 'Number of sellers' }, 
          traders_sellers_change: { type: 'number', description: 'Change in number of sellers' },
          updated_at: { type: 'string', description: 'Last update timestamp' }
        }
      }
    }
  },
  
  // 29. NFT Core - Analytics
  {
    type: 'apiNode',
    label: 'NFT Performance Analytics',
    endpoint: '/api/v2/nft/analytics',
    method: 'GET',
    category: 'NFT',
    description: 'Market dynamics analysis',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      token_id: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'sales' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          assets: { type: 'integer', description: 'Number of assets' },
          assets_change: { type: 'number', description: 'Change in number of assets' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation date' },
          sales: { type: 'integer', description: 'Number of sales' },
          sales_change: { type: 'number', description: 'Change in number of sales' },
          token_id: { type: 'string', description: 'Token identifier' },
          transactions: { type: 'integer', description: 'Number of transactions' },
          transactions_change: { type: 'number', description: 'Change in transaction count' },
          transfers: { type: 'integer', description: 'Number of transfers' },
          transfers_change: { type: 'number', description: 'Change in transfer count' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          volume: { type: 'number', description: 'Trading volume' },
          volume_change: { type: 'number', description: 'Change in trading volume' }
        }
      }
    }
  },
  
  // 30. NFT Core - Washtrade
  {
    type: 'apiNode',
    label: 'NFT Wash Trading',
    endpoint: '/api/v2/nft/washtrade',
    method: 'GET',
    category: 'NFT',
    description: 'Market manipulation insights',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      token_id: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'washtrade_volume' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          token_id: { type: 'string', description: 'Token identifier' },
          washtrade_assets: { type: 'string', description: 'Number of wash traded assets' },
          washtrade_assets_change: { type: 'number', description: 'Change in wash traded assets' },
          washtrade_suspect_sales: { type: 'string', description: 'Number of suspicious sales' },
          washtrade_suspect_sales_change: { type: 'number', description: 'Change in suspicious sales' },
          washtrade_suspect_transactions: { type: 'string', description: 'Number of suspicious transactions' },
          washtrade_suspect_transactions_change: { type: 'number', description: 'Change in suspicious transactions' },
          washtrade_volume: { type: 'number', description: 'Volume of wash trades' },
          washtrade_volume_change: { type: 'number', description: 'Change in wash trade volume' },
          washtrade_wallets: { type: 'string', description: 'Number of wallets involved in wash trading' },
          washtrade_wallets_change: { type: 'number', description: 'Change in number of wash trading wallets' }
        }
      }
    }
  },

  {
    // 31. NFT Core - Holders
    type: 'apiNode',
    label: 'NFT Holder Metrics',
    endpoint: '/api/v2/nft/holders',
    method: 'GET',
    category: 'NFT',
    description: 'Ownership distribution analysis',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      token_id: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'past_owners_count' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          hold_duration: { type: 'string', description: 'Duration NFT has been held' },
          holders: { type: 'string', description: 'Current number of holders' },
          holders_change: { type: 'number', description: 'Change in number of holders' },
          past_owners_count: { type: 'string', description: 'Total number of past owners' },
          token_id: { type: 'string', description: 'Token identifier' },
          wallet_holder_new: { 
            type: 'array', 
            items: { type: 'string' },
            description: 'New wallet addresses holding the NFT'
          }
        }
      }
    }
  },
  
  // 32. NFT Core - Scores
  {
    type: 'apiNode',
    label: 'NFT Performance Scores',
    endpoint: '/api/v2/nft/scores',
    method: 'GET',
    category: 'NFT',
    description: 'Rarity and trending scores',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      token_id: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'price_ceiling' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          all_time_low: { type: 'number', description: 'Lowest historical price' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          estimated_price: { type: 'number', description: 'Estimated NFT price' },
          max_price: { type: 'number', description: 'Maximum historical price' },
          price: { type: 'number', description: 'Current price' },
          price_ceiling: { type: 'number', description: 'Price ceiling' },
          rarity_rank: { type: 'integer', description: 'Rarity ranking' },
          rarity_score: { type: 'integer', description: 'Rarity score' },
          start_price: { type: 'number', description: 'Initial listing price' },
          token_id: { type: 'string', description: 'Token identifier' },
          washtrade_status: { type: 'string', description: 'Wash trading flag status' }
        }
      }
    }
  },
  
  // 33. NFT Core - Top Deals
  {
    type: 'apiNode',
    label: 'NFT Top Deals',
    endpoint: '/api/v2/nft/top_deals',
    method: 'GET',
    category: 'NFT',
    description: 'Deals sorted by score',
    params: {
      sort_by: { type: 'string', default: 'deal_score' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          chain_id: { type: 'string', description: 'Chain identifier' },
          closing_timestamp: { type: 'string', description: 'Deal closing time' },
          collection_name: { type: 'string', description: 'NFT collection name' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          deal_score: { type: 'number', description: 'Deal attractiveness score' },
          estimated_eth_price: { type: 'number', description: 'Estimated price in ETH' },
          listed_eth_price: { type: 'number', description: 'Current listing price in ETH' },
          listing_timestamp: { type: 'string', description: 'When NFT was listed' },
          marketplace: { type: 'string', description: 'NFT marketplace platform' },
          thumbnail_palette: { type: 'string', description: 'Color palette for thumbnail' },
          thumbnail_url: { type: 'string', description: 'URL of NFT thumbnail image' },
          token_id: { type: 'string', description: 'Token identifier' }
        }
      }
    }
  },
  
  // 34. NFT Wallets - Analytics
  {
    type: 'apiNode',
    label: 'Wallet Analytics',
    endpoint: '/api/v2/nft/wallet/analytics',
    method: 'GET',
    category: 'NFT Wallets',
    description: 'Sales and transaction trends',
    params: {
      wallet: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'volume' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          buy_volume: { type: 'number', description: 'Volume of NFT purchases' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          minted_value: { type: 'number', description: 'Value of minted NFTs' },
          minted_value_change: { type: 'number', description: 'Change in minted value' },
          nft_bought: { type: 'integer', description: 'Number of NFTs bought' },
          nft_bought_change: { type: 'number', description: 'Change in NFTs bought' },
          nft_burn: { type: 'integer', description: 'Number of NFTs burned' },
          nft_burn_change: { type: 'number', description: 'Change in NFTs burned' },
          nft_mint: { type: 'integer', description: 'Number of NFTs minted' },
          nft_mint_change: { type: 'number', description: 'Change in NFTs minted' },
          nft_sold: { type: 'integer', description: 'Number of NFTs sold' },
          nft_sold_change: { type: 'number', description: 'Change in NFTs sold' },
          nft_transfer: { type: 'integer', description: 'Number of NFT transfers' },
          nft_transfer_change: { type: 'number', description: 'Change in NFT transfers' },
          sales: { type: 'integer', description: 'Total number of sales' },
          sales_change: { type: 'number', description: 'Change in total sales' },
          sell_volume: { type: 'number', description: 'Volume of NFT sales' },
          transactions: { type: 'integer', description: 'Total number of transactions' },
          transactions_change: { type: 'number', description: 'Change in total transactions' },
          transfers: { type: 'integer', description: 'Total number of transfers' },
          transfers_change: { type: 'number', description: 'Change in total transfers' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          volume: { type: 'number', description: 'Total transaction volume' },
          volume_change: { type: 'number', description: 'Change in total volume' },
          wallet: { type: 'string', description: 'Wallet address' }
        }
      }
    }
  },
  
  // 35. NFT Wallets - Scores
  {
    type: 'apiNode',
    label: 'Wallet Performance Scores',
    endpoint: '/api/v2/nft/wallet/scores',
    method: 'GET',
    category: 'NFT Wallets',
    description: 'Portfolio value trends',
    params: {
      wallet: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      sort_by: { type: 'string', default: 'portfolio_value' },
      sort_order: { type: 'string', default: 'desc' },
      time_range: { type: 'string', default: '24h' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection_count: { type: 'string', description: 'Number of NFT collections held' },
          estimated_portfolio_value: { type: 'number', description: 'Estimated total portfolio value' },
          nft_count: { type: 'string', description: 'Total number of NFTs held' },
          pnl: { type: 'string', description: 'Profit and loss value' },
          portfolio_value: { type: 'number', description: 'Current portfolio value' },
          realized_profit: { type: 'number', description: 'Actualized trading profits' },
          unrealized_profit: { type: 'number', description: 'Potential profits not yet realized' },
          wallet: { type: 'string', description: 'Wallet address' },
          washtrade_nft_count: { type: 'string', description: 'Number of NFTs flagged for wash trading' }
        }
      }
    }
  },
  
  // 36. NFT Wallets - Traders
  {
    type: 'apiNode',
    label: 'Wallet Trader Activity',
    endpoint: '/api/v2/nft/wallet/traders',
    method: 'GET',
    category: 'NFT Wallets',
    description: 'Buyer/seller ratios',
    params: {
      wallet: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'traders' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          traders: { type: 'integer', description: 'Total number of traders' },
          traders_buyers: { type: 'integer', description: 'Number of buyers' },
          traders_buyers_change: { type: 'number', description: 'Change in number of buyers' },
          traders_change: { type: 'number', description: 'Change in total traders' },
          traders_sellers: { type: 'integer', description: 'Number of sellers' },
          traders_sellers_change: { type: 'number', description: 'Change in number of sellers' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          wallet: { type: 'string', description: 'Wallet address' }
        }
      }
    }
  },
  
  // 37. NFT Wallets - Washtrade
  {
    type: 'apiNode',
    label: 'Wallet Wash Trading',
    endpoint: '/api/v2/nft/wallet/washtrade',
    method: 'GET',
    category: 'NFT Wallets',
    description: 'Flagged transactions',
    params: {
      wallet: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      sort_by: { type: 'string', default: 'washtrade_volume' },
      sort_order: { type: 'string', default: 'desc' },
      time_range: { type: 'string', default: '24h' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          wallet: { type: 'string', description: 'Wallet address' },
          washtrade_suspect_sales: { type: 'string', description: 'Number of suspicious sales' },
          washtrade_suspect_sales_change: { type: 'number', description: 'Change in suspicious sales' },
          washtrade_volume: { type: 'number', description: 'Volume of wash trades' },
          washtrade_volume_change: { type: 'number', description: 'Change in wash trade volume' }
        }
      }
    }
  },
  
  // 38. NFT Wallets - Profile
  {
    type: 'apiNode',
    label: 'Wallet Profile',
    endpoint: '/api/v2/nft/wallet/profile',
    method: 'GET',
    category: 'NFT Wallets',
    description: 'NFT holdings overview',
    params: {
      wallet: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          aml_association_level: { type: 'string', description: 'AML association level' },
          aml_hierarchy_link: { type: 'string', description: 'AML hierarchy relationship' },
          aml_is_sanctioned: { type: 'boolean', description: 'Whether wallet is sanctioned' },
          aml_risk_association_type: { type: 'string', description: 'Type of risk association' },
          aml_risk_inbound_volume: { type: 'number', description: 'Incoming risk volume' },
          aml_risk_level: { type: 'string', description: 'Risk level classification' },
          aml_risk_outbound_volume: { type: 'number', description: 'Outgoing risk volume' },
          aml_total_inbound_volume: { type: 'number', description: 'Total incoming volume' },
          aml_total_outbound_volume: { type: 'number', description: 'Total outgoing volume' },
          collection_count: { type: 'integer', description: 'Number of NFT collections' },
          contract_creator: { type: 'string', description: 'Contract creator address' },
          is_contract: { type: 'boolean', description: 'Whether address is a contract' },
          is_custodial: { type: 'boolean', description: 'Whether wallet is custodial' },
          is_shark: { type: 'boolean', description: 'Whether classified as shark trader' },
          is_whale: { type: 'boolean', description: 'Whether classified as whale trader' },
          nft_count: { type: 'integer', description: 'Total number of NFTs' },
          nft_marketplace_reward: { type: 'object', description: 'Marketplace rewards data' },
          wallet: { type: 'string', description: 'Wallet address' },
          washtrade_nft_count: { type: 'integer', description: 'Number of wash traded NFTs' }
        }
      }
    }
  },
  
  // 39. NFT Collections - Metadata
  {
    type: 'apiNode',
    label: 'Collection Metadata',
    endpoint: '/api/v2/nft/collection/metadata',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Collection attributes',
    params: {
      contract_address: { type: 'array', required: true },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          banner_image_url: { type: 'string', description: 'URL of collection banner image' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          brand: { type: 'string', description: 'Brand name associated with collection' },
          category: { type: 'string', description: 'Collection category' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          close_colours: { type: 'string', description: 'Color palette used in collection' },
          collection: { type: 'string', description: 'Collection name' },
          collection_id: { type: 'string', description: 'Unique collection identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation timestamp' },
          contract_type: { type: 'string', description: 'Type of NFT contract' },
          description: { type: 'string', description: 'Collection description' },
          discord_url: { type: 'string', description: 'Discord community URL' },
          external_url: { type: 'string', description: 'External website URL' },
          image_url: { type: 'string', description: 'Collection thumbnail image URL' },
          instagram_url: { type: 'string', description: 'Instagram profile URL' },
          marketplace_url: { type: 'string', description: 'NFT marketplace listing URL' },
          medium_url: { type: 'string', description: 'Medium blog URL' },
          telegram_url: { type: 'string', description: 'Telegram channel URL' },
          twitter_url: { type: 'string', description: 'Twitter profile URL' }
        }
      }
    }
  },
  
  // 40. NFT Collections - Analytics
  {
    type: 'apiNode',
    label: 'Collection Analytics',
    endpoint: '/api/v2/nft/collection/analytics',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Sales volume trends',
    params: {
      contract_address: { type: 'array', required: true },
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'sales' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          contract_created_date: { type: 'string', description: 'Contract creation timestamp' },
          sales: { type: 'integer', description: 'Total number of sales' },
          sales_change: { type: 'number', description: 'Change in sales' },
          sales_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly sales data' },
          transactions: { type: 'integer', description: 'Total number of transactions' },
          transactions_change: { type: 'number', description: 'Change in transactions' }, 
          transactions_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly transaction data' },
          transfers: { type: 'integer', description: 'Total number of transfers' },
          transfers_change: { type: 'number', description: 'Change in transfers' },
          transfers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly transfer data' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          volume: { type: 'number', description: 'Total trading volume' },
          volume_change: { type: 'number', description: 'Change in volume' },
          volume_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly volume data' },
          assets: { type: 'integer', description: 'Total number of assets' },
          assets_change: { type: 'number', description: 'Change in assets' },
          assets_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly asset data' },
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' }
        }
      }
    }
  },

  {
    // 41. NFT Collections - Holders
    type: 'apiNode',
    label: 'Collection Holders Analysis',
    endpoint: '/api/v2/nft/collection/holders',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Holder distribution trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'holders' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          holders: { type: 'string', description: 'Total number of holders' },
          holders_change: { type: 'string', description: 'Change in total holders' },
          holders_tokens_1: { type: 'string', description: 'Holders with 1 token' },
          holders_tokens_10_15: { type: 'string', description: 'Holders with 10-15 tokens' },
          holders_tokens_10_15_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 10-15 tokens' },
          holders_tokens_16_25: { type: 'string', description: 'Holders with 16-25 tokens' },
          holders_tokens_16_25_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 16-25 tokens' },
          holders_tokens_1_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 1 token' },
          holders_tokens_2: { type: 'string', description: 'Holders with 2 tokens' },
          holders_tokens_25plus: { type: 'string', description: 'Holders with more than 25 tokens' },
          holders_tokens_25plus_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 25+ tokens' },
          holders_tokens_2_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 2 tokens' },
          holders_tokens_3_5: { type: 'string', description: 'Holders with 3-5 tokens' },
          holders_tokens_3_5_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 3-5 tokens' },
          holders_tokens_6_9: { type: 'string', description: 'Holders with 6-9 tokens' },
          holders_tokens_6_9_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 6-9 tokens' },
          holders_tokens_9plus: { type: 'string', description: 'Holders with more than 9 tokens' },
          holders_tokens_9plus_trend: { type: 'array', items: { type: 'integer' }, description: 'Trend of holders with 9+ tokens' },
          total_holder_trend: { type: 'string', description: 'Trend of total holders over time' }
        }
      }
    }
  },
  
  // 42. NFT Collections - Scores
  {
    type: 'apiNode',
    label: 'Collection Performance Scores',
    endpoint: '/api/v2/nft/collection/scores',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Market cap and liquidity scores',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'market_cap' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          avg_usd_trend: { type: 'string', description: 'Hourly USD price trend' },
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          market_cap: { type: 'number', description: 'Market capitalization' },
          marketcap_change: { type: 'number', description: 'Change in market cap' },
          marketcap_trend: { type: 'string', description: 'Hourly market cap trend' },
          minting_revenue: { type: 'number', description: 'Revenue from minting' },
          price_avg: { type: 'string', description: 'Average price' },
          price_avg_change: { type: 'string', description: 'Change in average price' },
          price_ceiling: { type: 'number', description: 'Price ceiling' },
          price_ceiling_trend: { type: 'string', description: 'Hourly price ceiling trend' },
          royalty_price: { type: 'string', description: 'Royalty price' }
        }
      }
    }
  },
  
  // 43. NFT Collections - Traders
  {
    type: 'apiNode',
    label: 'Collection Trader Activity',
    endpoint: '/api/v2/nft/collection/traders',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Unique trader metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'traders' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          traders: { type: 'integer', description: 'Total number of traders' },
          traders_buyers: { type: 'integer', description: 'Number of buyers' },
          traders_buyers_change: { type: 'number', description: 'Change in number of buyers' },
          traders_buyers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly buyer trend data' },
          traders_change: { type: 'number', description: 'Change in total traders' },
          traders_sellers: { type: 'integer', description: 'Number of sellers' },
          traders_sellers_change: { type: 'number', description: 'Change in number of sellers' },
          traders_sellers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly seller trend data' },
          traders_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly total trader trend data' },
          updated_at: { type: 'string', description: 'Last update timestamp' }
        }
      }
    }
  },
  
  // 44. NFT Collections - Washtrade
  {
    type: 'apiNode',
    label: 'Collection Wash Trading',
    endpoint: '/api/v2/nft/collection/washtrade',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Data integrity insights',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'washtrade_assets' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          washtrade_assets: { type: 'integer', description: 'Number of wash traded assets' },
          washtrade_assets_change: { type: 'number', description: 'Change in wash traded assets' },
          washtrade_assets_trend: { type: 'string', description: 'Hourly trend of wash traded assets' },
          washtrade_suspect_sales: { type: 'integer', description: 'Number of suspicious sales' },
          washtrade_suspect_sales_change: { type: 'number', description: 'Change in suspicious sales' },
          washtrade_suspect_sales_trend: { type: 'string', description: 'Hourly trend of suspicious sales' },
          washtrade_suspect_transactions_trend: { type: 'string', description: 'Hourly trend of suspicious transactions' },
          washtrade_volume: { type: 'number', description: 'Total wash trading volume' },
          washtrade_volume_change: { type: 'number', description: 'Change in wash trading volume' },
          washtrade_volume_trend: { type: 'string', description: 'Hourly trend of wash trading volume' },
          washtrade_wallets: { type: 'integer', description: 'Number of wash trading wallets' },
          washtrade_wallets_change: { type: 'number', description: 'Change in wash trading wallets' },
          washtrade_wallets_trend: { type: 'string', description: 'Hourly trend of wash trading wallets' }
        }
      }
    }
  },
  
  // 45. NFT Collections - Whales
  {
    type: 'apiNode',
    label: 'Collection Whale Activity',
    endpoint: '/api/v2/nft/collection/whales',
    method: 'GET',
    category: 'NFT Collections',
    description: 'Large holder trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'nft_count' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          buy_count: { type: 'string', description: 'Number of buy transactions' },
          buy_volume: { type: 'number', description: 'Total volume of buys' },
          buy_whales: { type: 'string', description: 'Number of whale buyers' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          contract_type: { type: 'string', description: 'Type of NFT contract' },
          mint_count: { type: 'string', description: 'Number of mints' },
          mint_volume: { type: 'number', description: 'Total volume of mints' },
          mint_whales: { type: 'string', description: 'Number of whale minters' },
          nft_count: { type: 'string', description: 'Total number of NFTs' },
          sell_count: { type: 'string', description: 'Number of sell transactions' },
          sell_volume: { type: 'number', description: 'Total volume of sells' },
          sell_whales: { type: 'string', description: 'Number of whale sellers' },
          total_mint_volume: { type: 'number', description: 'Lifetime mint volume' },
          total_sale_volume: { type: 'number', description: 'Lifetime sale volume' },
          unique_buy_wallets: { type: 'string', description: 'Number of unique buyers' },
          unique_mint_wallets: { type: 'string', description: 'Number of unique minters' },
          unique_sell_wallets: { type: 'string', description: 'Number of unique sellers' },
          unique_wallets: { type: 'string', description: 'Total unique wallets' },
          whale_holders: { type: 'string', description: 'Number of whale holders' }
        }
      }
    }
  },
  
  // 46. NFT Collections - Profile
  {
    type: 'apiNode',
    label: 'Collection Engagement Profile',
    endpoint: '/api/v2/nft/collection/profile',
    method: 'GET',
    category: 'NFT Collections',
    description: 'User growth trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      contract_address: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'washtrade_index' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          avg_loss_making_trades: { type: 'number', description: 'Average number of loss-making trades' },
          avg_profitable_trades: { type: 'number', description: 'Average number of profitable trades' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name/address' },
          collection_score: { type: 'number', description: 'Overall collection score' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          diamond_hands: { type: 'string', description: 'Number of long-term holders' },
          fear_and_greed_index: { type: 'number', description: 'Market sentiment index' },
          holder_metrics_score: { type: 'number', description: 'Score based on holder metrics' },
          liquidity_score: { type: 'number', description: 'Score based on trading liquidity' },
          loss_making_trades: { type: 'string', description: 'Number of trades at a loss' },
          loss_making_trades_percentage: { type: 'number', description: 'Percentage of loss-making trades' },
          loss_making_volume: { type: 'number', description: 'Volume of loss-making trades' },
          market_dominance_score: { type: 'number', description: 'Market share/dominance score' },
          metadata_score: { type: 'number', description: 'Score based on metadata quality' },
          profitable_trades: { type: 'string', description: 'Number of profitable trades' },
          profitable_trades_percentage: { type: 'number', description: 'Percentage of profitable trades' },
          profitable_volume: { type: 'number', description: 'Volume of profitable trades' },
          token_distribution_score: { type: 'number', description: 'Score based on token distribution' },
          washtrade_index: { type: 'number', description: 'Index measuring wash trading activity' },
          zero_profit_trades: { type: 'string', description: 'Number of break-even trades' }
        }
      }
    }
  },

{
  type: 'apiNode',
  label: 'Collection Categories',
  endpoint: '/api/v2/nft/collection/categories',
  method: 'GET',
  category: 'NFT Collections',
  description: 'Get metadata information for collections by category',
  params: {
    offset: { type: 'integer', default: 0, description: 'Index of the page to return' },
    limit: { type: 'integer', default: 30, description: 'Number of items to return (1-100)' },
    sort_order: { type: 'string', default: 'desc', description: 'Sort order (asc/desc)' }
  },
  output_params: {
    data: {
      type: 'array',
      items: {
        Description: { type: 'string', description: 'Detailed description of the category' },
        Name: { type: 'string', description: 'Category name identifier' }
      }
    },
  }
},
  
  // 47. NFT Marketplace - Metadata
  {
    type: 'apiNode',
    label: 'Marketplace Metadata',
    endpoint: '/api/v2/nft/marketplace/metadata',
    method: 'GET',
    category: 'NFT Marketplace',
    description: 'Marketplace identity details',
    params: {
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          external_url: { type: 'string', description: 'Marketplace external URL' },
          image_url: { type: 'string', description: 'Marketplace logo/image URL' },
          marketplaces: { type: 'string', description: 'Marketplace name' }
        }
      }
    }
  },
  
  // 48. NFT Marketplace - Analytics
  {
    type: 'apiNode',
    label: 'Marketplace Performance',
    endpoint: '/api/v2/nft/marketplace/analytics',
    method: 'GET',
    category: 'NFT Marketplace',
    description: 'Trading volume analysis',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      name: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'name' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          id: { type: 'string', description: 'Marketplace identifier' },
          name: { type: 'string', description: 'Marketplace name' },
          sales: { type: 'integer', description: 'Number of sales' },
          sales_change: { type: 'number', description: 'Percentage change in sales' },
          thumbnail_url: { type: 'string', description: 'Marketplace logo URL' },
          transactions: { type: 'integer', description: 'Number of transactions' },
          transactions_change: { type: 'number', description: 'Percentage change in transactions' },
          transfers: { type: 'integer', description: 'Number of transfers' },
          transfers_change: { type: 'number', description: 'Percentage change in transfers' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          url: { type: 'string', description: 'Marketplace website URL' },
          volume: { type: 'number', description: 'Trading volume' },
          volume_change: { type: 'number', description: 'Percentage change in volume' }
        }
      }
    }
  },
  
  // 49. NFT Marketplace - Holders
  {
    type: 'apiNode',
    label: 'Marketplace Holder Trends',
    endpoint: '/api/v2/nft/marketplace/holders',
    method: 'GET',
    category: 'NFT Marketplace',
    description: 'Holder activity metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      name: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'name' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'NFT contract address' },
          external_url: { type: 'string', description: 'Marketplace external URL' },
          image_url: { type: 'string', description: 'Marketplace logo URL' },
          marketplaces: { type: 'string', description: 'Marketplace name' }
        }
      }
    }
  },
  
  // 50. NFT Marketplace - Traders
  {
    type: 'apiNode',
    label: 'Marketplace Trader Ratios',
    endpoint: '/api/v2/nft/marketplace/traders',
    method: 'GET',
    category: 'NFT Marketplace',
    description: 'Buyer/seller dynamics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      name: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'name' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          id: { type: 'string', description: 'Marketplace identifier' },
          name: { type: 'string', description: 'Marketplace name' },
          thumbnail_url: { type: 'string', description: 'Marketplace logo URL' },
          traders: { type: 'integer', description: 'Total number of traders' },
          traders_buyers: { type: 'integer', description: 'Number of buyers' },
          traders_buyers_change: { type: 'number', description: 'Percentage change in buyers' },
          traders_change: { type: 'number', description: 'Percentage change in total traders' },
          traders_sellers: { type: 'integer', description: 'Number of sellers' }, 
          traders_sellers_change: { type: 'number', description: 'Percentage change in sellers' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          url: { type: 'string', description: 'Marketplace website URL' }
        }
      }
    }
  },

  {
    // 51. NFT Marketplace - Washtrade
    type: 'apiNode',
    label: 'Marketplace Wash Trades',
    endpoint: '/api/v2/nft/marketplace/washtrade',
    method: 'GET',
    category: 'NFT Marketplace',
    description: 'Flagged marketplace transactions',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      name: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      sort_by: { type: 'string', default: 'name' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          id: { type: 'string', description: 'Marketplace identifier' },
          name: { type: 'string', description: 'Marketplace name' },
          thumbnail_url: { type: 'string', description: 'Marketplace logo URL' },
          url: { type: 'string', description: 'Marketplace website URL' },
          washtrade_assets: { type: 'string', description: 'Number of wash traded assets' },
          washtrade_assets_change: { type: 'number', description: 'Percentage change in wash traded assets' },
          washtrade_suspect_sales: { type: 'string', description: 'Number of suspicious sales' },
          washtrade_suspect_sales_change: { type: 'number', description: 'Percentage change in suspicious sales' },
          washtrade_suspect_sales_ratio: { type: 'string', description: 'Ratio of suspicious to total sales' },
          washtrade_suspect_sales_ratio_change: { type: 'string', description: 'Change in suspicious sales ratio' },
          washtrade_suspect_transactions: { type: 'string', description: 'Number of suspicious transactions' },
          washtrade_suspect_transactions_change: { type: 'number', description: 'Percentage change in suspicious transactions' },
          washtrade_volume: { type: 'number', description: 'Total volume of wash trades' },
          washtrade_volume_change: { type: 'number', description: 'Percentage change in wash trade volume' },
          washtrade_wallets: { type: 'string', description: 'Number of wallets involved in wash trading' },
          washtrade_wallets_change: { type: 'number', description: 'Percentage change in wash trading wallets' }
        }
      }
    }
  },
  
  // 52. Market Insights - Analytics
  {
    type: 'apiNode',
    label: 'Market Analytics Report',
    endpoint: '/api/v2/nft/market-insights/analytics',
    method: 'GET',
    category: 'Market Insights',
    description: 'Aggregated market metrics',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          price_ceiling_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly price ceiling values' },
          sales: { type: 'integer', description: 'Total number of sales' },
          sales_change: { type: 'number', description: 'Percentage change in sales' },
          sales_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly sales counts' },
          transactions: { type: 'integer', description: 'Total number of transactions' },
          transactions_change: { type: 'number', description: 'Percentage change in transactions' },
          transactions_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly transaction counts' },
          transfers: { type: 'integer', description: 'Total number of transfers' },
          transfers_change: { type: 'number', description: 'Percentage change in transfers' },
          transfers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly transfer counts' },
          updated_at: { type: 'string', description: 'Last update timestamp' },
          volume: { type: 'number', description: 'Total trading volume' },
          volume_change: { type: 'number', description: 'Percentage change in volume' },
          volume_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly volume values' }
        }
      }
    }
  },
  
  // 53. Market Insights - Holders
  {
    type: 'apiNode',
    label: 'Holder Trends Insights',
    endpoint: '/api/v2/nft/market-insights/holders',
    method: 'GET',
    category: 'Market Insights',
    description: 'Holder activity trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          holders: { type: 'string', description: 'Total number of holders' },
          holders_change: { type: 'number', description: 'Percentage change in holders' },
          holders_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly holder counts' },
          holders_whales: { type: 'string', description: 'Number of whale holders' },
          holders_whales_change: { type: 'number', description: 'Percentage change in whale holders' },
          holders_whales_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly whale holder counts' }
        }
      }
    }
  },
  
  // 54. Market Insights - Scores
  {
    type: 'apiNode',
    label: 'Market Score Trends',
    endpoint: '/api/v2/nft/market-insights/scores',
    method: 'GET',
    category: 'Market Insights',
    description: 'Rarity/liquidity trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          market_cap: { type: 'string', description: 'Total market capitalization' },
          market_cap_change: { type: 'string', description: 'Percentage change in market cap' },
          market_cap_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly market cap values' },
          marketstate: { type: 'integer', description: 'Market state indicator' },
          marketstate_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly market state values' },
          nft_market_fear_and_greed_index: { type: 'number', description: 'Market sentiment index' },
          nft_market_fear_and_greed_index_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly sentiment index values' }
        }
      }
    }
  },
  
  // 55. Market Insights - Traders
  {
    type: 'apiNode',
    label: 'Trader Activity Insights',
    endpoint: '/api/v2/nft/market-insights/traders',
    method: 'GET',
    category: 'Market Insights',
    description: 'Trading volume trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          traders: { type: 'integer', description: 'Total number of traders' },
          traders_buyers: { type: 'integer', description: 'Number of buyers' },
          traders_buyers_change: { type: 'number', description: 'Percentage change in buyers' },
          traders_buyers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly buyer counts' },
          traders_change: { type: 'number', description: 'Percentage change in total traders' },
          traders_sellers: { type: 'integer', description: 'Number of sellers' },
          traders_sellers_change: { type: 'number', description: 'Percentage change in sellers' },
          traders_sellers_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly seller counts' },
          traders_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly total trader counts' },
          updated_at: { type: 'string', description: 'Last update timestamp' }
        }
      }
    }
  },
  
  // 56. Market Insights - Washtrade
  {
    type: 'apiNode',
    label: 'Market Wash Trade Insights',
    endpoint: '/api/v2/nft/market-insights/washtrade',
    method: 'GET',
    category: 'Market Insights',
    description: 'Market manipulation trends',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      time_range: { type: 'string', default: '24h' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          block_dates: { type: 'array', items: { type: 'string' }, description: 'Hourly timestamps' },
          blockchain: { type: 'string', description: 'Blockchain network' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          washtrade_assets: { type: 'string', description: 'Number of wash traded assets' },
          washtrade_assets_change: { type: 'number', description: 'Percentage change in wash traded assets' },
          washtrade_assets_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly wash traded asset counts' },
          washtrade_level: { type: 'integer', description: 'Wash trading risk level' },
          washtrade_suspect_sales: { type: 'string', description: 'Number of suspicious sales' },
          washtrade_suspect_sales_change: { type: 'number', description: 'Percentage change in suspicious sales' },
          washtrade_suspect_sales_ratio: { type: 'string', description: 'Ratio of suspicious to total sales' },
          washtrade_suspect_sales_ratio_change: { type: 'string', description: 'Change in suspicious sales ratio' },
          washtrade_suspect_sales_ratio_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly suspicious sales ratio values' },
          washtrade_suspect_sales_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly suspicious sales counts' },
          washtrade_suspect_transactions: { type: 'string', description: 'Number of suspicious transactions' },
          washtrade_suspect_transactions_change: { type: 'number', description: 'Percentage change in suspicious transactions' },
          washtrade_suspect_transactions_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly suspicious transaction counts' },
          washtrade_volume: { type: 'number', description: 'Total volume of wash trades' },
          washtrade_volume_change: { type: 'number', description: 'Percentage change in wash trade volume' },
          washtrade_volume_trend: { type: 'array', items: { type: 'number' }, description: 'Hourly wash trade volume values' },
          washtrade_wallets: { type: 'string', description: 'Number of wallets involved in wash trading' },
          washtrade_wallets_change: { type: 'number', description: 'Percentage change in wash trading wallets' },
          washtrade_wallets_trend: { type: 'array', items: { type: 'integer' }, description: 'Hourly wash trading wallet counts' }
        }
      }
    }
  },
  
  // 57. Blockchains - List
  {
    type: 'apiNode',
    label: 'Supported Blockchains',
    endpoint: '/api/v2/blockchains',
    method: 'GET',
    category: 'Blockchains',
    description: 'Get blockchain metadata',
    params: {
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          chain_id: { type: 'integer', description: 'Chain identifier' },
          description: { type: 'string', description: 'Blockchain description' },
          id: { type: 'integer', description: 'Unique identifier' },
          image_url: { type: 'string', description: 'Logo image URL' },
          name: { type: 'string', description: 'Blockchain name' },
          symbol: { type: 'string', description: 'Token symbol' }
        }
      }
    }
  },
];