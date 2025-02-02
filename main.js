// show menu
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".icon .fa-bars");
  const closeIcon = document.querySelector(".icon .fa-xmark");
  const menuList = document.querySelector(".icon-list");

  menuIcon.addEventListener("click", function () {
    menuList.style.display = "flex";
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  });

  closeIcon.addEventListener("click", function () {
    menuList.style.display = "none";
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  });
});

// Select necessary elements
const heroContainer = document.querySelector(".vainglory-hero-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const scrollAmount = 300;

// Event listener for left arrow
leftArrow.addEventListener("click", () => {
  // Check if we are not at the beginning of the scroll
  if (heroContainer.scrollLeft > 0) {
    heroContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
});

// Event listener for right arrow
rightArrow.addEventListener("click", () => {
  // Check if we are not at the end of the scroll
  if (
    heroContainer.scrollLeft + heroContainer.clientWidth <
    heroContainer.scrollWidth
  ) {
    heroContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
});
