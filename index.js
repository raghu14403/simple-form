const paragraph = document.querySelector(".paragraph");
const list = document.querySelector("ul");
const elements = Array.from(document.querySelectorAll("li"));
const button = document.querySelector("button");
const image = document.querySelector("img");
const arrow = document.querySelector(".arrowImg");

const images = [
  "facebook.webp",
  "youtube.webp",
  "linkedin.webp",
  "instagram.webp",
];
const cursors = [
  "thumb-up.webp",
  "subscribe.webp",
  "linkedin.webp",
  "love.webp",
];

let value;
console.log(image);
arrow.addEventListener("click", (event) => {
  list.classList.remove("hidden-content");
  arrow.style.transform = "rotate(180deg)";
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      value = element.innerText;
      console.log(value);
      paragraph.innerText = value;
      image.src = images[index];
      console.log(arrow);
    });
  });
});

elements.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    element.style.cursor = `url(${cursors[index]}),auto`;
  });
});

button.addEventListener("click", () => {
  list.classList.add("hidden-content");
  arrow.style.transform = "rotate(360deg)";
  if (value === undefined) {
    alert("Select some thing");
  } else {
    alert(`You have selected ${value}`);
  }
});
