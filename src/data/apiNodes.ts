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