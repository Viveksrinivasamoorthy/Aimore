// 1. Single element by CSS selector (first match)
document.querySelector('#nav-search-bar-form')

// 2. All matching elements (NodeList)
document.querySelectorAll('.nav-link')

// 3. By ID (older, but common)
document.getElementById('nav-logo')

// 4. By class
document.getElementsByClassName('nav-link')

// 5. By tag
document.getElementsByTagName('a')


// Find the search box
const searchBox = document.querySelector('#twotabsearchtextbox');
console.log(searchBox);

// Find all nav links
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks.length);  // many



 
// Read value (for inputs)
searchBox.value;   // ""

// Set value
searchBox.value = "iphone 15";

// textContent — plain text (safe)
document.querySelector('#nav-logo').textContent;

// Change the cart text temporarily (refresh page to undo)
document.querySelector('#nav-cart-count').textContent = "99";