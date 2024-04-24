// const inputs = document.querySelectorAll(".input-field");
// const toggle_btn = document.querySelectorAll(".toggle");
// const main = document.querySelector("main");
// const bullets = document.querySelectorAll(".bullets span");
// const images = document.querySelectorAll(".image");

// inputs.forEach((inp) => {
//   inp.addEventListener("focus", () => {
//     inp.classList.add("active");
//   });
//   inp.addEventListener("blur", () => {
//     if (inp.value != "") return;
//     inp.classList.remove("active");
//   });
// });

// toggle_btn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     main.classList.toggle("sign-up-mode");
//   });
// });

// function moveSlider() {
//   let index = this.dataset.value;
//   let currentImage = document.querySelector(`.img-${index}`);
//   images.forEach((img) => img.classList.remove("show"));
//   currentImage.classList.add("show");

//   const textSlider = document.querySelector(".text-group");
//   textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

//   bullets.forEach((bull) => bull.classList.remove("active"));
//   this.classList.add("active");
// }

//   bullets.forEach((bullet) => {
//   bullet.addEventListener("click", moveSlider);
// });



// const inputs = document.querySelectorAll(".input-field");
// const toggle_btn = document.querySelectorAll(".toggle");
// const main = document.querySelector("main");
// const images = document.querySelectorAll(".image");

// inputs.forEach((inp) => {
//   inp.addEventListener("focus", () => {
//     inp.classList.add("active");
//   });
//   inp.addEventListener("blur", () => {
//     if (inp.value !== "") return;
//     inp.classList.remove("active");
//   });
// });

// toggle_btn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     main.classList.toggle("sign-up-mode");
//   });
// });

// function moveSlider(index) {
//   const currentImage = document.querySelector(`.img-${index}`);
//   images.forEach((img) => img.classList.remove("show"));
//   currentImage.classList.add("show");

//   const textSlider = document.querySelector(".text-group");
//   textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
// }

// let currentIndex = 1; // Starting index for the carousel

// function autoChangeSlide() {
//   moveSlider(currentIndex);
//   const bullets = document.querySelectorAll(".bullets span");
//   bullets.forEach((bull) => bull.classList.remove("active"));
//   bullets[currentIndex - 1].classList.add("active");

//   currentIndex = (currentIndex % bullets.length) + 1; // Move to the next index
// }

// const interval = setInterval(autoChangeSlide, 5000); // Change slide every 5 seconds

// // Clear the interval when the user interacts with the page
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     clearInterval(interval);
//   } else {
//     interval = setInterval(autoChangeSlide, 5000);
//   }
// });


// const images = document.querySelectorAll(".image");
// const bullets = document.querySelectorAll(".bullets span");

// // Define the interval for automatic slide change
// let interval;
// let currentIndex = 0;

// function moveSlider(index) {
//   images.forEach((img) => img.classList.remove("show"));
//   images[index].classList.add("show");
// }

// function autoChangeSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   moveSlider(currentIndex);

//   bullets.forEach((bull) => bull.classList.remove("active"));
//   bullets[currentIndex].classList.add("active");
// }

// // Start the automatic slide change interval
// interval = setInterval(autoChangeSlide, 5000); // Change slide every 5 seconds

// // Clear the interval when the user interacts with the page
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     clearInterval(interval);
//   } else {
//     interval = setInterval(autoChangeSlide, 5000);
//   }
// });



// const imagesWrapper = document.querySelector(".images-wrapper");
// const images = document.querySelectorAll(".image");
// const imageWidth = images[0].clientWidth; // Assuming all images have the same width
// let currentIndex = 0;

// function autoChangeSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   const offset = -currentIndex * imageWidth;
//   imagesWrapper.style.transform = `translateX(${offset}px)`;
// }

// let interval = setInterval(autoChangeSlide, 5000); // Change slide every 5 seconds

// // Clear the interval when the user interacts with the page
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     clearInterval(interval);
//   } else {
//     interval = setInterval(autoChangeSlide, 5000);
//   }
// });



// const images = document.querySelectorAll(".image"); // Update this selector
// const bullets = document.querySelectorAll(".bullet"); // Update this selector
// let currentIndex = 0; // Initialize the current index

// function moveSlider(index) {
//   currentIndex = index; // Update the current index
//   images.forEach((img) => img.classList.remove("show"));
//   images[currentIndex].classList.add("show");

//   const textSlider = document.querySelector(".text-group");
//   textSlider.style.transform = `translateY(${-(currentIndex) * 2.2}rem)`;

//   bullets.forEach((bull) => bull.classList.remove("active"));
//   bullets[currentIndex].classList.add("active");
// }

// function autoSlide() {
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % bullets.length; // Increment index cyclically
//     moveSlider(currentIndex);
//   }, 3000); // Adjust the interval time (in milliseconds) as needed
// }

// autoSlide();






const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");

    // Toggle active image based on the current mode
    images.forEach((image) => {
      image.classList.toggle("show");
    });
  });
});
