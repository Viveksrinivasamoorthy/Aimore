# DOM + Browser Console Course for Playwright Students (2 Days × 2 Hours)

> **Verification status (read first):** Every Amazon.in selector below is **UNVERIFIED**. They are widely used, long-lived selectors, but they were NOT tested against the live DOM when this guide was written. Before class, run the **Pre-Class Verification Script** (Section 0). It checks every selector and tells you which to keep or replace. Update the table at the end with the real results.

---

# 0. PRE-CLASS CHECKLIST (instructor, 15 minutes)

1. Open Chrome/Edge in a normal window (not headless). Open `https://www.amazon.in`. Dismiss any location/cookie popup.
2. Do not log in (keeps the DOM the same as the students' view).
3. If a CAPTCHA appears, solve it once or try again later.
4. Paste the script below into Console **on the home page**, then repeat it on a **search results page** (`https://www.amazon.in/s?k=headphones`) and a **product page** (click the first result).

```javascript
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
```

**How to read it:** `count > 0` means that selector works on this page type (it's expected to be 0 for result selectors on the home page). Anything that is 0 where it should be > 0 → use the Fallback Method (Section F) and replace it in the guide.

**Also check:** `document.querySelector("div[data-component-type='s-search-result'] h2 a")?.getAttribute("href")` returns a path. Where the `<a>` sits relative to `<h2>` has changed over time (the link has wrapped the `<h2>`, and has sat inside it), so test both `h2 a` and `a:has(h2)` if needed.

**Labels used in this guide**

- **Unverified – historically stable:** ID-based or `data-*` selectors that have lasted for years. Check them anyway.
- **Unverified – dynamic:** class names that look auto-generated or layout-specific. Likely to break.
- **Demonstration-only:** elements that are created by students (always works).

---

# DAY 1 — DOM & SELECTORS

## Learning Objectives

By the end of Day 1, students can:

- explain HTML vs DOM
- use `document`, `document.body`, `document.title`, `document.URL`
- inspect elements and read tag/ID/class/attributes in DevTools
- select with `getElementById`, `querySelector`, `querySelectorAll`
- read `innerText`, `textContent`, `innerHTML`, `value`, `tagName`, `id`, `className`
- safely modify text/HTML on an element they created

## Class Timeline (120 min)

| Min | Topic |
|---|---|
| 0–15 | 1. What is the DOM |
| 15–25 | 2. The `document` object |
| 25–45 | 3. Console & DOM inspection |
| 45–70 | 4. Selectors |
| 70–80 | 5. `querySelector` vs `querySelectorAll` |
| 80–95 | 6. Reading properties |
| 95–105 | 7. Text & HTML manipulation |
| 105–120 | 8. Exercise |

---

## Topic 1 — What is the DOM?

### Explanation

- **HTML** is text the server sends. **DOM** is the live object tree the browser builds from it. JavaScript works with the DOM, not the text.
- Every tag becomes an object (a *node*) with properties (`id`, `className`, `innerText`) and methods (`click()`, `getAttribute()`).
- Playwright drives a real browser, so it interacts with this same tree.

Tiny example to write on the board:

```html
<body>
  <h1 id="title">Hello</h1>
  <ul class="list"><li>A</li><li>B</li></ul>
</body>
```

```text
document
 └─ html
     └─ body
         ├─ h1#title        ("Hello")
         └─ ul.list
             ├─ li  ("A")
             └─ li  ("B")
```

### Amazon Demonstration

- **Page/context:** Amazon.in home page.
- **Action first:** Right-click on the search box → Inspect.
- **Show:** the highlighted `<input>` in the Elements tab and its parent chain.
- **Console:**

```javascript
document.body.children.length
```

### Verified Selector

None needed yet (uses only `document.body`). *Verification: not applicable.*

### Code

```javascript
console.log(document.body.children.length);
console.log(document.body.firstElementChild);
```

### Expected Output

A number (varies) and an element such as an `<a>`, `<div>` or `<script>`. The exact element depends on Amazon's current page.

### What to Observe

You are reading a live tree. Ask students: "Is this number the same as in the page's View Source?" (Usually different — scripts add elements.)

### Instructor Notes

Show **View Source** vs **Elements** tab once. The difference is the best HTML-vs-DOM demonstration.

### Common Mistakes

- Thinking DOM = HTML file.
- Running code before the page finishes loading → `null` results.

---

## Topic 2 — The `document` Object

### Explanation / Amazon Demonstration

- **Context:** Amazon.in home page. **Action:** none (page loaded).
- Run each line separately.

### Verified Selector

None. Uses built-in properties only (these always exist).

### Code

```javascript
document                      // the whole document
document.documentElement      // <html> element
document.head                 // <head>
document.body                 // <body>
document.title                // page title string
document.URL                  // current URL string
```

### Expected Output

| Line | Returns |
|---|---|
| `document` | `#document` (expandable) |
| `documentElement` | `<html …>` |
| `head` / `body` | `<head>…</head>` / `<body>…</body>` |
| `title` | A string — Amazon.in's current title |
| `URL` | `"https://www.amazon.in/…"` |

### What to Observe

Elements print as expandable DOM nodes; `title` and `URL` print as plain strings. Hover over a printed element → the page highlights it.

### Instructor Notes

Playwright connection: `await page.title()` and `page.url()` are the same ideas.

### Common Mistakes

- `document.Title` or `document.url` (case matters).
- Expecting the value to update by itself after navigation (re-run).

---

## Topic 3 — Browser Console & DOM Inspection

### Explanation

```text
Elements tab → see and inspect the structure (visual / HTML)
Console      → run JavaScript against it
```

Flow students must master: **Inspect → read attributes → write selector → test in Console**.

### Amazon Demonstration

- **Page:** Amazon.in home page.
- **Steps:**
  1. Right-click the search box → Inspect.
  2. In Elements, note: tag (`input`), `id`, `class`, `type`, `name`, `placeholder`.
  3. Hover the parent nodes to see parent/child relationships.
  4. Right-click the element in Elements → *Store as global variable* (creates `temp1`).
  5. In Console: `temp1`

### Verified Selector

`#twotabsearchtextbox` — **Unverified – historically stable.** ID-based. *Why chosen:* IDs are unique and the quickest to teach. *Fallback:* `input[type='text'][name='field-keywords']` or `input[placeholder*='Search']`.

### Code

```javascript
const box = document.querySelector("#twotabsearchtextbox");
console.log(box);
console.log(box.tagName, box.id, box.className, box.getAttribute("name"));
```

### Expected Output

The `<input …>` element is printed, then `INPUT`, the id, its class string, and the `name` attribute.

### What to Observe

Compare what's in the Elements tab with what Console prints. If `box` is `null`, the selector is wrong or the DOM differs — teach this immediately (see Section F).

### Instructor Notes

Show `Ctrl+Shift+C` (element picker) and `$0` (the currently selected element in Elements tab). `$0` is a valuable shortcut that works with no selector at all.

### Common Mistakes

- Looking at the wrong element (a wrapper div, not the input).
- Selecting an element inside an iframe (console runs in the top frame by default).

---

## Topic 4 — DOM Selectors

### Explanation

| Selector type | Syntax | Example |
|---|---|---|
| ID | `#id` | `#twotabsearchtextbox` |
| Class | `.class` | `.s-image` |
| Tag | `tag` | `h2` |
| Attribute | `[attr='v']` | `[data-component-type='s-search-result']` |
| Descendant | `A B` | `div h2` |
| Child | `A > B` | `h2 > a` |
| Multiple conditions | `tag.class[attr]` | `input[type='text']` |

First match → `querySelector`. All matches → `querySelectorAll`.

### Amazon Demonstration

**Part A — IDs (home page)**

```javascript
document.getElementById("twotabsearchtextbox")
document.querySelector("#twotabsearchtextbox")
```

Both return the same element (if the ID exists).

**Part B — Attribute + tag (home page)**

```javascript
document.querySelector("input[type='text']")
document.querySelectorAll("a").length
```

**Part C — Search results page.** First: type `headphones` in the search box and press Enter (or go to `https://www.amazon.in/s?k=headphones`). Wait for results to load.

```javascript
document.querySelectorAll("div[data-component-type='s-search-result']").length
document.querySelectorAll("div[data-asin]").length
```

### Verified Selector

| Selector | Status |
|---|---|
| `#twotabsearchtextbox` | Unverified – historically stable |
| `div[data-component-type='s-search-result']` | Unverified – historically stable (data attribute), check each term |
| `div[data-asin]` | Unverified – broad: includes non-product blocks too (count may be higher) |

*Why chosen:* `data-*` and `id` attributes are intentionally for identification and change less often than styling classes.

### Code

```javascript
const results = document.querySelectorAll("div[data-component-type='s-search-result']");
console.log("Products found:", results.length);
```

### Expected Output

`Products found: N`, where N is greater than 0 (often between 15 and 60+ depending on layout, region and sponsored blocks).

### What to Observe

`div[data-asin]` often returns **more** than the precise selector. Ask "why?" → because other containers also carry `data-asin`, which illustrates why selector precision matters (a core Playwright lesson).

### Instructor Notes

Count differences are a feature, not a bug. Do not promise a specific number.

### Common Mistakes

- Forgetting `#` or `.`.
- Mixing quotes incorrectly: `"div[data-asin="x"]"`.
- Running results selectors on the home page.

---

## Topic 5 — `querySelector()` vs `querySelectorAll()`

### Explanation

```text
querySelector     → ONE element or null
querySelectorAll  → NodeList (possibly empty, never null)
```

NodeList supports `forEach` and `.length` but **not** `map`/`filter` directly → wrap with `Array.from()`.

### Amazon Demonstration

- **Page:** search results page (keyword `headphones`).
- **Selector:** `div[data-component-type='s-search-result']` (Unverified – historically stable).

### Code

```javascript
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
```

### Expected Output

One element; a `NodeList(N)`; three lines like `1 B0XXXXXXXX`; an array of ASIN strings; a count.

### What to Observe

`all` prints as `NodeList`, not `Array`. Try `all.map(...)` → TypeError. That error is the lesson.

### Instructor Notes

Playwright: `page.locator(sel)` ≈ `querySelectorAll`-like (multiple), `.first()` ≈ `querySelector`. Locators never return `null`.

### Common Mistakes

- Calling `.map` directly on NodeList.
- Using `querySelector` and expecting several results.
- Forgetting that `getAttribute` returns `null` when missing.

---

## Topic 6 — Reading DOM Elements

### Explanation

| Property | Meaning |
|---|---|
| `innerText` | Text a user **sees** (respects CSS visibility, line breaks) |
| `textContent` | All text in the DOM, **including hidden** |
| `innerHTML` | HTML markup inside the element, as a string |
| `value` | Current contents of an input |
| `tagName` | Uppercase tag name |
| `id` | The id attribute |
| `className` | The class attribute string |

### Amazon Demonstration

- **Page:** search results page.
- **Action:** type "laptop" in the search box on the home page, press Enter, and wait.

### Code

```javascript
// 1) INPUT — value
const box = document.querySelector("#twotabsearchtextbox");
console.log("value:", box.value);

// 2) RESULT TITLE — text
const item = document.querySelector("div[data-component-type='s-search-result']");
const h2 = item.querySelector("h2");
console.log("tag:", h2.tagName);
console.log("innerText:", h2.innerText);
console.log("textContent:", h2.textContent);
console.log("innerHTML:", h2.innerHTML);
```

### Expected Output

- `value:` the typed word (e.g. `laptop`, since the search box usually keeps the term).
- `tag: H2`
- `innerText` / `textContent`: the product title text (may differ slightly in spacing).
- `innerHTML`: markup such as a nested `<a>` and/or `<span>`.

### What to Observe

Compare `innerText` vs `textContent` vs `innerHTML` for the same element. Explain: `value` is for **inputs only** (on a `<div>` it is `undefined`).

### Verified Selector

`h2` inside the result container — **Unverified – historically stable** tag, but the nested structure under `h2` can change. *Fallback:* in the Elements tab, find the product name, copy the nearest tag chain, and test it.

### Instructor Notes

Playwright connection: `innerText()`, `textContent()`, `inputValue()`.

### Common Mistakes

- Using `.value` on a non-input.
- Expecting `innerText` to include hidden text.
- Calling `h2.innerText()` as a function (it's a property in the DOM; in Playwright it's a method).

---

## Topic 7 — Text & HTML Manipulation

### Explanation

```text
innerText → sets plain text
innerHTML → sets HTML content (parsed as markup)
```

Changes affect only this browser tab; a refresh resets them. To avoid breaking Amazon, **create your own safe element first** (full creation is taught on Day 2, but a one-line preview is fine here).

### Amazon Demonstration

- **Page:** any Amazon.in page.

### Code

```javascript
const demo = document.createElement("div");
demo.id = "demo-box";
demo.style.cssText = "padding:10px;background:#ffffcc;position:fixed;top:10px;right:10px;z-index:99999";
document.body.appendChild(demo);

demo.innerText = "<b>Hello</b>";     // shows the tags literally
demo.innerText = "Hello from console";

demo.innerHTML = "<b>Hello</b> <i>from HTML</i>";   // renders bold/italic
```

### Expected Output

A yellow box appears at the top-right: first showing `<b>Hello</b>` as visible text, then plain text, then rendered bold + italic.

### What to Observe

Same string, different result: `innerText` treats it as text; `innerHTML` treats it as markup.

### Instructor Notes

Mention briefly that `innerHTML` with untrusted input is a security risk (XSS). Do not go deep.

### Common Mistakes

- Overwriting a real Amazon element and thinking the site is broken (refresh fixes it).
- Using `innerHTML` when plain text is enough.

---

## Topic 8 / Day 1 Exercises

### Student Task

On a search results page for any keyword:

1. Inspect one product card.
2. Find the selector for the product container, and test it.
3. Select all containers; print the count.
4. Loop through the first 5; print `index`, `data-asin`, and the title text.

### Instructor Solution

```javascript
const items = document.querySelectorAll("div[data-component-type='s-search-result']");
console.log("Count:", items.length);

items.forEach((item, i) => {
  if (i >= 5) return;
  const title = item.querySelector("h2");
  console.log(i + 1, "|", item.getAttribute("data-asin"), "|", title ? title.innerText : "(no title)");
});
```

### Expected Output

```text
Count: N
1 | B0XXXXXXXX | <product title>
...
5 | ...
```

### Explanation

Container selector → select all → loop → select inside each (scoped `item.querySelector`). The `title ? … : …` check guards against missing elements (some cards, such as ad banners, may lack an `h2`).

### Common Mistakes

- `document.querySelector` inside the loop (returns the same first title every time) instead of `item.querySelector`.
- Not handling `null`.

## Day 1 Homework

1. On a different search term, print the count and first 10 ASINs.
2. Use `Array.from(...).filter` to keep only cards that have a title.
3. Compare `innerText` and `textContent` for 3 titles; note any difference.
4. Find 3 selectors on the home page by yourself (using the Section F method) and record whether each returns an element.

---

# DAY 2 — DOM MANIPULATION & AUTOMATION

## Learning Objectives

- Modify text, HTML, value, style
- Create and remove elements
- Use `classList` and attribute methods
- Extract structured data from search results
- Perform safe interactions (`click`, `focus`, `blur`)
- Map each DOM call to its Playwright equivalent

## Class Timeline (120 min)

| Min | Topic |
|---|---|
| 0–15 | 1. Revision quiz |
| 15–25 | 2–3. Manipulation + style |
| 25–40 | 4–5. Create & remove |
| 40–50 | 6. classList |
| 50–65 | 7. Attributes |
| 65–90 | 8. Product DOM exercise |
| 90–100 | 9. Safe interactions |
| 100–115 | 10. DOM → Playwright |
| 115–120 | Final project briefing |

---

## Topic 1 — Day 1 Revision (Amazon)

Set the context: **search results page for "headphones"** (unless stated).

| # | Question | Answer |
|---|---|---|
| 1 | Print the page title and URL. | `console.log(document.title, document.URL)` |
| 2 | Select the search box and print its `id`. | `document.querySelector("#twotabsearchtextbox").id` |
| 3 | How many result containers are there? | `document.querySelectorAll("div[data-component-type='s-search-result']").length` |
| 4 | Print the `data-asin` of the first one. | `document.querySelector("div[data-component-type='s-search-result']").getAttribute("data-asin")` |
| 5 | Print the first title's text. | `document.querySelector("div[data-component-type='s-search-result'] h2").innerText` |
| 6 | Print the search box's current value. | `document.querySelector("#twotabsearchtextbox").value` |
| 7 | Convert the NodeList of results to an array of ASINs. | `Array.from(document.querySelectorAll("div[data-component-type='s-search-result']")).map(e => e.getAttribute("data-asin"))` |
| 8 | Why does `.map` fail on a NodeList? | NodeList isn't an Array; use `Array.from`. |

All selectors: **Unverified – historically stable.**

---

## Topic 2 — DOM Element Manipulation

### Explanation

Assigning to `innerText`, `innerHTML`, `value` changes the live DOM immediately (visible on screen). It does **not** change anything on Amazon's server.

### Amazon Demonstration

- **Page:** Amazon.in home page.
- **Action:** none.

### Code

```javascript
const box = document.querySelector("#twotabsearchtextbox");
box.value = "wireless mouse";
console.log(box.value);
```

### Expected Output

The search box visibly shows `wireless mouse`; Console prints it.

### What to Observe

Typing programmatically is the same as the user typing — but nothing is submitted yet. (The site's own scripts may not detect a programmatically set value as "typing"; that's why Playwright's `fill()` exists.)

### Verified Selector

`#twotabsearchtextbox` — Unverified – historically stable. *Fallback:* `input[name='field-keywords']`.

### Common Mistakes

- Expecting suggestions to appear (they respond to real input events).

---

## Topic 3 — Minimal Style Manipulation

### Code

```javascript
const box = document.querySelector("#twotabsearchtextbox");
box.style.fontSize = "30px";
box.style.border = "3px solid red";
```

### Expected Output

The search text becomes large and the box gets a red border.

### What to Observe

JavaScript can change any element. That's the whole point — **no CSS teaching**. Highlighting is also a handy debugging technique (`el.style.border = "3px solid red"` to confirm what a selector matched).

### Common Mistakes

- Using `font-size` instead of `fontSize` (camelCase in JS).
- Forgetting units (`"30px"`).

---

## Topic 4 — Creating Elements

### Explanation

```text
create → configure → append → DOM
```

### Code (safe, own elements)

```javascript
const box = document.createElement("div");
box.id = "my-box";
box.style.cssText = "position:fixed;top:10px;left:10px;z-index:99999;padding:10px;background:#e0f0ff;border:1px solid #333";

const p = document.createElement("p");
p.innerText = "Created with JavaScript";

const btn = document.createElement("button");
btn.innerText = "Click me";
btn.addEventListener("click", () => { p.innerText = "Button clicked!"; });

box.appendChild(p);
box.appendChild(btn);
document.body.appendChild(box);
```

### Expected Output

A blue panel appears at the top-left with a paragraph and a button. Clicking changes the paragraph text.

### What to Observe

Elements that exist in memory aren't visible until appended.

### Instructor Notes

`addEventListener` is a small preview (one line). Say: "this is how pages react to clicks — and why `click()` triggers behavior".

### Common Mistakes

- Creating but never appending.
- Appending the same element twice (it moves, not duplicates).

---

## Topic 5 — Removing Elements

### Code

```javascript
document.getElementById("my-box").remove();
```

### Expected Output

The blue panel disappears. `document.getElementById("my-box")` now returns `null`.

### Instructor Notes

Only remove elements the students created. (Removing Amazon's elements is harmless client-side but confusing — avoid it.)

### Common Mistakes

- Removing before it exists → `null.remove()` TypeError. Teach: `document.getElementById("my-box")?.remove()`.

---

## Topic 6 — CSS Class Manipulation

### Amazon-safe demonstration (using our own element)

```javascript
const el = document.createElement("div");
el.id = "class-demo";
el.innerText = "Class demo";
el.style.cssText = "position:fixed;bottom:10px;left:10px;z-index:99999;padding:10px";
document.body.appendChild(el);

// Define a style for the demo class
const st = document.createElement("style");
st.innerText = ".hl { background: yellow; font-weight: bold; }";
document.head.appendChild(st);

el.classList.add("hl");
console.log(el.classList.contains("hl"));  // true
el.classList.toggle("hl");
console.log(el.classList.contains("hl"));  // false
el.classList.toggle("hl");
el.classList.remove("hl");
console.log(el.className);
```

### Expected Output

The box turns yellow/bold on `add`, back to normal on `toggle`, and so on; Console prints `true`, `false`, and a final empty/original `className`.

### Optional Amazon observation

```javascript
document.querySelector("div[data-component-type='s-search-result']").className
```

(Unverified – dynamic; class strings on Amazon are layout-dependent and often long.) Use this to **show why classes alone are fragile for automation**.

### Common Mistakes

- Using `className = "x"` and wiping other classes.
- Writing `classList.add(".hl")` (no dot in the class name).

---

## Topic 7 — HTML Attributes

### Explanation

| Attribute | Why it matters in automation |
|---|---|
| `id` | Unique, ideal locator |
| `class` | Styling — often unstable |
| `name` | Common on form inputs |
| `href` | Link destination |
| `src` | Image source |
| `aria-*` | Accessibility — good for role/label locators |
| `data-*` | Developer-provided hooks, often most stable |

### Amazon Demonstration

- **Page:** search results page (keyword `headphones`).
- **Action:** Inspect a result's link and image; in the Elements tab note each attribute.

### Code

```javascript
const item = document.querySelector("div[data-component-type='s-search-result']");

// data-* attribute on container
console.log("asin:", item.getAttribute("data-asin"));
console.log("has data-asin:", item.hasAttribute("data-asin"));

// link
const link = item.querySelector("h2 a") || item.querySelector("a");
console.log("href:", link && link.getAttribute("href"));

// image
const img = item.querySelector("img.s-image") || item.querySelector("img");
console.log("src:", img && img.getAttribute("src"));
console.log("alt:", img && img.getAttribute("alt"));

// set / remove on OUR OWN marker
item.setAttribute("data-demo", "selected");
console.log(item.getAttribute("data-demo"));
item.removeAttribute("data-demo");
console.log(item.hasAttribute("data-demo"));
```

### Expected Output

`asin: B0…`, `has data-asin: true`, an `href` starting with `/` (relative) or `https://`, an image `src` URL, `alt` text, then `selected`, then `false`.

### Verified Selector

| Selector | Status |
|---|---|
| `div[data-component-type='s-search-result']` | Unverified – historically stable |
| `h2 a` | Unverified – structure has varied (link may wrap or sit inside `h2`) |
| `img.s-image` | Unverified – dynamic (class name) |

*Fallbacks:* `a[href*='/dp/']` (product links typically contain `/dp/`, unverified), `img` (first image in the card).

### What to Observe

`getAttribute("href")` gives the raw (often relative) value; `link.href` gives the full resolved URL. Compare them.

### Common Mistakes

- Reading `element.href` vs `getAttribute("href")` and not noticing the difference.
- Attribute missing → `null` (guard with `?.` or `&&`).

---

## Topic 8 — Amazon Product DOM Exercise (major)

### Context

1. Open `https://www.amazon.in`.
2. Search for `headphones`, press Enter, and wait for results.
3. Do **not** scroll yet (keep it simple); optionally scroll once to load lazy content.

### Step A — Discover (students do this)

1. Right-click a product title → Inspect.
2. Walk **up** the tree until you find the element that wraps the *whole* card (look for `data-asin` / `data-component-type`).
3. Walk **down** to find the title, link, image.
4. Build the selectors and test:

```javascript
document.querySelectorAll("div[data-component-type='s-search-result']").length
```

If 0, follow Section F.

### Step B — Extract

```javascript
const cards = document.querySelectorAll("div[data-component-type='s-search-result']");
const rows = [];

cards.forEach((card, i) => {
  const titleEl = card.querySelector("h2");
  const linkEl  = card.querySelector("h2 a") || card.querySelector("a[href*='/dp/']");
  const imgEl   = card.querySelector("img");

  rows.push({
    no: i + 1,
    asin: card.getAttribute("data-asin"),
    title: titleEl ? titleEl.innerText.trim() : "(none)",
    link: linkEl ? linkEl.href : "(none)",
    image: imgEl ? imgEl.getAttribute("src") : "(none)"
  });
});

console.table(rows.slice(0, 10));
```

### Expected Output

A console table with up to 10 rows: `no`, `asin`, `title`, `link`, `image`. Some rows may show `(none)` (e.g. non-standard cards) — that is realistic.

### Traversal diagram

```text
card (div[data-component-type='s-search-result'])
   ├─ h2 → title text
   │    └─ a → href
   └─ img → src / alt
```

### Selector status

| Purpose | Selector | Status |
|---|---|---|
| Container | `div[data-component-type='s-search-result']` | Unverified – historically stable |
| Title | `h2` | Unverified – tag-based, fairly stable |
| Link | `h2 a`, fallback `a[href*='/dp/']` | Unverified – structure varies |
| Image | `img` / `img.s-image` | Unverified – class is dynamic |

### Common Mistakes

- Using `document.querySelector` inside the loop.
- Not trimming whitespace.
- Sponsored cards or banners producing `(none)`: filter them with `rows.filter(r => r.title !== "(none)")`.

---

## Topic 9 — Browser Element Interaction

### Safe demonstration (search only — never add to cart / buy)

- **Page:** Amazon.in home page.

```javascript
const box = document.querySelector("#twotabsearchtextbox");
box.focus();                    // cursor goes into the box
box.value = "keyboard";
box.blur();                     // focus leaves the box

// Optional: submit the search
document.querySelector("#nav-search-submit-button").click();
```

### Expected Output

The box is focused (outline), shows `keyboard`, then loses focus; `click()` loads the search results page for "keyboard" (if both selectors are valid).

### Verified Selector

`#nav-search-submit-button` — Unverified – historically stable. *Fallback:* `input[type='submit']` inside the search form, or press Enter in the box.

### Cautions (say these out loud)

- Never run `click()` against Add to Cart, Buy Now, Place Order, or payment elements.
- Amazon may show CAPTCHA if you automate heavily. This is a classroom demo, not scraping at scale. Check Amazon's terms before building any automated scraper beyond learning.

### Common Mistakes

- Setting `value` and clicking, then wondering why autosuggest didn't appear (no real key events).
- Page navigation destroys your variables — re-select after navigation.

---

## Topic 10 — DOM-Based Automation Concepts → Playwright

> The code below is **Playwright (Node.js)**, not for the browser console.

| Concept | Browser console (DOM) | Playwright |
|---|---|---|
| Find one | `document.querySelector(sel)` | `page.locator(sel)` |
| Find many | `document.querySelectorAll(sel)` | `page.locator(sel)` + `.all()` / `.count()` / `.nth(i)` |
| Click | `el.click()` | `await page.locator(sel).click()` |
| Type | `el.value = "x"` | `await page.locator(sel).fill("x")` |
| Visible text | `el.innerText` | `await page.locator(sel).innerText()` |
| All text | `el.textContent` | `await page.locator(sel).textContent()` |
| Attribute | `el.getAttribute("href")` | `await page.locator(sel).getAttribute("href")` |
| Title / URL | `document.title`, `document.URL` | `await page.title()`, `page.url()` |

```javascript
// PLAYWRIGHT (Node.js) — not for the console
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('headphones');   // verify selector first
  await page.locator('#nav-search-submit-button').click();

  const cards = page.locator("div[data-component-type='s-search-result']");
  console.log(await cards.count());
  console.log(await cards.first().locator('h2').innerText());
  await browser.close();
})();
```

**Key differences to emphasize**

- Playwright locators are **lazy and auto-waiting**; the DOM code runs instantly and fails with `null` if the element isn't ready yet.
- Playwright calls are **asynchronous** (`await`); DOM calls are synchronous.
- Playwright `innerText()` is a **method**; DOM `innerText` is a **property**.
- Playwright has better locators (`getByRole`, `getByText`, `getByLabel`) built on the attributes learned today.

> DOM JavaScript teaches us how to understand and interact with webpage elements. Playwright provides a reliable automation layer around those interactions.

---

# FINAL PROJECT

## Requirements

On Amazon.in, search for a product of your choice, then in the Console print a structured table of the first 10 products with: number, ASIN, title, link, image URL, and a simple flag for whether a title was found. Use only concepts from Days 1–2.

## Student Task

1. Open Amazon.in, search for any product.
2. Inspect the page and **discover** (not copy) your container, title, link and image selectors.
3. Write a script to extract and print the data.
4. Print a count of cards with no title.

## Hints

- Start with `querySelectorAll(...).length` — if 0, rediscover.
- Scope every inner `querySelector` to the card.
- Guard against `null`.
- `link.href` gives the absolute URL.

## Complete Solution

```javascript
// Run on an Amazon.in search results page
const CONTAINER = "div[data-component-type='s-search-result']";   // Unverified – verify first

const cards = document.querySelectorAll(CONTAINER);
if (cards.length === 0) {
  console.warn("Container selector returned 0 — rediscover it (Inspect → build selector → test).");
} else {
  const products = Array.from(cards).map((card, i) => {
    const titleEl = card.querySelector("h2");
    const linkEl  = card.querySelector("h2 a") || card.querySelector("a[href*='/dp/']");
    const imgEl   = card.querySelector("img");
    return {
      no: i + 1,
      asin: card.getAttribute("data-asin") || "",
      title: titleEl ? titleEl.innerText.trim() : "",
      link: linkEl ? linkEl.href : "",
      image: imgEl ? imgEl.getAttribute("src") : ""
    };
  });

  console.log("Cards:", products.length);
  console.log("Without title:", products.filter(p => !p.title).length);
  console.table(products.filter(p => p.title).slice(0, 10));
}
```

## Expected Output

`Cards: N`, `Without title: M`, and a table of up to 10 products. Exact values vary by search term, region, and layout.

## Explanation

- `querySelectorAll` → NodeList of containers
- `Array.from(...).map` → transform each card to an object
- scoped `card.querySelector` → traversal inside a container
- `getAttribute` / `href` / `innerText` → read attributes and text
- guards → handle missing elements

## Possible DOM Changes

- Container attribute name or value changes
- Title/link nesting changes (link wraps `h2`, or vice versa)
- Layout A/B tests: grid vs list, mobile vs desktop
- Sponsored/ad cards with no title
- Region, login state, or personalization altering structure
- CAPTCHA / bot-check page (no results at all)

## How to Rediscover Selectors

See Section F.

---

# F. FALLBACK STRATEGY — Discover the Selector Yourself

If `document.querySelectorAll("...")` returns 0 or `null`:

1. Go to the **Elements** tab.
2. Inspect the target element (picker `Ctrl+Shift+C`).
3. Note its tag, `id`, `data-*`, `aria-*`, `name`, `href` patterns, and classes.
4. Prefer, in order: **id → data-\* → aria-\*/name → stable-looking class → structure**.
5. Test in Console: `document.querySelectorAll("YOUR_SELECTOR").length`.
6. Make sure it matches the **right** number of elements (not 1 when you expect 20, not 200 when you expect 20).
7. Print `innerText`/attribute of a few matches to confirm they are the intended elements.
8. Only then use it.

Trick: right-click the node in Elements → **Copy → Copy selector** gives a starting point (often too brittle; simplify it).

---

# AMAZON SELECTOR VERIFICATION TABLE

> **No selector below was verified by the author.** Fill in "Verified?" after running the Pre-Class Verification Script.

| Purpose | Selector | Verified? | Returns | Stability | Notes |
|---|---|---|---|---|---|
| Search box | `#twotabsearchtextbox` | **No** (instructor to confirm) | 1 `<input>` | Historically stable (ID) | Fallback `input[name='field-keywords']` |
| Search button | `#nav-search-submit-button` | **No** | 1 submit control | Historically stable (ID) | Fallback: press Enter |
| Logo | `#nav-logo-sprites` | **No** | 1 element | Historically stable (ID) | Demo only |
| Cart link | `#nav-cart` | **No** | 1 element | Historically stable (ID) | Read only, never click for demos |
| Category dropdown | `#searchDropdownBox` | **No** | 1 `<select>` | Historically stable (ID) | May be hidden/restyled |
| Product container | `div[data-component-type='s-search-result']` | **No** | N result cards | Historically stable (data-attr) | Results page only |
| Container (broad) | `div[data-asin]` | **No** | ≥ N elements | Broader, less precise | Includes non-product blocks |
| Product title | `div[data-component-type='s-search-result'] h2` | **No** | title element per card | Tag-based; inner structure varies | Use `.innerText` |
| Product link | `… h2 a` / `a[href*='/dp/']` | **No** | `<a>` per card | Dynamic structure | Fall back to `/dp/` pattern |
| Product image | `… img.s-image` / `img` | **No** | `<img>` per card | Class is dynamic | Fall back to plain `img` |
| Product page title | `#productTitle` | **No** | 1 element on product page | Historically stable (ID) | Product pages only |

---

# Instructor Delivery Tips

- Run the Section 0 script **the morning of each class**; Amazon varies by day and region.
- Keep a second tab on a results page already loaded as a backup.
- If Amazon shows a CAPTCHA or different layout in class, switch to the "create your own elements" demos (Day 1 Topic 7, Day 2 Topics 4–6) and use the discovery exercise on whatever DOM you see. The skill being taught is *how to find the selector*, which is the core of Playwright work.
- For a guaranteed-stable fallback site for practice, consider a dedicated practice site (e.g. a Playwright-friendly demo store) in addition to Amazon.
