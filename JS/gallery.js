let currentIndex = 0; // To keep track of the current image index
const images = document.querySelectorAll('.grid-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxText = document.getElementById('lightbox-text'); // Get the text container

// Function to show the lightbox with the clicked image and its text
function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightboxText.textContent = images[currentIndex].alt; // Set the text from the alt attribute
    lightbox.className = 'lightbox-show';
}

// Attach click event listeners to all images
images.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
});

// Function to hide the lightbox
document.querySelector('.close').addEventListener('click', () => {
    lightbox.className = 'lightbox-hidden';
});

// Function to change image and update text
function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    lightboxImg.src = images[currentIndex].src;
    lightboxText.textContent = images[currentIndex].alt; // Update the text as well
}
