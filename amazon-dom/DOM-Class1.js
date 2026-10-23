// PRE-CLASS VERIFICATION SCRIPT — run on each page type and note results
const checks = {
  "Search box":        "#twotabsearchtextbox",
  "Search button":     "#nav-search-submit-button",
  "Logo":              "#nav-logo-sprites",
  "Cart link":         "#nav-cart",
  "Account link":      "#nav-link-accountList",
  "Category dropdown": "#searchDropdownBox",
  "Result container":  "div[data-component-type='s-search-result']",
  "Result with ASIN":  "div[data-asin]",
  "Result title h2":   "div[data-component-type='s-search-result'] h2",
  "Result title span": "div[data-component-type='s-search-result'] h2 span",
  "Result link":       "div[data-component-type='s-search-result'] h2 a",
  "Result image":      "div[data-component-type='s-search-result'] img.s-image",
  "Product page title":"#productTitle"
};
const report = Object.entries(checks).map(([purpose, sel]) => ({
  purpose,
  selector: sel,
  count: document.querySelectorAll(sel).length
}));
console.table(report);

console.log(document.body.children.length);
console.log(document.body.firstElementChild);


const box = document.querySelector("#twotabsearchtextbox");
console.log(box);
console.log(box.tagName, box.id, box.className, box.getAttribute("name"));


// Both return the same element (if the ID exists).
document.getElementById("twotabsearchtextbox")
document.querySelector("#twotabsearchtextbox")


document.querySelector("input[type='text']")
const len = document.querySelectorAll("a").length
console.log("length of a:",len)


// Part C — Search results page. First: type headphones in the search box 
// // and press Enter (or go to https://www.amazon.in/s?k=headphones). Wait for results to load.
document.querySelectorAll("div[data-component-type='s-search-result']").length
document.querySelectorAll("div[data-asin]").length

const results = document.querySelectorAll("div[data-component-type='s-search-result']");
console.log("Products found:", results.length);

// to check the results go to elements and check for selector[data-]


const first = document.querySelector("div[data-component-type='s-search-result']");
const all = document.querySelectorAll("div[data-component-type='s-search-result']");

console.log(first);          // one element
console.log(all);            // NodeList
console.log(all.length);

all.forEach((item, i) => {
  if (i < 3) console.log(i + 1, item.getAttribute("data-asin"));
});

const asins = Array.from(all).map(el => el.getAttribute("data-asin"));
console.log(asins);

const nonEmpty = Array.from(all).filter(el => el.getAttribute("data-asin"));
console.log(nonEmpty.length);



/*
Topic 6 — Reading DOM Elements
Explanation
Property	Meaning
innerText	Text a user sees (respects CSS visibility, line breaks)
textContent	All text in the DOM, including hidden
innerHTML	HTML markup inside the element, as a string
value	Current contents of an input
tagName	Uppercase tag name
id	The id attribute
className	The class attribute string


Page: search results page.
Action: type "laptop" in the search box on the home page, press Enter, and wait.
*/


// 1) INPUT — value
const box1 = document.querySelector("#twotabsearchtextbox");
console.log("value:", box1.value);

// 2) RESULT TITLE — text
const item = document.querySelector("div[data-component-type='s-search-result']");
const h2 = item.querySelector("h2");
console.log("tag:", h2.tagName);
console.log("innerText:", h2.innerText);
console.log("textContent:", h2.textContent);
console.log("innerHTML:", h2.innerHTML);

/*
What to Observe

Compare innerText vs textContent vs innerHTML for the same element. 