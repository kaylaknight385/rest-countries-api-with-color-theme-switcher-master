//theme switch POPPOPPOP-gets elements from the html
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

//save current theme to local storage everytime u get on page ooooor default to light
let currentTheme = localStorage.getItem('theme') || 'light';

if (!themeToggle || !themeIcon || !themeText) {
    console.log("Theme elements not found - this is okay on detail page!");
} else {
    //apply saved theme on load
    html.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);

    //when button is clicked, it will cylce thru the themes
    themeToggle.addEventListener('click', () => {
        //it gon cycle thru light-dark-bunny-light
        if (currentTheme === 'light') {
            currentTheme = 'dark';
        } else if (currentTheme === 'dark') {
            currentTheme = 'bunny';
        } else {
            currentTheme = 'light';
        }

        html.setAttribute('data-theme', currentTheme);
        //jus saves to local storage 
        localStorage.setItem('theme', currentTheme);
        //updates the button icon/text
        updateThemeButton(currentTheme);
    });
}

function updateThemeButton(theme) {
    if (!themeIcon || !themeText) return;
    
    if (theme === 'light') {
        themeIcon.innerHTML = '&#127769;';
        themeText.textContent = 'Dark Mode';
    } else if (theme === 'dark') {
        themeIcon.innerHTML = '&#128048;';
        themeText.textContent = 'Bunny Mode';
    } else {
        themeIcon.innerHTML = '&#9728;';
        themeText.textContent = 'Light Mode';
    }
}

//API TIME. grabbing element from html
const countriesContainer = document.getElementById('countries-container');
const searchInput = document.getElementById('search-input');
const regionFilter = document.getElementById('region-filter');

if (countriesContainer && searchInput && regionFilter) {
    let allCountries = [];

    //fetching from rest countries API
    async function fetchCountries() {
        try {
            //making that api request
            const response = await fetch('https://restcountries.com/v3.1/alpha?codes=us,gb,fr,de,jp,cn,br,it,ru,ca,mx,au,in,za');

            if (!response.ok) throw new Error ('Failed to fetch them...');
            
            const data = await response.json();

            allCountries = data;

            displayCountries(allCountries);
        } catch (error) {
            //IF anything goes wrong. show this error and dont crash plzzzz <3
            countriesContainer.innerHTML = `<p class="loading">Error loading up them countries: ${error.message}</p>`;
        }
    }

    //display the countries but in grid
    function displayCountries(countries) {  
        // if no countries, show this 
        if (countries.length === 0) {
            countriesContainer.innerHTML = '<p class="loading">No countries found!</p>';
            return;
        }

        // create HTML for each country and join together
        countriesContainer.innerHTML = countries.map(country => {
            // format data so it looks like sumn
            const population = country.population.toLocaleString(); // adds commas so turns 10000 to 10,000
            const region = country.region || 'N/A'; //if region is missing use N/A as response 
            const capital = country.capital ? country.capital[0] : 'N/A'; //if they have a capital jus give me the first one, otherwise just use N/A
            
            // return HTML string for one country card
            return `
              <div class="country-card" data-country="${country.cca3}">
                <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
                <div class="country-info">
                  <h2>${country.name.common}</h2>
                  <p><strong>Population:</strong> ${population}</p>
                  <p><strong>Region:</strong> ${region}</p>
                  <p><strong>Capital:</strong> ${capital}</p>
                </div>
              </div>
            `;
        }).join(''); //.join('') jus combines array into one nice string

        //add click handlers to country cards so they go to detail page
        document.querySelectorAll('.country-card').forEach(card => {
            card.addEventListener('click', () => {
                const countryCode = card.getAttribute('data-country');
                window.location.href = `detail.html?country=${countryCode}`;
            });
        });
    }

    //search bar functionality
    searchInput.addEventListener('input', (e) => {
        //the search input that triggered (e)/the event. line is saying e.target was triggered on the users input, whatevr user types will be lowercase
        const searchItem = e.target.value.toLowerCase();
        //filtering
        const filtered = allCountries.filter(country =>
            country.name.common.toLowerCase().includes(searchItem) //filters by common country name, is lowercase, and checcks if the country name was included in user search.
        );
        //display filtered results-TAdA
        displayCountries(filtered);    
    });

    //the region filter
    regionFilter.addEventListener('change', (e) => {
        const selectedRegion = e.target.value;
        if (selectedRegion === '') {
            displayCountries(allCountries);
        } else {
            const filtered = allCountries.filter(country =>
                country.region === selectedRegion
            );
            displayCountries(filtered);
        }
    });

    //fetch countries when page loads. 
    fetchCountries();
}