# REST Countries Explorer

A responsive web application that fetches country data from the REST Countries API and displays it with search, filter, and theme customization features.

## Features

- **Search**: Find countries by name in real-time
- **Filter**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- **Three Themes**: Light mode, Dark mode, and BunnyKay mode (Y2K aesthetic!)
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive**: Hover effects and smooth animations
- **Detail Page**: Click any country to see full details
- **Border Navigation**: Click border countries to explore neighbors
- **Theme Persistence**: Your theme choice is saved in localStorage

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Custom properties (CSS variables), Grid, Flexbox, animations
- **Vanilla JavaScript**:  async/await, Promises, fetch API
- **REST Countries API**: Real-time country data
- **LocalStorage**: Theme persistence

## API Integration

This project uses the [REST Countries API v3.1](https://restcountries.com/) to fetch:
- Country names, flags, populations
- Regions, capitals, currencies
- Languages, native names, borders
- And more detailed information

##  Themes

### Light Mode
Clean, minimal design with a white background and dark text.

### Dark Mode
Dark blue background inspired by the original design specifications.

### Bunny Mode 
A custom Y2K-inspired theme featuring:
- Hot pink gradients
- Floating pixel graphics
- Sparkly text effects
- Pink rainbow borders
- Custom cursor


##  Project Structure
```
rest-countries-explorer/
├── index.html          # Main homepage
├── detail.html         # Country detail page
├── style.css           # All styling (themes, responsive design)
├── script.js           # Homepage logic (API, search, filter)
├── detail.js           # Detail page logic
└── README.md           # Project documentation
```

## How to Run

1. Clone this repository
2. Open `index.html` in your browser
3. That's it! 

## Key Features Explained

### Search Functionality
Type in the search box to filter countries in real-time. Uses JavaScript's `.filter()` method to search through country names.

### Region Filter
Select a region from the dropdown to see only countries from that continent. Filters the data without making new API calls.

### Theme Switching
Click the theme button to cycle through Light → Dark → BunnyKay → Light. The theme is saved to localStorage so it persists across sessions.

### Detail Page
Click any country card to navigate to a detail page showing:
- Full country information
- Native name, currencies, languages
- Top-level domain
- Clickable border countries for easy navigation


## Screenshots

<img width="1891" height="913" alt="image" src="https://github.com/user-attachments/assets/990e7845-e60b-4d26-be5a-49cf7d8c8fc3" />

<img width="1825" height="884" alt="image" src="https://github.com/user-attachments/assets/8ac17d61-7db9-4985-82d4-d14c8ffe7cd6" />

<img width="1908" height="900" alt="image" src="https://github.com/user-attachments/assets/cb4cca7c-2f49-4bd9-8047-7d6786f70c85" />




## Credits

- **REST Countries API**: [https://restcountries.com/](https://restcountries.com/)
- **Pixel Graphics**: [https://sadthemes.tumblr.com/smolpxl](https://sadthemes.tumblr.com/smolpxl)
- **Google Fonts**: Nunito Sans
- **Design Inspiration**: Frontend Mentor REST Countries challenge

##  Author

Built with determination, fighting food poisoning, and lots of gatorrade by Kayla Knight

