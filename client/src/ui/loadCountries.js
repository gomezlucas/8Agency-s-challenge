import getCountriesFromApi from '../services/cacheCountryApi.js';

export default async function loadCountries() {
  const $countryContainer = document.getElementById('country');
  const countriesArray = await getCountriesFromApi();
  $countryContainer.innerHtml = '';
  console.log(countriesArray, "the array is")
  countriesArray.forEach((country) => {
    const countryOption = document.createElement('option');
    countryOption.innerHTML = country.name.common;
    $countryContainer.appendChild(countryOption);
  });
}
