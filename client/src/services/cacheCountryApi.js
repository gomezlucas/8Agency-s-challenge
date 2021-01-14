import * as services from './countryApi.js';

export default async function getCountriesFromApi() {
  const key = 'countries';
  const countriesCache = localStorage.getItem(key);

  if (countriesCache) {
    return JSON.parse(countriesCache);
  }
  const countries = await services.getCountriesFromApi();
  localStorage.setItem(key, JSON.stringify(countries));

  return countries;
}
