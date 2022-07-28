import { mainDiv } from "../constants.js";
import {
  createElementById,
  createElementByClassName,
} from "../utilities/createElementFunctions.js";

const createNavBar = () => {
  // creating
  const main = document.getElementById(mainDiv);
  const nav = document.createElement("nav");
  const navBar = createElementById("div", "navbar");
  const searchBar = createElementById("div", "searchBar");
  const input = createElementById("input", "inputValue");
  const searchButton = createElementById("button", "searchButton");
  const iconsDiv = createElementByClassName("div", "icons");

  // innerText or HTML
  navBar.innerHTML = `<div id="headingIcon" and bars>
            <i class="fa fa-bars"></i>
            <h1 id="mainHeading">TV SHOWS</h1>
          </div>`;
  input.type = "text";
  input.placeholder = "Search Shows";
  iconsDiv.innerHTML = `<i class="fa fa-instagram"></i>
            <i class="fa fa-facebook"></i>
            <i i class="fa fa-twitter"></i>`;
  searchButton.innerHTML = `<i class="fa fa-search"></i>`;

  // appending Element
  main.appendChild(nav);
  nav.appendChild(navBar);
  navBar.appendChild(searchBar);
  navBar.appendChild(iconsDiv);
  searchBar.appendChild(input);
  searchBar.appendChild(searchButton);
};

export default createNavBar;
