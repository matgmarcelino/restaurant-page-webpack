import "../styles.css";
import homePage, { buttonMenu as homePageButtonMenu } from "./homePage.js";
import menuIntro from "./menu/menuIntro.js";
import menuSidebar from "./menu/menuSidebar.js";

const content = document.querySelector("#content");

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", appendMenuPage);

const aboutBtn = document.querySelector("#about");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", appendHomePage);
homePageButtonMenu.addEventListener("click", appendMenuPage);

function appendHomePage() {
  content.textContent = "";
  content.appendChild(homePage);
}

function appendMenuPage() {
  content.textContent = "";
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  menuContainer.append(menuSidebar);

  content.append(menuIntro, menuContainer);
}
