const yesButtonEls = document.querySelectorAll(".section__button--yes");
const yesButtonPokemonEl = document.querySelector(
  ".section__button--pokemon-yes"
);
const yesButtonNasaEl = document.querySelector(".section__button--nasa-yes");

const headingEls = document.querySelectorAll(".section__heading");
const headingPokemonEl = document.querySelector(".section__heading--pokemon");
const headingNasaEl = document.querySelector(".section__heading--nasa");

const pokemonSectionEl = document.querySelector(".section--pokemon");
const nasaSectionEl = document.querySelector(".section--nasa");

const cancelButtonPokemonEl = document.querySelector(
  ".section__button--pokemon-cancel"
);
const cancelButtonNasaEl = document.querySelector(
  ".section__button--nasa-cancel"
);

const startButtonPokemonEl = document.querySelector(
  ".section__button--pokemon-start"
);
const startButtonNasaEl = document.querySelector(
  ".section__button--nasa-start"
);

yesButtonEls.forEach((yesButton) =>
  addEventListener("click", (event) => {
    headingEls.forEach((headingEl) => {
      headingEl.classList.remove("section__heading");
    });
  })
);

yesButtonPokemonEl.addEventListener("click", (event) => {
  yesButtonPokemonEl.classList.add("section__button--hidden");
  startButtonPokemonEl.classList.remove("section__button--hidden");
  cancelButtonPokemonEl.classList.remove("section__button--hidden");
});

cancelButtonPokemonEl.addEventListener("click", (event) => {
  yesButtonPokemonEl.classList.remove("section__button--hidden");
  startButtonPokemonEl.classList.add("section__button--hidden");
  cancelButtonPokemonEl.classList.add("section__button--hidden");
});

yesButtonNasaEl.addEventListener("click", (event) => {
  yesButtonNasaEl.classList.add("section__button--hidden");
  startButtonNasaEl.classList.remove("section__button--hidden");
  cancelButtonNasaEl.classList.remove("section__button--hidden");
});

cancelButtonNasaEl.addEventListener("click", (event) => {
  yesButtonNasaEl.classList.remove("section__button--hidden");
  startButtonNasaEl.classList.add("section__button--hidden");
  cancelButtonNasaEl.classList.add("section__button--hidden");
});
