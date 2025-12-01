//theme switch POPPOPPOP-gets elements from the html
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

//save current theme to local storage everytime u get on page ooooor default to light
let currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

//when button is clicked, it will cylce thru the themes
themeToggle.addEventListener('click', () => {
    //it gon cycle thru light-dark-bunny-light
    if (currentTheme === 'light') {
        currentTheme = 'dark'
    } else if (currentTheme === 'dark') {
        currentTheme = 'bunny';
    } else {
        currentTheme = 'light';
    }

    html.setAttribute(data-theme, currentTheme);
    //jus saves to local storage 
    localStorage.setItem('theme', currentTheme,)
    //updates the button icon/text
    updateThemeButton(currentTheme)
});

function updateThemeButton(theme) {
    if (theme === 'light') {
        themeIcon.textContent = '&#127769;';
        themeText.textContent = 'Dark Mode';
    } else if (theme === 'dark') {
        themeIcon.textContent = '&#128048;';
        themeText.textContent = 'Bunny Mode'
    } else {
        themeIcon.textContent = '&#9728;';
        themeText.textContent = 'Light Mode'
    }
}

//API TIME. Grabbing element from html
const countriesContainer = document.getElementById('countries-container');
const searchInput = document.getElementById('search-input');
const regionFilter = document.getElementById('region-filter');

let allCountries = []

//fetching from rest countries API
async function fetchCountries() {
    try {
        //making that api request
        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) throw new Error ('Failed to fetch them countries...');
        
        const data = await response.json();

        allCountries = data;

        displayCountries(allCountries);
    } catch (error) {
        //IF anything goes wrong. show this error and dont crash plzzzz <3
        countriesContainer.innerHTML = `<p class=`
    }
}