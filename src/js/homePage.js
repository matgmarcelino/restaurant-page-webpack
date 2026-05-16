const hero = document.createElement("div");
hero.className = "hero";

const eyebrow = document.createElement("p");
eyebrow.className = "eyebrow";
eyebrow.textContent = "MILLCREEK, UTAH - EST. 2026";

const title = document.createElement("p");
title.className = "title";
const span = document.createElement("span");
span.textContent = "only";
title.append("Fire is the ", span, " ingredient that matters.");

const subtitle = document.createElement("p");
subtitle.textContent =
  "Open-hearth cooking, cast iron craft, and seasonal menus built around live flame.";
subtitle.className = "subtitle";

const btnGroup = document.createElement("div");
btnGroup.className = "btn-group";
const buttonReserve = document.createElement("button");
buttonReserve.className = "reserve";
buttonReserve.textContent = "RESERVE A TABLE";
export const buttonMenu = document.createElement("button");
buttonMenu.className = "menu";
buttonMenu.textContent = "VIEW MENU";
btnGroup.append(buttonReserve, buttonMenu);

hero.append(eyebrow, title, subtitle, btnGroup);

export default hero;
