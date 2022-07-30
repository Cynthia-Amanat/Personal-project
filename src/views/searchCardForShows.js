import { mainDiv } from "../constants.js";
import { createElementByClassName } from "../utilities/createElementFunctions.js";
import detailPage from "../page/detailPage.js";

const searchCardForShow = (results) => {
  const searchShowContainer = document.getElementById("search-container");

  results.forEach((result) => {
    const searchShow = createElementByClassName("div", "show-cards");
    const searchShowImage = createElementByClassName("img", "show-img");
    const searchShowInformation = createElementByClassName("div", "show-info");
    const searchShowName = createElementByClassName("p", "show-name");
    const searchShowDetails = createElementByClassName("button", "show-link");
    const searchShowType = createElementByClassName("p", "show-type");

    //   Text & attributes
    searchShowImage.src = result.show.image.medium;
    searchShowName.textContent = result.show.name;
    searchShowDetails.textContent = `Details`;
    searchShowDetails.id = result.show.externals.thetvdb;
    // searchShowType.textContent = result.show.genres;

    //   appending elements

    searchShowContainer.appendChild(searchShow);
    searchShow.appendChild(searchShowImage);
    searchShow.appendChild(searchShowInformation);
    searchShowInformation.appendChild(searchShowName);
    searchShowInformation.appendChild(searchShowDetails);
    searchShowInformation.appendChild(searchShowType);
  });

  const detailsBtn = Array.from(document.getElementsByClassName("show-link"));
  // console.log(detailsBtn);
  detailsBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      detailPage(e);
      // console.log("hello");
    });
  });
};

export default searchCardForShow;
