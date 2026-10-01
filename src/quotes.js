const PRODUCT_RATE = {
  auto: 0.016,
  home: 0.009,
  travel: 0.025
};

const RISK_MULTIPLIER = {
  low: 0.9,
  medium: 1.0,
  high: 1.35
};

export function calculateAnnualPremium({ product, coverage, risk, bundle = false }) {
  const amount = Number(coverage);
  if (!PRODUCT_RATE[product]) throw new Error('Unsupported insurance product');
  if (!RISK_MULTIPLIER[risk]) throw new Error('Unsupported risk level');
  if (!Number.isFinite(amount) || amount <= 0) throw new Error('Coverage must be greater than zero');

  let premium = amount * PRODUCT_RATE[product] * RISK_MULTIPLIER[risk];

  // Intentional classroom review target:
  // The business rule says bundled policies receive a 10% discount.
  // This implementation currently subtracts a flat $10 instead.
  if (bundle) premium -= 10;

  return Math.max(0, Math.round(premium * 100) / 100);
}
