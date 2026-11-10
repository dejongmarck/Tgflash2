// 40% gross margin: sale price = cost / (1 - margin).
function salePrice(cost, margin = 0.40) {
  if (!Number.isFinite(cost) || cost < 0 || margin < 0 || margin >= 1) {
    throw new Error('Invalid cost or margin');
  }
  return Number((cost / (1 - margin)).toFixed(2));
}
module.exports = { salePrice };
