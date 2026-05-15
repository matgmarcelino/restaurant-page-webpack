import "../styles.css";
import homePage from "./homePage.js";

const content = document.querySelector("#content");

const menuBtn = document.querySelector("#menu");

const aboutBtn = document.querySelector("#about");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", appendHomePage);

function appendHomePage() {
  content.appendChild(homePage);
}
