const API_URL = 'https://api.exchangerate-api.com/v4/latest';

document.getElementById('converter-form').addEventListener('submit', (e) => {
e.preventDefault();
const amount = document.getElementById('amount').value;
const baseCurrency = document.getElementById('base-currency').value;
const targetCurrency = document.getElementById('target-currency').value;

fetch(`${API_URL}/${baseCurrency}`)
    .then(response => response.json())
    .then(data => {
        const rate = data.rates[targetCurrency];
        const convertedAmount = amount * rate;
        document.getElementById('result').innerHTML = ` ${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency} `;
    })
    .catch(error => console.error('Error:', error));
});