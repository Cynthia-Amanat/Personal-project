import createNavBar from "./views/createNavBar.js";
import createHomePage from "./page/homepage.js";
import searchShow from "./page/searchShow.js";
import { createElementById } from "./utilities/createElementFunctions.js";
const mainApp = () => {
  const navigation = createNavBar();
  const home = createHomePage();
  // const search = searchShow();
  let searchTimeoutToken = 0;
  const searchElement = document.getElementById("inputValue");
  searchElement.addEventListener("keypress", (event) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = " ";
    const searchShowContainer = document.getElementById("search-container");
    searchShowContainer.classList.remove("hide");

    clearTimeout(searchTimeoutToken);
    if (searchElement.value.trim().length === 0) {
      return;
    }
    searchTimeoutToken = setTimeout(() => {
      searchShowContainer.innerHTML = " ";
      searchShow(searchElement.value);
    }, 250);
  });
};

window.addEventListener("load", mainApp);
