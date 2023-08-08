// console.log(
//   "Страница Main\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: +8\n9. Появляется иконка бургер-меню: +4\n10. Верстка обеих страниц валидная +10  \nИтого: 100   "
// );

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false
  );
}

const pets = [
  {
    name: "Jennifer",
    img: "../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// Burger menu start
let currentFormatScreen;
const startSizeScreen = window.innerWidth;
if (startSizeScreen > 1279) currentFormatScreen = "desktop";
else if (startSizeScreen > 767) currentFormatScreen = "tablet";
else currentFormatScreen = "mobile";

window.addEventListener("resize", function () {
  let variableFormatScreen;
  if (window.innerWidth > 1279) variableFormatScreen = "desktop";
  else if (window.innerWidth > 767) {
    variableFormatScreen = "tablet";
    if (setup.burgerMenu) controlHeaderBurger();
  } else variableFormatScreen = "mobile";

  if (currentFormatScreen === variableFormatScreen) return;
  else {
    currentFormatScreen = variableFormatScreen;
  }
});

const setup = {
  burgerMenu: false,
  popup: false,
};

document.querySelector(".overlay").addEventListener("click", () => {
  if (setup.burgerMenu) controlHeaderBurger();
});

let mobileLinks = document.querySelectorAll(".mobile__link");
for (let mobileLink of mobileLinks) {
  mobileLink.addEventListener("click", (event) => {
    if (setup.burgerMenu) controlHeaderBurger();
  });
}

const headerBurger = document.querySelector(".header__burger");
headerBurger.addEventListener("click", (event) => {
  controlHeaderBurger();
  event.stopPropagation();
});

function controlHeaderBurger() {
  setup.burgerMenu = !setup.burgerMenu;
  const headerBurger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".mobile__menu");
  const overlay = document.querySelector(".overlay");

  if (setup.burgerMenu) {
    headerBurger.classList.add("header__burger-act");
    mobileMenu.classList.add("mobile__menu-act");
    document.body.style.overflow = "hidden";
    overlay.classList.add("overlay-act");
  } else {
    headerBurger.classList.remove("header__burger-act");
    mobileMenu.classList.remove("mobile__menu-act");
    document.body.style.overflow = "auto";
    overlay.classList.remove("overlay-act");
  }
}

// Popup start
addEventOnPetsCard();
function addEventOnPetsCard() {
  let cardsCollection = document.querySelectorAll(".pet__card");
  for (card of cardsCollection) {
    card.addEventListener("click", (event) => {
      setup.popup = true;
      const pet = getPetObj(event.currentTarget);
      addInfoForCard(pet);
      openPopUp();
    });
  }
}

document.querySelector(".popup__cross").addEventListener("click", (e) => {
  closePopUp();
});
document.querySelector(".overlay").addEventListener("click", (e) => {
  closePopUp();
});

function openPopUp() {
  document.querySelector(".pets__popup").classList.add("pets__popup-act");
  document.querySelector(".overlay").classList.add("overlay-act");
  document.body.style.overflow = "hidden";
}

function closePopUp() {
  document.querySelector(".pets__popup").classList.remove("pets__popup-act");
  document.querySelector(".overlay").classList.remove("overlay-act");
  document.body.style.overflow = "auto";
}

function getPetObj(petEvent) {
  petEvent = petEvent.querySelector(".pet__title").innerText;
  let pet = pets.filter((pet) => pet.name === petEvent);
  return pet[0];
}

function addInfoForCard(pet) {
  document.querySelector(".popup__img img").src = pet.img;
  document.querySelector(".popup__title").innerText = pet.name;
  document.querySelector(".popup__subtitle").innerText = `${pet.type} - ${pet.breed}`;
  document.querySelector(".popup__text").innerText = pet.description;

  const list = document.querySelectorAll(".popup__item");
  list[0].querySelector("span").innerText = pet.age;
  list[1].querySelector("span").innerText = pet.inoculations;
  list[2].querySelector("span").innerText = pet.diseases;
  list[3].querySelector("span").innerText = pet.parasites;

  alignCard();
}

function alignCard() {
  setTimeout((e) => {
    let element = document.querySelector(".pets__popup");
    element.style.top = `${window.pageYOffset + (document.documentElement.clientHeight - element.offsetHeight) / 2}px`;
  }, 0);
}

// start pagination
const paginationData = {
  currentPage: 1,
  screenWidth: null,
  pets: [],
  currentPets: [],
};
addPagination();

function addPagination() {
  handleResize();
  createArrPaggination();
  window.addEventListener("resize", handleResize);
  createCurrentPetsPage(paginationData);

  showCards(paginationData.currentPets);
}

function createCurrentPetsPage({ currentPage, pets }) {
  if (currentPage === 1) {
    paginationData.currentPets = pets.slice(0, 8);
  }
}

function createArrPaggination() {
  for (let i = 0; i < 6; i++) {
    const localArray = Array.from(pets);
    shuffleArray(localArray);
    paginationData.pets = [...paginationData.pets, ...localArray];
  }
}
console.log(paginationData.pets, "paginationData.pets");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleResize() {
  paginationData.screenWidth = window.innerWidth;
}

function showCards(pets) {
  console.log(paginationData.screenWidth);
  if (paginationData.screenWidth > 1279) {
    console.log("hre99");
    const fragment = document.createDocumentFragment();
    const cardItem = document.querySelector("#petCard");

    pets.forEach((card) => {
      const cardClone = cardItem.content.cloneNode(true);
      cardClone.querySelector(".image").src = card.img;
      cardClone.querySelector(".pet__title").textContent = card.name;
      fragment.append(cardClone);
    });
    document.querySelector(".pets__cards").innerHTML = "";
    document.querySelector(".pets__cards").appendChild(fragment);
  }
}
