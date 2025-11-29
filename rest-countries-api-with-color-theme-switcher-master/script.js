//theme switch POPPOPPOP
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

//save current theme so everytime u get on page its that theme ooooor default to light
let currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

//toggle click handler
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
    localStorage.setItem('theme', currentTheme,)
    updateThemeButton(currentTheme)

});

function updateThemeButton(theme) {
    if (theme === 'light')
}