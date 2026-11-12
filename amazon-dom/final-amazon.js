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
  console.table(products.filter(p => p.title).slice(0, 5));
}