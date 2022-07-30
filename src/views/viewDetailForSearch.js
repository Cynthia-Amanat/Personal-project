import {
  createElementById,
  createElementByClassName,
} from "../utilities/createElementFunctions.js";

const viewDetailForSearch = (result) => {
  const searchShowContainer = document.getElementById("search-container");
  searchShowContainer.innerHTML = " ";

  const heading = document.getElementById("main-heading");
  heading.textContent = "Show Information";
  const viewDetailContainer = createElementById("div", "detail-Container");
  const showNameHeading = createElementById("h1", "Heading-Name");

  const detailsOfShow = createElementById("div", "detail-of-show");
  const showSummaryContainer = createElementById("div", "summary-container");
  const image = createElementByClassName("img", "detail-img");
  const summary = createElementByClassName("p", "summary");
  const showInfo = [
    `network : ${result.show.network.name} | ${result.show.network.country.name}`,
    `status :${result.show.status}`,
    `schedule :${result.show.schedule.days} | ${result.show.schedule.time}`,
    `Type : ${result.show.type}`,
    `Genres : ${result.show.genres}`,
    `Episode : Current Episode ${result.show._links.self.href} | Pervious Episode ${result.show._links.previousepisode.href}`,
    `officialSite : ${result.show.officialSite} `,
  ];

  for (let i = 0; i < showInfo.length; i++) {
    const strongElements = document.createElement("li");
    strongElements.innerText = showInfo[i];
    strongElements.classList.add("information");
    detailsOfShow.appendChild(strongElements);
  }

  // text and attribute

  showNameHeading.textContent = result.show.name;
  if (result.image) {
    image.src = result.show.image.medium;
  }
  summary.textContent = result.show.summary;

  // appending Elements
  main.appendChild(viewDetailContainer);
  viewDetailContainer.appendChild(showNameHeading);
  viewDetailContainer.appendChild(showSummaryContainer);
  showSummaryContainer.appendChild(image);
  showSummaryContainer.appendChild(summary);
  viewDetailContainer.appendChild(detailsOfShow);
};
export default viewDetailForSearch;
