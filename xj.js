const adboard = document.getElementById("adboard");
const images = ["sale1.png", "sale2.png", "sale3.png"]; // Array of image URLs
let currentImageIndex = 0;

function changeImage() {
  adboard.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(changeImage, 5000); // Change image every 5 seconds (5000 milliseconds)
}

changeImage(); // Start the slideshow