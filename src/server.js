require('dotenv').config();
const express = require('express');
const path = require('path');
const { paymentNetworks } = require('./services/networks');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/health', (_req, res) => res.json({ ok: true, app: 'FlashCoinApp' }));
app.get('/api/networks', (_req, res) => res.json({ networks: paymentNetworks }));

app.post('/api/orders', (_req, res) => {
  if (process.env.PAYMENTS_ENABLED !== 'true' || process.env.ORDERS_ENABLED !== 'true') {
    return res.status(503).json({
      error: 'Order processing is disabled',
      message: 'Payment monitoring, confirmation rules and supplier fulfilment must be configured and tested before enabling live orders.'
    });
  }
  return res.status(501).json({ error: 'Live payment/order adapter is not configured yet.' });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => console.log(`FlashCoinApp listening on ${port}`));
