const collectionWrappers = document.querySelectorAll(".collection-wrapper");

collectionWrappers.forEach(wrapper => {
    const slider = wrapper.querySelector(".product-slider");
    const slides = slider.querySelectorAll(".slide").length;
    let slideIndex = 0;

    const rightArrow = wrapper.querySelector(".right-arrow");
    const leftArrow = wrapper.querySelector(".left-arrow");

    rightArrow.addEventListener("click", () => {
        slideIndex = Math.min(slideIndex + 1, slides - 1);
        slider.style.transform = `translateX(-${slideIndex * 880}px)`;
    });

    leftArrow.addEventListener("click", () => {
        slideIndex = Math.max(slideIndex - 1, 0);
        slider.style.transform = `translateX(-${slideIndex * 880}px)`;
    });
});
