const navbarList = document.getElementById("navbar_list");
const sections = document.querySelectorAll("section");

const sectionNameArray = [];
const sectionIdArray = [];

// extract id and names of sections
for (let section of sections) {
  sectionNameArray.push(section.getElementsByTagName("h2")[0].textContent);

  sectionIdArray.push(`${section.id}`);
}
// build the navbar

function buildNav() {
  for (let i = 0; i < sectionIdArray.length; i++) {
    const liElement = document.createElement("li");
    liElement.classList = "navbar_item";
    liElement.id = `${sectionIdArray[i]}_nav`.toLowerCase();

    navbarList.appendChild(liElement);

    // adds corresponding id

    liElement.innerHTML = `<a class="nav-link">${sectionNameArray[i]}</a>`;

    // adds smooth scrolling
    liElement.addEventListener("click", () => {
      sections[i].scrollIntoView({ behavior: "smooth" });
    });
  }
}

buildNav();

// checks if section container is in viewport

function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.innerWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.innerHeight)
  );
}

//  change landing_container collection into an array
let landingContainers = document.getElementsByClassName("landing_container");

const containerArray = [...landingContainers];

// add an active style when section is in view
containerArray.forEach((container) => {
  let elemId = container.parentElement.id;
  let navItem = document.getElementById(`${elemId}_nav`);

  window.addEventListener("scroll", (e) => {
    if (isInViewport(container)) {
      container.classList.add("landing_active");
      navItem.classList.add("nav_active");
    } else {
      container.classList.remove("landing_active");
      navItem.classList.remove("nav_active");
    }
  });
});

// Hamburger menu

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", openMenu);

function openMenu() {
  if (menu.className === "menu menu-closed") {
    menu.classList.remove("menu-closed");
    menu.classList.add("menu-open");
    menu.innerHTML = `<i class="fas fa-times"></i>`;

    navbar.style.display = "block";
  } else if (menu.className === "menu menu-open") {
    //   close menu
    menu.classList.remove("menu-open");
    menu.classList.add("menu-closed");
    menu.innerHTML = `<i class="fas fa-bars"></i>`;

    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
