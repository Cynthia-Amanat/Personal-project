import fetchData from "../utilities/fetchData.js";
import createCards from "../views/createCard.js";
import { mainDiv } from "../constants.js";
import { createElementById } from "../utilities/createElementFunctions.js";

const createHomePage = async (e) => {
  const shows = await fetchData("https://api.tvmaze.com/shows?page=10");
  const main = document.getElementById(mainDiv);
  const searchShowContainer = createElementById("div", "search-container");
  searchShowContainer.classList.add("hide");
  main.appendChild(searchShowContainer);
  createCards(shows);
};

export default createHomePage;
