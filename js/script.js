import { allFood } from "./food.js";
const main = document.querySelector(".main");

const btnAll = document.querySelector(".header__button--all");
const btnBreak = document.querySelector(".header__button--break");
const btnLunch = document.querySelector(".header__button--lunch");
const btnShakes = document.querySelector(".header__button--shakes");
const btnDinner = document.querySelector(".header__button--dinner");

// Перший запуск
destructure(allFood);

// навішуєм обробники подій на btn
btnAll.addEventListener("click", () => {
  main.innerHTML = ""; // видалити все з main
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

// деструктуризація
function destructure(arr) {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    let price = arr[i].price;
    let descr = arr[i].description;
    let src = arr[i].imageSrc;
    generator(name, price, descr, src);
  }
}

// генеруєм верстку
function generator(name, price, descr, src) {
  const str = `
    <div class="main__dish">
      <div class="main__img-wrap">
        <img class="main__img" src=${src} alt="${name.replace(/\s+/g, "-")}">
      </div>
      <div class="main__info">
        <div class="main__wrap">
          <h3 class="main__name">${name}</h3>
          <h3 class="main__price">${price} ₴</h3>
        </div>
        <p class="main__descr">${descr}</p>
      </div>
    </div>
  `;
  main.innerHTML += str;
}
