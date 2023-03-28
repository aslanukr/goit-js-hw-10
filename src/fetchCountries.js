import Notiflix from 'notiflix';

export const fetchCountries = query =>
  fetch(
    `https://restcountries.com/v3.1/name/${query}?fields=name,capital,population,flags,languages`
  ).then(res => {
    if (!res.ok) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }

    return res.json();
  });
