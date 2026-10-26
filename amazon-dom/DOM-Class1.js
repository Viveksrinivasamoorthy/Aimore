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


// 1. Gather all unique attribute names present across any of the result elements
const attributeNames = new Set();

all.forEach(el => {
  // el.attributes is a NamedNodeMap containing all attributes on the element
  Array.from(el.attributes).forEach(attr => {
    attributeNames.add(attr.name);
  });
});

console.log("--- All Unique Attribute Names Found ---");
console.log(Array.from(attributeNames));


// 2. Map out a detailed breakdown showing attribute names and their sample values for each item
const elementDetails = Array.from(all).map((el, index) => {
  const attrs = {};
  Array.from(el.attributes).forEach(attr => {
    attrs[attr.name] = attr.value;
  });
  
  return {
    index: index + 1,
    tag: el.tagName.toLowerCase(),
    attributes: attrs
  };
});

console.log("--- Detailed Element Attributes ---");
console.log(elementDetails);


const box = document.querySelector("#twotabsearchtextbox");
console.log(box);
console.log(box.tagName, box.id, box.className, box.getAttribute("name"));


const box1 = document.querySelector("#twotabsearchtextbox");
box1.value = "wireless mouse";
console.log(box1.value);


const box2 = document.querySelector("#twotabsearchtextbox");
box2.style.fontSize = "30px";
box2.style.border = "3px solid red";



const box3 = document.querySelector("#twotabsearchtextbox");
box3.focus();                    // cursor goes into the box
box3.value = "keyboard";
box3.blur();                     // focus leaves the box

// Optional: submit the search
document.querySelector("#nav-search-submit-button").click();


