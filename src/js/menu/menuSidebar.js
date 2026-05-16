const aside = document.createElement("aside");

const foodSection = (() => {
  const section = document.createElement("section");
  section.className = "food";

  const p = document.createElement("p");
  p.textContent = "FOOD";

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "SMALL PLATES";
  li1.className = "active";

  const li2 = document.createElement("li");
  li2.textContent = "FLATBREADS";

  const li3 = document.createElement("li");
  li3.textContent = "FROM THE HEARTH";

  const li4 = document.createElement("li");
  li4.textContent = "SIDES";

  const li5 = document.createElement("li");
  li5.textContent = "DESSERTS";
  ul.append(li1, li2, li3, li4, li5);
  section.append(p, ul);

  aside.appendChild(section);
})();

const drinksSection = (() => {
  const section = document.createElement("section");
  section.className = "drinks";

  const p = document.createElement("p");
  p.textContent = "DRINKS";

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "COCKTAILS";

  const li2 = document.createElement("li");
  li2.textContent = "WINE";

  const li3 = document.createElement("li");
  li3.textContent = "BEER & CIDER";

  const li4 = document.createElement("li");
  li4.textContent = "NON-ALCOHOLIC";

  ul.append(li1, li2, li3, li4);
  section.append(p, ul);

  aside.appendChild(section);
})();

const legend = (() => {
  const legendDiv = document.createElement("div");
  legendDiv.className = "legend";

  const gfP = document.createElement("p");
  gfP.textContent = "GF = GLUTEN FREE";

  const vP = document.createElement("p");
  vP.textContent = "V = VEGETARIAN";

  const tgP = document.createElement("p");
  tgP.textContent = "PRICES EXCLUDE TAX & GRATUITY";

  legendDiv.append(gfP, vP, tgP);
  aside.appendChild(legendDiv);
})();

const warningP = (() => {
  const p = document.createElement("p");
  p.textContent =
    "Consuming raw or undercooked meats may increase risk of foodborne illness.";
  p.className = "warning";

  aside.appendChild(p);
})();

export default aside;
