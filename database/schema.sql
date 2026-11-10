CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  external_reference TEXT UNIQUE NOT NULL,
  amount NUMERIC(20,8) NOT NULL,
  currency TEXT NOT NULL,
  network TEXT NOT NULL CHECK (network IN ('TON','BNB','ETH','SOL','TRX')),
  status TEXT NOT NULL DEFAULT 'pending_payment',
  payment_tx_hash TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
