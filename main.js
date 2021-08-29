let bodyElement = document.body;
// The document.createelement() method create html element specified by tagName
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');


// The ClassName property gets and sets the value of the class attribute of the specified element;
cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageElement.className = "image";
headingElement.className = "heading";
paragraphElement.calssName = "paragraph";
btnElement.className = "btn";

// Works the same way as the className property except it sets the source of the imageElement
imageElement.src = "https://source.unsplash.com/random";

// This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value.
btnElement.setAttribute("href", "#");
imageElement.setAttribute("alt", "image from unsplash");

headingElement.innerText = "Unsplash API";
paragraphElement.innerText = "This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value.";
btnElement.innerText = "Learn more";

bodyElement.appendChild(cardElement);
// This is not appendChild because attached the body so using append.
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageElement);
infoContainer.append(headingElement, paragraphElement, btnElement);