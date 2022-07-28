import fetchData from "../utilities/fetchData.js";
import { createElementById } from "../utilities/createElementFunctions.js";
import searchCardForShow from "../views/searchCardForShows.js";
import { mainDiv } from "../constants.js";

const searchShow = (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      const results = jsonData;
      searchCardForShow(results);
    })
    .catch((error) => {
      document.createElement("h1").innerHTML = error;
      searchCardForShow([]);
    });
};

export default searchShow;
