export const createElementById = (element, id) => {
  const myElement = document.createElement(element);
  if (id) {
    myElement.id = id;
  }

  return myElement;
};

export const createElementByClassName = (element, className) => {
  const myElement = document.createElement(element);
  if (className) {
    myElement.classList.add(className);
  }

  return myElement;
};
