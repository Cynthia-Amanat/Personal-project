import fetchData from "../utilities/fetchData.js";
import viewDetailForSearch from "../views/viewDetailForSearch.js";
import viewDetails from "../views/viewDetails.js";

export const detailPage = async (e) => {
  const result = await fetchData(
    `https://api.tvmaze.com/lookup/shows?tvrage=${e.target.id}?`
  );

  if (result) {
    viewDetails(result);
  } else {
    const cardContainer = document.getElementById("detail-Container");
    cardContainer.innerHTML = `" Sorry we didn't found any detail!`;
  }
};

export const detailPageForSearch = async (e) => {
  const result = await fetchData(
    `https://api.tvmaze.com/lookup/shows?thetvdb=${e.target.id}?`
  );

  if (e.target.id == null) {
    const cardContainer = document.getElementById("detail-Container");
    cardContainer.innerHTML = `" Sorry we didn't found any detail!`;
  } else {
    viewDetailForSearch(result);
  }
};
