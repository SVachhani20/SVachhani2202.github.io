document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.image-slider img');
    let currentSlide = 0;

    function showSlide(n) {
        console.log("Current slide:", n);
        sliderImages.forEach((image) => image.classList.remove('active'));
        sliderImages[n].classList.add('active');
        currentSlide = n;
    }

    showSlide(0);

    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    });

    const previousButton = document.querySelector('.previous');
    previousButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    });
});
