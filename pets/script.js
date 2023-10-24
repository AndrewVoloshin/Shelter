var linkNav = document.querySelectorAll('[href^="#"]')
  V = 0.25; 
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      e.preventDefault(); 
      var w = window.pageYOffset, 
        hash = this.href.replace(/[^#]*(.*)/, "$1"); 
      (t = document.querySelector(hash).getBoundingClientRect().top), 
        (start = null);
      requestAnimationFrame(step); 
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; 
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
  pageCount: null,
};

const buttonAheadOne = document.querySelector(".aheadone");
buttonAheadOne.addEventListener("click", (e) => ++paginationData.currentPage);

const buttonAheadAll = document.querySelector(".aheadall");
buttonAheadAll.addEventListener("click", (e) => {
  paginationData.currentPage = paginationData.pageCount;
});

const buttonBackOne = document.querySelector(".backone");
buttonBackOne.addEventListener("click", (e) => --paginationData.currentPage);

const buttonBackAll = document.querySelector(".backall");
buttonBackAll.addEventListener("click", (e) => (paginationData.currentPage = 1));

const pagination = document.querySelector(".pagination ");

pagination.addEventListener("click", (event) => {
  setCardsOnPage(paginationData);
  showCards(paginationData.currentPets);
  document.querySelector(".curpage").textContent = paginationData.currentPage;
  checkButtonOnDisable();
  addEventOnPetsCard()
});

addPagination();

function addPagination() {
  handleResize();
  window.addEventListener("resize", handleResize);
  createArrPaggination();
  setCardsOnPage(paginationData);
  showCards(paginationData.currentPets);
}

function checkButtonOnDisable() {
  if (paginationData.currentPage === 1) {
    buttonBackOne.disabled = buttonBackAll.disabled = true;
    buttonAheadOne.disabled = buttonAheadAll.disabled = false;
  }

  if (paginationData.currentPage > 1 && paginationData.currentPage < paginationData.pageCount) {
    buttonBackOne.disabled = buttonBackAll.disabled = false;
    buttonAheadOne.disabled = buttonAheadAll.disabled = false;
  }

  if (paginationData.currentPage === paginationData.pageCount) {
    buttonBackOne.disabled = buttonBackAll.disabled = false;
    buttonAheadOne.disabled = buttonAheadAll.disabled = true;
  }
}

function setCardsOnPage({ currentPage, pets, screenWidth }) {
  let cardsPerPage;
  if (screenWidth > 1279) cardsPerPage = 8;
  else if (screenWidth >= 768 && screenWidth < 1280) cardsPerPage = 6;
  else if (screenWidth <= 767) cardsPerPage = 3;

  paginationData.currentPets = pets.slice(cardsPerPage * (currentPage - 1), cardsPerPage * currentPage);
}

function createArrPaggination() {
  for (let i = 0; i < 6; i++) {
    const localArray = Array.from(pets);
    shuffleArray(localArray);
    paginationData.pets = [...paginationData.pets, ...localArray];
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleResize() {
  paginationData.screenWidth = window.innerWidth;
  setCountPage(paginationData.screenWidth);
  if (paginationData.currentPage > paginationData.pageCount) paginationData.currentPage = paginationData.pageCount;
  document.querySelector(".curpage").textContent = paginationData.currentPage;
  checkButtonOnDisable();
  setCardsOnPage(paginationData);
  showCards(paginationData.currentPets);
  addEventOnPetsCard() 
}

function setCountPage(screenWidth) {
  if (screenWidth > 1279) paginationData.pageCount = 6;
  if (screenWidth >= 768 && screenWidth < 1280) paginationData.pageCount = 8;
  if (screenWidth <= 767) paginationData.pageCount = 16;
}

function showCards(currentPets) {
  const fragment = document.createDocumentFragment();
  const cardItem = document.querySelector("#petCard");

  currentPets.forEach((card) => {
    const cardClone = cardItem.content.cloneNode(true);
    cardClone.querySelector(".image").src = card.img;
    cardClone.querySelector(".pet__title").textContent = card.name;
    fragment.append(cardClone);
  });
  document.querySelector(".pets__cards").innerHTML = "";
  document.querySelector(".pets__cards").appendChild(fragment);
}

 

// Popup start
addEventOnPetsCard()
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
document.querySelector(".overlay ").addEventListener("click", (e) => {
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
  document.querySelector(
    ".popup__subtitle"
  ).innerText = `${pet.type} - ${pet.breed}`;
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
    element.style.top = `${
      window.pageYOffset +
      (document.documentElement.clientHeight - element.offsetHeight) / 2
    }px`;
  }, 0);
}


