import { calculateAnnualPremium } from './quotes.js';

const form = document.querySelector('#quote-form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  try {
    const premium = calculateAnnualPremium({
      product: data.get('product'),
      coverage: data.get('coverage'),
      risk: data.get('risk'),
      bundle: data.get('bundle') === 'on'
    });
    result.textContent = `Estimated annual premium: $${premium.toFixed(2)}`;
  } catch (error) {
    result.textContent = error.message;
  }
});
