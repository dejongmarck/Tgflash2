# FlashCoinApp — Railway deployment starter

This ZIP is a **deployable starter**, not a completed live-payment platform.

## Included networks
- TON
- BNB Smart Chain (BSC)
- Ethereum
- Solana
- Tron

**Bitcoin (BTC) and Litecoin (LTC) have been removed.**

## Deploy on Railway
1. Extract this ZIP and push the contents to a GitHub repository.
2. In Railway, create a project and choose **Deploy from GitHub Repo**.
3. Select the repository. Railway detects the Node.js app and runs `npm start`.
4. Add the variables from `.env.example` in Railway's Variables tab.
5. Keep `PAYMENTS_ENABLED=false` and `ORDERS_ENABLED=false` until the payment provider, on-chain monitoring, confirmation thresholds, unique order matching, and FlashCryptoShop fulfilment are implemented and tested.

## Important before accepting real payments
- The five networks are listed in the UI only; this starter does not yet monitor blockchains or verify deposits.
- Do not treat a browser redirect or customer screenshot as proof of payment. Verify transactions server-side and make webhook/event handling idempotent.
- Use unique per-order payment addresses or a reputable payment processor with reliable invoice webhooks. Reusing one static address across many orders can make payment matching ambiguous.
- Supplier fulfilment needs a valid FlashCryptoShop API integration and sufficient prepaid reseller balance. Customer wallet deposits do not automatically top up that supplier balance.
- Never put API keys, private keys, or seed phrases in frontend code or Git. Store secrets only as Railway Variables. Never share seed phrases or private keys in chat.

## Margin
A 40% gross margin uses `selling price = supplier cost / 0.60`. This is before payment fees, taxes, refunds, and operating costs.

## Local run
```bash
cp .env.example .env
npm install
npm start
```
Open `http://localhost:3000`.
