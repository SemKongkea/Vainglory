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

// Amount to scroll on each click
const scrollAmount = 300; // Adjust as needed

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

// change back to top ----to---- TOP
const backToTopLink = document.querySelector(".goto-top a");

// Function to update the text based on screen size
function updateBackToTopText() {
  if (window.innerWidth <= 767) {
    backToTopLink.textContent = "Top"; // Change text for small screens
  } else {
    backToTopLink.textContent = "BACK-TO-TOP"; // Default text for larger screens
  }
}

// Run the function on page load
updateBackToTopText();

// Update text dynamically when the window is resized
window.addEventListener("resize", updateBackToTopText);
