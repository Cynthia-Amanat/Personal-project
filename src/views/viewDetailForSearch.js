import {
  createElementById,
  createElementByClassName,
} from "../utilities/createElementFunctions.js";
import { mainDiv } from "../constants.js";

const viewDetailForSearch = (result) => {
  const main = document.getElementById(mainDiv);
  main.classList.add("hide");

  const viewDetailContainer = createElementById("div", "detail-Container");
  const closeButton = createElementById("button", "close-button");
  const showInformation = createElementById("h1", "show-information");
  const showNameHeading = createElementById("h2", "Heading-Name");
  const detailBox = createElementById("div", "box");
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
  showNameHeading.textContent = result.name;
  if (result.image) {
    image.src = result.image.medium;
  }
  summary.textContent = result.summary;
  closeButton.innerText = "X";

  // appending Elements
  document.body.appendChild(viewDetailContainer);
  viewDetailContainer.appendChild(closeButton);
  viewDetailContainer.appendChild(showInformation);
  viewDetailContainer.appendChild(showNameHeading);
  viewDetailContainer.appendChild(detailBox);
  detailBox.appendChild(showSummaryContainer);
  detailBox.appendChild(detailsOfShow);
  showSummaryContainer.appendChild(image);
  showSummaryContainer.appendChild(summary);

  //   addEventListener
  closeButton.addEventListener("click", () => {
    viewDetailContainer.remove();
    main.classList.remove("hide");
  });
};
export default viewDetailForSearch;
