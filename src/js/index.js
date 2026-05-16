import "../styles.css";
import homePage from "./homePage.js";
import menuIntro from "./menuIntro.js";
import menuSidebar from "./menuSidebar.js";

const content = document.querySelector("#content");

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", appendMenuPage);

const aboutBtn = document.querySelector("#about");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", appendHomePage);

function appendHomePage() {
  content.appendChild(homePage);
}

function appendMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  menuContainer.append(menuSidebar);

  content.append(menuIntro, menuContainer);
}
