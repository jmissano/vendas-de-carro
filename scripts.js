let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll(".ul li");
let list = container.querySelector(".list");
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

nextButton.onclick = () => {
  list.style.setProperty("--calculation", 1);
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active + 1 > lastPosition ? 0 : active + 1;
  items[active].classList.add("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
};

prevButton.onclick = () => {
  list.style.setProperty("--calculation", -1);
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active - 1 < 0 ? lastPosition : active - 1;
  items[active].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const indicators = document.querySelectorAll(".indicators ul li");
  let currentIndex = 0;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
      indicators[i].classList.toggle("active", i === index);
    });
    document.querySelector(".indicators .number").textContent = `0${index + 1}`;
  }

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
  });

  updateCarousel(currentIndex);
});
