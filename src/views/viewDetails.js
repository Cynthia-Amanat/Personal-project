import {
  createElementByClassName,
  createElementById,
} from "../utilities/createElementFunctions.js";
import { mainDiv } from "../constants.js";

const viewDetails = (result) => {
  // creating Elements
  const main = document.getElementById(mainDiv);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = " ";

  const heading = document.getElementById("main-heading");
  heading.textContent = "Show Information";
  const viewDetailContainer = createElementById("div", "detail-Container");
  const showNameHeading = createElementById("h1", "Heading-Name");

  const detailsOfShow = createElementById("div", "detail-of-show");
  const showSummaryContainer = createElementById("div", "summary-container");
  const image = createElementByClassName("img", "detail-img");
  const summary = createElementByClassName("p", "summary");
  const showInfo = [
    `network : ${result.network.name} | ${result.network.country.name}`,
    `status :${result.status}`,
    `schedule :${result.schedule.days} | ${result.schedule.time}`,
    `Type : ${result.type}`,
    `Genres : ${result.genres}`,
    `Episode : Current Episode ${result._links.self.href} | Pervious Episode ${result._links.previousepisode.href}`,
    `officialSite : ${result.officialSite} `,
  ];

  for (let i = 0; i < showInfo.length; i++) {
    const strongElements = document.createElement("li");
    strongElements.innerText = showInfo[i];
    strongElements.classList.add("information");
    detailsOfShow.appendChild(strongElements);
  }

  // text and attribute
  // viewDetailContainer.classList.add("hide");
  showNameHeading.textContent = result.name;
  if (result.image) {
    image.src = result.image.medium;
  }
  summary.textContent = result.summary;

  // appending Elements
  main.appendChild(viewDetailContainer);
  viewDetailContainer.appendChild(showNameHeading);
  viewDetailContainer.appendChild(showSummaryContainer);
  showSummaryContainer.appendChild(image);
  showSummaryContainer.appendChild(summary);
  viewDetailContainer.appendChild(detailsOfShow);
};

export default viewDetails;
