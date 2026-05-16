const sectionIntro = document.createElement("section");
sectionIntro.className = "intro";

const menuTitle = document.createElement("div");
menuTitle.className = "menu-title";

const eyebrow = document.createElement("p");
eyebrow.className = "eyebrow";
eyebrow.textContent = "SEASONAL — WOOD-FIRED";

const title = document.createElement("p");
title.className = "title";
title.textContent = "Our Menu";

menuTitle.append(eyebrow, title);

const update = document.createElement("p");
update.className = "update";
update.textContent =
  "Menu changes weekly based on local harvest. Last updated May 15.";

sectionIntro.append(menuTitle, update);

export default sectionIntro;
