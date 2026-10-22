/* const searchbox = document.querySelector("#twotabsearchtextbox");

if (searchbox) {
    searchbox.value = "iphone 18 pro";
}
 */
document.body.style.backgroundColor = "yellow";

// Change the cart text temporarily (refresh page to undo)
document.querySelector('#nav-cart-count').textContent = "99";

const searchBox = document.querySelector('#twotabsearchtextbox');

searchBox.addEventListener('input', (e) => {
  console.log('User typed:', e.target.value);
});


const cart = document.querySelector('#nav-cart-count');
cart.addEventListener('click', (e) => {
  e.preventDefault();  // stop navigation
  cart.style.backgroundColor = 'orange';
  alert('Cart clicked!');
});


const logo = document.querySelector('#nav-logo');

// Attributes
logo.getAttribute('href');           // "..."
logo.setAttribute('href', 'https://google.com');

// Classes
logo.classList.add('highlight');
logo.classList.remove('highlight');
logo.classList.toggle('highlight');
logo.classList.contains('highlight'); // true/false

// Inline styles
logo.style.border = '3px solid red';
logo.style.padding = '10px';


document.querySelectorAll('.nav-link').forEach(link => {
  link.style.color = 'red';
});


document.querySelector('#twotabsearchtextbox').value = 'mechanical keyboard';


setTimeout(() => {
  document.querySelector('#nav-search-submit-button').click();
}, 2000);

document.querySelectorAll('h2 span').forEach(el => {
  el.style.backgroundColor = 'yellow';
});


const btn = document.createElement('button');
btn.textContent = '↑ Top';
btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:12px 20px;border-radius:50%;background:#232f3e;color:white;border:none;cursor:pointer;z-index:9999';
btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(btn);