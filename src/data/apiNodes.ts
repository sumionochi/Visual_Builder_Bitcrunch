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
          decimal: { type: 'integer', description: 'Token decimal places' },
          quantity: { type: 'integer', description: 'Token quantity' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' }
        }
      },
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
          contract_address: { type: 'string', description: 'NFT contract address' },
          contract_type: { type: 'string', description: 'NFT contract type (ERC721/ERC1155)' },
          quantity: { type: 'integer', description: 'Number of tokens owned' },
          token_id: { type: 'string', description: 'Unique token identifier' },
          wallet: { type: 'string', description: 'Owner wallet address' }
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
          decimal: { type: 'integer', description: 'Token decimal places' },
          quantity: { type: 'number', description: 'Token quantity' },
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'string', description: 'Chain identifier' },
          arbitrage: { type: 'boolean', description: 'Arbitrage activity flag' },
          at_risk: { type: 'boolean', description: 'Risk status flag' },
          bot: { type: 'boolean', description: 'Bot activity flag' },
          bridge: { type: 'boolean', description: 'Bridge usage flag' },
          bridge_name: { type: 'string', description: 'Name of the bridge if applicable' },
          contract: { type: 'boolean', description: 'Contract flag' },
          custodial: { type: 'boolean', description: 'Custodial wallet flag' },
          custodial_name: { type: 'string', description: 'Name of custodial service' },
          defi: { type: 'boolean', description: 'DeFi activity flag' },
          defi_name: { type: 'string', description: 'Name of DeFi protocol' },
          defi_trader: { type: 'boolean', description: 'DeFi trading activity flag' },
          dex: { type: 'boolean', description: 'DEX usage flag' },
          dex_name: { type: 'string', description: 'Name of DEX' },
          ens_name: { type: 'string', description: 'ENS name if registered' },
          entity_name: { type: 'string', description: 'Entity name if known' },
          exchange: { type: 'boolean', description: 'Exchange activity flag' },
          exchange_name: { type: 'string', description: 'Name of exchange' },
          marketplace: { type: 'boolean', description: 'Marketplace activity flag' },
          marketplace_name: { type: 'string', description: 'Name of marketplace' },
          nft_creator: { type: 'boolean', description: 'NFT creator flag' },
          nft_holder: { type: 'boolean', description: 'NFT holder flag' },
          nft_shark: { type: 'boolean', description: 'NFT shark trader flag' },
          nft_trader: { type: 'boolean', description: 'NFT trading activity flag' },
          nft_whale: { type: 'boolean', description: 'NFT whale status flag' },
          risk_category: { type: 'integer', description: 'Risk category level' },
          risk_depth: { type: 'integer', description: 'Risk depth level' }
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
          deployed_date: { type: 'string', description: 'Pool deployment date' },
          deployer: { type: 'string', description: 'Pool deployer address' },
          pair_address: { type: 'string', description: 'Pool contract address' },
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
          pair_address: { type: 'string', description: 'Pool contract address' },
          protocol: { type: 'string', description: 'Protocol name' },
          token0: { type: 'string', description: 'First token address' },
          token0_price: { type: 'number', description: 'First token price' },
          token0_reserve: { type: 'number', description: 'First token reserve' },
          token0_share: { type: 'number', description: 'First token share percentage' },
          token0_tvl: { type: 'number', description: 'First token TVL' },
          token1: { type: 'string', description: 'Second token address' },
          token1_price: { type: 'number', description: 'Second token price' },
          token1_reserve: { type: 'number', description: 'Second token reserve' },
          token1_share: { type: 'number', description: 'Second token share percentage' },
          token1_tvl: { type: 'number', description: 'Second token TVL' },
          total_tvl: { type: 'number', description: 'Total value locked' },
          transactions_24hrs: { type: 'number', description: '24h transaction count' },
          transactions_24hrs_change: { type: 'number', description: '24h transaction change' },
          transactions_7d: { type: 'number', description: '7d transaction count' },
          transactions_7d_change: { type: 'number', description: '7d transaction change' },
          transactions_30d: { type: 'number', description: '30d transaction count' },
          transactions_30d_change: { type: 'number', description: '30d transaction change' },
          transactions_90d: { type: 'number', description: '90d transaction count' },
          transactions_90d_change: { type: 'number', description: '90d transaction change' },
          transactions_all: { type: 'number', description: 'All-time transaction count' },
          volume_24hrs: { type: 'number', description: '24h trading volume' },
          volume_24hrs_change: { type: 'number', description: '24h volume change' },
          volume_7d: { type: 'number', description: '7d trading volume' },
          volume_7d_change: { type: 'number', description: '7d volume change' },
          volume_30d: { type: 'number', description: '30d trading volume' },
          volume_30d_change: { type: 'number', description: '30d volume change' },
          volume_90d: { type: 'number', description: '90d trading volume' },
          volume_90d_change: { type: 'number', description: '90d volume change' },
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
          deployed_date: { type: 'string', description: 'Pool deployment date' },
          deployer: { type: 'string', description: 'Pool deployer address' },
          pair_address: { type: 'string', description: 'Pool contract address' },
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          protocol: { type: 'string', description: 'Protocol name' }
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimal places' },
          quantity: { type: 'number', description: 'Token quantity' },
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_name: { type: 'string', description: 'Token name' },
          token_symbol: { type: 'string', description: 'Token symbol' },
          current_price: { type: 'number', description: 'Current token price' },
          market_cap: { type: 'number', description: 'Market capitalization' },
          total_supply: { type: 'number', description: 'Total token supply' },
          circulating_supply: { type: 'number', description: 'Circulating token supply' },
          holders: { type: 'integer', description: 'Number of token holders' },
          token_score: { type: 'number', description: 'Overall token score' },
          trading_pattern_score: { type: 'number', description: 'Trading pattern score' },
          token_holders_score: { type: 'number', description: 'Token holders score' },
          volume_score: { type: 'number', description: 'Volume score' }
        }
      }
    }
  },
  
  // 11. Token - Holders
  {
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          decimal: { type: 'integer', description: 'Token decimal places' },
          quantity: { type: 'number', description: 'Token quantity held' },
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
          receiver: { type: 'string', description: 'Receiver wallet address' },
          sender: { type: 'string', description: 'Sender wallet address' },
          timestamp: { type: 'string', description: 'Transaction timestamp' },
          token_address: { type: 'string', description: 'Token contract address' },
          transaction_hash: { type: 'string', description: 'Transaction hash' },
          value_native: { type: 'number', description: 'Transfer value in native currency' },
          value_usd: { type: 'number', description: 'Transfer value in USD' }
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
          block_date: { type: 'string', description: 'Prediction date and time' },
          data_type: { type: 'string', description: 'Type of data (Predictions)' },
          open: { type: 'number', description: 'Opening price' },
          prediction: { type: 'number', description: 'Predicted price value' },
          prediction_lb: { type: 'number', description: 'Lower bound of prediction' },
          prediction_ub: { type: 'number', description: 'Upper bound of prediction' },
          token: { type: 'string', description: 'Token name' },
          token_address: { type: 'string', description: 'Token contract address' },
          token_symbol: { type: 'string', description: 'Price currency symbol' }
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
          blockchain: { type: 'string', description: 'Blockchain name' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'Brand category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          contract_address: { type: 'string', description: 'Contract address' },
          contract_type: { type: 'string', description: 'Contract type (ERC721/ERC1155)' },
          contracts: { type: 'array', description: 'List of contract addresses' },
          description: { type: 'string', description: 'Brand description' },
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

  // 15. NFT Brand - Metrics
  {
    type: 'apiNode',
    label: 'NFT Brand Metrics',
    endpoint: '/api/x2/nft/brand/metrics',
    method: 'GET',
    category: 'NFT Brand',
    description: 'Retrieve detailed metrics for an NFT brand',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      brand: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 },
      sort_by: { type: 'string', default: 'mint_tokens' },
      sort_order: { type: 'string', default: 'desc' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          No_of_contracts: { type: 'string', description: 'Number of contracts' },
          assets_all: { type: 'string', description: 'Total number of assets' },
          blockchain: { type: 'string', description: 'Blockchain name' },
          brand: { type: 'string', description: 'Brand name' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          collection: { type: 'string', description: 'Collection name' },
          contracts: { type: 'string', description: 'Contract addresses' },
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
    description: 'Retrieve profile information and trading insights',
    params: {
      blockchain: { type: 'string', default: 'ethereum' },
      brand: { type: 'array', required: true },
      time_range: { type: 'string', default: '24h' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 },
      sort_by: { type: 'string', default: 'diamond_hands' },
      sort_order: { type: 'string', default: 'desc' }
    },
    output_params: {
      data: {
        type: 'array',
        items: {
          blockchain: { type: 'string', description: 'Blockchain name' },
          brand: { type: 'string', description: 'Brand name' },
          category: { type: 'string', description: 'Brand category' },
          chain_id: { type: 'integer', description: 'Chain identifier' },
          diamond_hands: { type: 'string', description: 'Number of diamond hands' },
          loss_making_trades: { type: 'string', description: 'Number of loss-making trades' },
          loss_making_volume: { type: 'number', description: 'Volume of loss-making trades' },
          profitable_trades: { type: 'string', description: 'Number of profitable trades' },
          profitable_volume: { type: 'number', description: 'Volume of profitable trades' },
          token_score: { type: 'number', description: 'Token score' }
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
    }
  },
    
  // 21. NFT Price - Token Estimate
  {
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
    }
  },
  
  // 58. Token - Transfers (Duplicate Check)
  {
    type: 'apiNode',
    label: 'Token Transfer History',
    endpoint: '/api/v2/token/transfers',
    method: 'GET',
    category: 'Token',
    description: 'ERC20 transfer records',
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
          receiver: { type: 'string', description: 'Receiver wallet address' },
          sender: { type: 'string', description: 'Sender wallet address' },
          timestamp: { type: 'string', description: 'Transaction timestamp' },
          token_address: { type: 'string', description: 'Token contract address' },
          transaction_hash: { type: 'string', description: 'Transaction hash' },
          value_native: { type: 'number', description: 'Transfer value in native currency' },
          value_usd: { type: 'number', description: 'Transfer value in USD' }
        }
      }
    }
  },
  
  // 59. NFT - Top Deals (Final Endpoint)
  {
    type: 'apiNode',
    label: 'NFT Market Top Deals',
    endpoint: '/api/v2/nft/top_deals',
    method: 'GET',
    category: 'NFT',
    description: 'Best deals by score',
    params: {
      sort_by: { type: 'string', default: 'deal_score' },
      sort_order: { type: 'string', default: 'desc' },
      offset: { type: 'integer', default: 0 },
      limit: { type: 'integer', default: 30 }
    }
  },
];