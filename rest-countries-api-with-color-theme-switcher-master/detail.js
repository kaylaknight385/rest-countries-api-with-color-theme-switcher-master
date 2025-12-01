// THEME SWITCHING (same as script.js)

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

let currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

//theme toggle click handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (currentTheme === 'light') {
        currentTheme = 'dark';
      } else if (currentTheme === 'dark') {
        currentTheme = 'bunny';
      } else {
        currentTheme = 'light';
      }
      
      html.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateThemeButton(currentTheme);
    });
}


//honesyl copy and pasted from main js ile
function updateThemeButton(theme) {
    if (!themeIcon || !themeText) return;
    
    if (theme === 'light') {
        themeIcon.innerHTML = '&#127769';
        themeText.textContent = 'Dark Mode';
    } else if (theme === 'dark') {
        themeIcon.innerHTML = '&#128048';
        themeText.textContent = 'Bunny Mode'
    } else {
        themeIcon.innerHTML = '&#9728;';
        themeText.textContent = 'Light Mode'
    }
}

//da back button
const backButton = document.getElementById('back-button');
if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
}


//getting url parameters
const urlParams = new URLSearchParams(window.location.search);
const countryCode = urlParams.get('country');


//fetching the coutnry details
const detailContainer = document.getElementById('country-detail');

async function fetchCountryDetails() {
  if (!countryCode) {
    detailContainer.innerHTML = '<p class="loading">No country selected!</p>';
    return;
  }

  try {
    // FIXED: correct API endpoint without duplicate country codes
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=us,gb,fr,de,jp,cn,br,it,ru,ca,mx,au,in,za/${countryCode}`);
    if (!response.ok) throw new Error('Country not found');
    
    const data = await response.json();
    const country = data[0];
    
    displayCountryDetails(country);
    
  } catch (error) {
    detailContainer.innerHTML = `<p class="loading">Error: ${error.message}</p>`;
  }
}


//diplay the countries
function displayCountryDetails(country) {
  // same a js formatting the data
  const population = country.population.toLocaleString();
  const nativeName = country.name.nativeName 
    ? Object.values(country.name.nativeName)[0].common 
    : country.name.common;
  const currencies = country.currencies 
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : 'N/A';
  const languages = country.languages 
    ? Object.values(country.languages).join(', ')
    : 'N/A';
  const topLevelDomain = country.tld ? country.tld.join(', ') : 'N/A';
  const subregion = country.subregion || 'N/A';
  const capital = country.capital ? country.capital[0] : 'N/A';

  // border countries html
  let borderHTML = '';
  if (country.borders && country.borders.length > 0) {
    borderHTML = `
      <div class="border-countries">
        <strong>Border Countries:</strong>
        <div class="border-tags" id="border-tags">
          ${country.borders.map(border => 
            `<a href="detail.html?country=${border}" class="border-tag">${border}</a>`
          ).join('')}
        </div>
      </div>
    `;
  }

  // create htmllll
  detailContainer.innerHTML = `
    <img src="${country.flags.svg || country.flags.png}" alt="Flag of ${country.name.common}" class="detail-flag">
    
    <div class="detail-info">
      <h2>${country.name.common}</h2>
      
      <div class="detail-columns">
        <div>
          <p><strong>Native Name:</strong> ${nativeName}</p>
          <p><strong>Population:</strong> ${population}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Sub Region:</strong> ${subregion}</p>
          <p><strong>Capital:</strong> ${capital}</p>
        </div>
        
        <div>
          <p><strong>Top Level Domain:</strong> ${topLevelDomain}</p>
          <p><strong>Currencies:</strong> ${currencies}</p>
          <p><strong>Languages:</strong> ${languages}</p>
        </div>
      </div>
      
      ${borderHTML}
    </div>
  `;
}

// run dat PAGEEEE
fetchCountryDetails();