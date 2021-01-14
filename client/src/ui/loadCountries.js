import getCountriesFromApi from '../services/cacheCountryApi.js';

export default async function loadCountries() {
  const $countryContainer = document.getElementById('country');
  const countriesArray = await getCountriesFromApi();
  $countryContainer.innerHtml = '';

  countriesArray.forEach((country) => {
    const countryOption = document.createElement('option');
    countryOption.innerHTML = country.name;
    $countryContainer.appendChild(countryOption);
  });
}
