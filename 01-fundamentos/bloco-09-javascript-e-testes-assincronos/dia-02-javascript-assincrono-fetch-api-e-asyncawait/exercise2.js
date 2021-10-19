const cryptocurrenciesList = document.querySelector('#cryptocurrencies');
const API_URL = 'https://api.coincap.io/v2/assets'

function getCryptocurrencies() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(jsonFile => jsonFile.data);
}

function createItem({ id, symbol, priceUsd }) {
  const li = document.createElement('li');
  li.innerText = `${id} (${symbol}): ${priceUsd}`;
  return li;
}

async function appendCryptocurrencies() {
  const cryptocurrencies = await getCryptocurrencies();
  cryptocurrencies
    .filter((_, index) => index < 10)
    .forEach((cryptocurrency) => {
      const cryptoItem = createItem(cryptocurrency);
      cryptocurrenciesList.appendChild(cryptoItem);
    });
}

window.onload = appendCryptocurrencies;
