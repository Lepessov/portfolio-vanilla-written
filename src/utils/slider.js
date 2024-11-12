
const slider = () => {document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.projects__images');

    sliders.forEach(slider => {
      const mainImage = slider.querySelector('.projects__images-main');
      const sliderImages = slider.querySelectorAll('.projects__images-slider a');

      sliderImages.forEach(image => {
        image.addEventListener('click', (event) => {
          event.preventDefault();

          const clickedImageSrc = image.querySelector('img').src;

          mainImage.src = clickedImageSrc;
        });
      });
    });
  });
}

export default slider;