// Supported payment networks. BTC and LTC have intentionally been removed.
const paymentNetworks = [
  { id: 'TON', name: 'TON', asset: 'TON', network: 'TON' },
  { id: 'BNB', name: 'BNB', asset: 'BNB', network: 'BNB Smart Chain (BSC)' },
  { id: 'ETH', name: 'ETH', asset: 'ETH', network: 'Ethereum' },
  { id: 'SOL', name: 'SOL', asset: 'SOL', network: 'Solana' },
  { id: 'TRX', name: 'TRX', asset: 'TRX', network: 'Tron' }
];
module.exports = { paymentNetworks };
