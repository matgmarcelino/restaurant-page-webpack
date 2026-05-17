import "../styles.css";
import homePage, { buttonMenu as homePageButtonMenu } from "./homePage.js";
import menuIntro from "./menu/menuIntro.js";
import menuSidebar from "./menu/menuSidebar.js";
import menuItems from "./menu/menuItems.js";

const content = document.querySelector("#content");
// appendHomePage();

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", appendMenuPage);

const aboutBtn = document.querySelector("#about");


const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", appendHomePage);
homePageButtonMenu.addEventListener("click", appendMenuPage);

const menuContainer = document.createElement("div");
menuContainer.className = "menu-container";
let currentItems = menuItems.smallPlates();
menuContainer.append(menuSidebar, currentItems);

menuSidebar.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li || li.classList.contains('active')) return;

  menuSidebar.querySelectorAll('li').forEach(i => i.className = '');
  li.className = 'active';

  const next = menuItems[li.id]();
  currentItems.replaceWith(next);
  currentItems = next;
});

function appendHomePage() {
  content.textContent = "";
  content.append(homePage);
}

function appendMenuPage() {
  content.textContent = "";
  content.append(menuIntro, menuContainer);
}
