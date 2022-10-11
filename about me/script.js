const text1_options = [
  "Мне 24 года",
  "Знаю английский, испанский и чуток французского",
  "У меня есть кот Кокос",
  "Люблю вязать (этот свитер сделала я)",
  "Провела 1180 часов в Animal Crossing"
];

const color_options = ["#EBB9D2", "#f9b593", "#c4f3f8", "#93edc7", "#d5b1ef"];

const image_options = [
  "https://i.imgur.com/IYrn1BD.jpg",
  "https://images.unsplash.com/photo-1501514799070-290ae1c889fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://i.imgur.com/9dNWvhK.jpg",
  "https://i.imgur.com/fWjPrIe.jpg",
  "https://i.imgur.com/Z87E2z3.jpg"
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};
