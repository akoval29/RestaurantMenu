import { allFood } from "./food.js";
const main = document.querySelector(".main");

for (let i = 0; i < allFood.length; i++) {
  const mainDish = document.createElement("div");
  mainDish.classList.add("main__dish");

  const img = document.createElement("img");
  img.classList.add("main__img");
  img.src = allFood[i].imageSrc;
  img.alt = allFood[i].name;
  mainDish.appendChild(img);

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main__info");
  mainDish.appendChild(mainInfo);

  const mainWrap = document.createElement("div");
  mainWrap.classList.add("main__wrap");
  mainInfo.appendChild(mainWrap);

  const mainName = document.createElement("h3");
  mainName.classList.add("main__name");
  mainName.textContent = allFood[i].name;
  mainWrap.appendChild(mainName);

  const mainPrice = document.createElement("h3");
  mainPrice.classList.add("main__price");
  mainPrice.textContent = `${allFood[i].price} ₴`;
  mainWrap.appendChild(mainPrice);

  const mainDescr = document.createElement("p");
  mainDescr.classList.add("main__descr");
  mainDescr.textContent = allFood[i].description;
  mainInfo.appendChild(mainDescr);

  main.appendChild(mainDish);
}
