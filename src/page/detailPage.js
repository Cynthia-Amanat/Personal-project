import fetchData from "../utilities/fetchData.js";
import viewDetailForSearch from "../views/viewDetailForSearch.js";
import viewDetails from "../views/viewDetails.js";

const detailPage = async (e) => {
  try {
    const result = await fetchData(
      `https://api.tvmaze.com/lookup/shows?thetvdb=${e.target.id}?`
    );
    viewDetails(result);
    viewDetailForSearch(result);
  } catch (error) {
    const searchShowContainer = document.getElementById("search-container");
    searchShowContainer.innerHTML = " ";
    const heading = document.getElementById("main-heading");
    heading.textContent = " Sorry not found";
  }
};

export default detailPage;
