const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slides");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    if (counter === slides.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImage();
};

const goPrev = () => {
    if (counter === 0) {
        counter = slides.length - 1;
    } else {
        counter--;
    }
    slideImage();
};

const slideImage = () => {
    slideContainer.style.transform = `translateX(-${counter * 100}%)`;
};

