//select all slides
const slides = document.querySelectorAll(".slide");
// select next button
const nextSlide = document.querySelector('.btn-next')

// select pre button
const prevSlide = document.querySelector('.btn-prev')

//loop through to set the translateX property of each slide to their index number * 100%
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// set the position of the current slide to zero
let currSlide = 0;

// set the maximum number of slides
let maxSlide = slides.length - 1

nextSlide.addEventListener('click', () => {

    currSlide === maxSlide ? currSlide = 0 : currSlide++

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
    });

})


prevSlide.addEventListener('click', () => {

    currSlide === 0 ? currSlide = maxSlide : currSlide--

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
    });

})