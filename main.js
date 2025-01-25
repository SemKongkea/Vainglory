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
