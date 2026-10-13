document.title
// "Amazon.in"

document.body
// shows the <body> element

document.querySelectorAll('*').length
// count of all elements on page


// Selecting Elements

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