export function makeCountryCardMarkup(countries) {
  return countries
    .map(
      ({
        name: { official: countryName },
        flags: { svg, alt },
        capital,
        population,
        languages,
      }) => {
        return `
    <div class="title-wrapper">
        <img class="flag" src="${svg}" alt="${alt}"> 
        <h3 class="country-name">${countryName}</h3>
        </div>
    <ul class="info-list">
        <li>
          <span class="info-title">Capital:</span> ${capital}
        </li>
        
        <li>
          <span class="info-title">Population:</span> ${population}
        </li>
        <li>
          <span class="info-title">Languages:</span> ${Object.values(
            languages
          ).join(', ')}
        </li>
      </ul>
        `;
      }
    )
    .join('');
}

export function makeListMarkup(countries) {
  return countries
    .map(({ name: { official: countryName }, flags: { svg, alt } }) => {
      return `
      <li class="list-item">
        <img class="flag" src="${svg}" alt="${alt}">
        <p class="country-name">${countryName}</p>
      </li>
        `;
    })
    .join('');
}
