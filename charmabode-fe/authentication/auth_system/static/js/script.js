let currentSlide = 0;
const designBoxes = document.querySelectorAll(".design-box");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const designBoxContainer = document.querySelector(".design-box-container");

function updateSlide() {
  const offset = -currentSlide * (designBoxes[0].offsetWidth + 20); // Adjust 20 to match your design box margin
  designBoxContainer.style.transform = `translateX(${offset}px)`;
}

function checkDesignCount() {
  if (designBoxes.length <= 5) {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }

  // Set container width to accommodate all designs
  designBoxContainer.style.width = `${designBoxes.length * (designBoxes[0].offsetWidth + 20)}px`;
}

let totalDesigns = designBoxes.length;

function slideDesigns(direction) {
//   currentSlide = (currentSlide + direction + designBoxes.length) % designBoxes.length;
currentSlide = (currentSlide + direction + totalDesigns) % totalDesigns;
    updateSlide();
}

prevButton.addEventListener("click", () => slideDesigns(-1));
nextButton.addEventListener("click", () => slideDesigns(1));

window.addEventListener("resize", checkDesignCount);

checkDesignCount(); // Check initial design count
updateSlide(); // Initialize slide on page load



// function goToDesignPage() {
//     window.location.href = "/design/";
//   }
  
  // Prevent clicks in the design box container from triggering the redirection
  designBoxContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  

