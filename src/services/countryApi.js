export async function getCountriesFromApi() {
  const URL = `https://restcountries.eu/rest/v2/all
    `;
  const result = await fetch(URL);
  return result.json();
}
