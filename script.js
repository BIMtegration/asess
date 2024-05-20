document.querySelector("#app").innerHTML = `
    <ul id="cards"></ul>
`;
const CARDS = [
  "img/galeria/Diapositiva1.JPG",
  "img/galeria/Diapositiva2.JPG",
  "img/galeria/Diapositiva3.JPG",
  "img/galeria/Diapositiva4.JPG",
  "img/galeria/Diapositiva5.JPG",
  "img/galeria/Diapositiva6.JPG",
  "img/galeria/Diapositiva7.JPG",
  "img/galeria/Diapositiva8.JPG",
  "img/galeria/Diapositiva9.JPG",
  "img/galeria/Diapositiva10.JPG",
  "img/galeria/Diapositiva11.JPG",
  "img/galeria/Diapositiva12.JPG",
  "img/galeria/Diapositiva13.JPG",
  "img/galeria/Diapositiva14.JPG",
  "img/galeria/Diapositiva15.JPG",
  "img/galeria/Diapositiva16.JPG",
  "img/galeria/Diapositiva17.JPG",
  "img/galeria/Diapositiva18.JPG",
  "img/galeria/Diapositiva19.JPG",
  "img/galeria/Diapositiva20.JPG",
  "img/galeria/Diapositiva21.JPG",
  "img/galeria/Diapositiva22.JPG",
];
const CARD_CONTAINER = document.querySelector("#cards");
const PADDING = 0;
// Add prepadding
for (let pre = 0; pre < PADDING; pre++) {
  const COVER_INDEX = CARDS.length - (PADDING - 1) + pre;
  const ITEM = Object.assign(document.createElement("li"), {
    ariaHidden: true,
    innerHTML: `
      <div class="image-wrapper">
        <img src="${CARDS[COVER_INDEX - 1]}" alt="" />
      </div>
    `,
  });
  CARD_CONTAINER === null || CARD_CONTAINER === void 0
    ? void 0
    : CARD_CONTAINER.appendChild(ITEM);
}
CARDS.map((card) => {
  const ITEM = Object.assign(document.createElement("li"), {
    innerHTML: `
      <div class="image-wrapper">
        <img src="${card}" alt="" />
      </div>
    `,
  });
  CARD_CONTAINER === null || CARD_CONTAINER === void 0
    ? void 0
    : CARD_CONTAINER.appendChild(ITEM);
});
// Add post padding
for (let post = 0; post < PADDING; post++) {
  const COVER_INDEX = post;
  const ITEM = Object.assign(document.createElement("li"), {
    ariaHidden: true,
    innerHTML: `
      <div class="image-wrapper">
        <img src="${CARDS[COVER_INDEX]}" alt="" />
      </div>
    `,
  });
  CARD_CONTAINER === null || CARD_CONTAINER === void 0
    ? void 0
    : CARD_CONTAINER.appendChild(ITEM);
}
const ITEMS = [
  ...(CARD_CONTAINER === null || CARD_CONTAINER === void 0
    ? void 0
    : CARD_CONTAINER.children),
];
ITEMS.forEach((ITEM, index) => {
  if (index <= 2 || index >= ITEMS.length - 4)
    ITEM.setAttribute("aria-hidden", true);
});
let scrollBounds = { max: 0, min: 0 };
const UPDATE = () => {
  if (CARD_CONTAINER.scrollLeft < scrollBounds.min) {
    CARD_CONTAINER.scrollLeft = scrollBounds.max;
  } else if (CARD_CONTAINER.scrollLeft > scrollBounds.max) {
    CARD_CONTAINER.scrollLeft = scrollBounds.min;
  }
};
const SET_SCROLL_BOUNDS = () => {
  ITEMS[ITEMS.length - 1].scrollIntoView();
  scrollBounds.max = CARD_CONTAINER.scrollLeft + ITEMS[0].offsetWidth;
  ITEMS[0].scrollIntoView();
  scrollBounds.min = CARD_CONTAINER.scrollLeft - ITEMS[0].offsetWidth;
};
SET_SCROLL_BOUNDS();
CARD_CONTAINER === null || CARD_CONTAINER === void 0
  ? void 0
  : CARD_CONTAINER.addEventListener("scroll", UPDATE);
