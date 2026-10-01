import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAnnualPremium } from '../src/quotes.js';

test('auto medium risk quote', () => {
  assert.equal(calculateAnnualPremium({ product: 'auto', coverage: 50000, risk: 'medium' }), 800);
});

test('rejects zero coverage', () => {
  assert.throws(() => calculateAnnualPremium({ product: 'auto', coverage: 0, risk: 'low' }));
});
