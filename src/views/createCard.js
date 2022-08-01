import { mainDiv } from "../constants.js";
import { detailPage, detailPageForSearch } from "../page/detailPage.js";
import {
  createElementByClassName,
  createElementById,
} from "../utilities/createElementFunctions.js";

const createCards = (shows) => {
  const main = document.getElementById(mainDiv);
  const cardContainer = createElementById("div", "card-container");
  const heading = createElementById("h1", "main-heading");
  heading.textContent = "Popular Shows For Your Entertainment";
  main.appendChild(heading);
  shows.forEach((show) => {
    //  creating Elements

    const showCard = createElementByClassName("div", "show-cards");
    const imageOfShow = createElementByClassName("img", "show-img");
    const showInformation = createElementByClassName("div", "show-info");
    const showName = createElementByClassName("p", "show-name");
    const showDetails = createElementByClassName("button", "show-link");
    const showType = createElementByClassName("p", "show-type");

    if (show.image) {
      imageOfShow.src = `${show.image.medium}`;
    }
    showName.textContent = show.name.slice(0, 20);
    showDetails.innerText = `Details`;
    showDetails.id = show.externals.tvrage;
    showType.textContent = show.genres[0];

    main.appendChild(cardContainer);
    cardContainer.appendChild(showCard);
    showCard.appendChild(imageOfShow);
    showCard.appendChild(showInformation);
    showInformation.appendChild(showName);
    showInformation.appendChild(showType);
    showInformation.appendChild(showDetails);
  });

  const detailsBtn = Array.from(document.getElementsByClassName("show-link"));
  detailsBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      detailPage(e);
    });
  });
};
export default createCards;
