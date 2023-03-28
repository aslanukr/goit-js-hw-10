import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { makeCountryCardMarkup, makeListMarkup } from './makeMarkup';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('input#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener(
  'input',
  debounce(handleSearchInput, DEBOUNCE_DELAY)
);

function handleSearchInput(e) {
  refs.countryListEl.innerHTML = '';
  refs.countryInfoEl.innerHTML = '';

  const searchQuery = e.target.value.trim();

  if (searchQuery === '') {
    refs.countryListEl.innerHTML = '';
    refs.countryInfoEl.innerHTML = '';
    return;
  }

  fetchCountries(searchQuery).then(onResolve).catch(console.log);

  function onResolve(countries) {
    console.log(countries);
    if (countries.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      return;
    } else if (countries.length > 1 && countries.length <= 10) {
      const markup = makeListMarkup(countries);
      refs.countryListEl.innerHTML = markup;
    } else if (countries.length === 1) {
      const markup = makeCountryCardMarkup(countries);
      refs.countryInfoEl.innerHTML = markup;
    }
  }
}
