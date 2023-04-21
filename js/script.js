import { allFood } from "./food.js";
const main = document.querySelector(".main");

const btnAll = document.querySelector(".header__button--all");
const btnBreak = document.querySelector(".header__button--break");
const btnLunch = document.querySelector(".header__button--lunch");
const btnShakes = document.querySelector(".header__button--shakes");
const btnDinner = document.querySelector(".header__button--dinner");

// Пеший запуск
destructure(allFood);

// навішуєм обробники подій на btn
btnAll.addEventListener("click", () => {
  main.innerHTML = "";
  destructure(allFood);
});
btnBreak.addEventListener("click", () => {
  onUpdate("breakfast");
});
btnLunch.addEventListener("click", () => {
  onUpdate("lunch");
});
btnShakes.addEventListener("click", () => {
  onUpdate("cocktail");
});
btnDinner.addEventListener("click", () => {
  onUpdate("dinner");
});

// оновлюєм сторінку кнопкою
function onUpdate(value) {
  main.innerHTML = "";
  let arr = [];
  for (let i = 0; i < allFood.length; i++) {
    if (allFood[i].type === value) {
      arr.push(allFood[i]);
    }
  }
  destructure(arr);
}

function destructure(arr) {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    let price = arr[i].price;
    let descr = arr[i].description;
    let src = arr[i].imageSrc;

    generator(name, price, descr, src);
  }
}

function generator(name, price, descr, src) {
  const mainDish = document.createElement("div");
  mainDish.classList.add("main__dish");

  const img = document.createElement("img");
  img.classList.add("main__img");
  img.src = src;
  img.alt = name;
  mainDish.appendChild(img);

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main__info");
  mainDish.appendChild(mainInfo);

  const mainWrap = document.createElement("div");
  mainWrap.classList.add("main__wrap");
  mainInfo.appendChild(mainWrap);

  const mainName = document.createElement("h3");
  mainName.classList.add("main__name");
  mainName.textContent = name;
  mainWrap.appendChild(mainName);

  const mainPrice = document.createElement("h3");
  mainPrice.classList.add("main__price");
  mainPrice.textContent = `${price} ₴`;
  mainWrap.appendChild(mainPrice);

  const mainDescr = document.createElement("p");
  mainDescr.classList.add("main__descr");
  mainDescr.textContent = descr;
  mainInfo.appendChild(mainDescr);

  main.appendChild(mainDish);

  return mainDish;
}
