document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.showcase-image');
    let currentImageIndex = 0;
    let fullscreenMode = false;
  
    function openFullscreen() {
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen-image');
      const fullscreenImage = document.createElement('img');
      fullscreenImage.src = images[currentImageIndex].src;
      fullscreenDiv.appendChild(fullscreenImage);
      document.body.appendChild(fullscreenDiv);
  
      const prevArrow = document.createElement('div');
      prevArrow.classList.add('arrow', 'prev-arrow');
      prevArrow.innerHTML = '&#10094;';
      fullscreenDiv.appendChild(prevArrow);
  
      const nextArrow = document.createElement('div');
      nextArrow.classList.add('arrow', 'next-arrow');
      nextArrow.innerHTML = '&#10095;';
      fullscreenDiv.appendChild(nextArrow);
  
      const exitButton = document.createElement('div');
      exitButton.classList.add('exit-button');
      exitButton.innerHTML = 'X';
      fullscreenDiv.appendChild(exitButton);
  
      fullscreenImage.addEventListener('click', toggleFullscreen);
      prevArrow.addEventListener('click', showPreviousImage);
      nextArrow.addEventListener('click', showNextImage);
      exitButton.addEventListener('click', closeFullscreen);
      document.addEventListener('keydown', handleKeydown);
  
      fullscreenMode = true;
    }
  
    function closeFullscreen() {
      const fullscreenDiv = document.querySelector('.fullscreen-image');
      fullscreenDiv.remove();
  
      document.removeEventListener('keydown', handleKeydown);
      fullscreenMode = false;
    }
  
    function toggleFullscreen() {
      if (fullscreenMode) {
        closeFullscreen();
      } else {
        openFullscreen();
      }
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      if (fullscreenMode) {
        const fullscreenImage = document.querySelector('.fullscreen-image img');
        fullscreenImage.src = images[currentImageIndex].src;
      }
    }
  
    function showPreviousImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      if (fullscreenMode) {
        const fullscreenImage = document.querySelector('.fullscreen-image img');
        fullscreenImage.src = images[currentImageIndex].src;
      }
    }
  
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        closeFullscreen();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }
    }
  
    images.forEach(function(image, index) {
      image.addEventListener('click', function() {
        currentImageIndex = index;
        toggleFullscreen();
      });
    });
  });
  