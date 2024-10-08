const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByName = (name) => BASE_URL + 'name/' + name;

export const filterByCodes = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');