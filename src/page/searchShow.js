import fetchData from "../utilities/fetchData.js";
import searchCardForShow from "../views/searchCardForShows.js";

const searchShow = async (query) => {
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    const results = await fetchData(url);
    if (results.show) {
      searchCardForShow(results);
    } else {
      const searchHeading = document.getElementById("main-heading");
      searchHeading.innerHTML = `" Sorry we didn't found any move !`;
    }
    searchCardForShow(results);
  } catch (error) {
    document.createElement("h1").innerHTML = error;
    searchCardForShow([]);
  }
};

export default searchShow;
