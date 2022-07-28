import { mainDiv } from "../constants.js";
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
    const showDetails = createElementByClassName("a", "show-link");
    const showType = createElementByClassName("p", "show-type");

    imageOfShow.src = `${show.image.original}`;
    showName.textContent = `${show.name}`;
    showDetails.textContent = `Details`;
    showDetails.href = `${show.url}`;
    showType.textContent = `${show.genres}`;

    main.appendChild(cardContainer);
    cardContainer.appendChild(showCard);
    showCard.appendChild(imageOfShow);
    showCard.appendChild(showInformation);
    showInformation.appendChild(showName);
    showInformation.appendChild(showType);
    showInformation.appendChild(showDetails);
  });
};
export default createCards;
