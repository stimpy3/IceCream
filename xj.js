//----------adboard---------------------------------------------------------
const adboard = document.getElementById("adboard");
const images = ["sale1.png", "sale2.png", "sale3.png"]; // Array of image URLs
let currentImageIndex = 0;

function changeImage() {
  adboard.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(changeImage, 5000); // Change image every 5 seconds (5000 milliseconds)
}

changeImage(); // Start the slideshow
//--------------------------------------------------------------------------

//-----------search--------------------------------------------------------
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".searchInput");
//event in button search (button click)
searchBtn.addEventListener("click", function() {
  let input = document.querySelector(".searchInput").value;
  console.log(input);
}); 
//event in input field (enter key pressed)
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let input = document.querySelector(".searchInput").value;
    console.log(input);
  }
}); 
//--------------------------------------------------------------------------

//------------------filter--------------------------------------------------------
allDiv=document.querySelectorAll(".cards");
let ice = ["aurora", "slub", "cotton", "tank"];
let milk=["skirt","sweatshirt","croptop","cottontop"];
let cake=["dino","hoop","crayon","disneyy"];
let showDiv = [];

function updateVisibleDivs() {
  allDiv.forEach(div => {
      if (showDiv.includes(div.id)) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  });
}

function iceButton() {
  showDiv = [...ice];
  console.log(showDiv);
  updateVisibleDivs();
}

function milkButton() {
  showDiv = [...milk];
  console.log(showDiv);
  updateVisibleDivs();
}

function cakeButton() {
  showDiv = [...cake];
  console.log(showDiv);
  updateVisibleDivs();
}
//--------------------------------------------------------------------------

//-------------------ADD quantity-------------------------------------------
const addBtns = document.querySelectorAll(".add");

addBtns.forEach(addBtn => {
    let originalText = addBtn.innerText;
    let originalPrice = addBtn.nextElementSibling.innerText; // Assuming the price is in the next element

    addBtn.addEventListener("click", function() {
        this.innerText = "Added";
        this.classList.remove("add");
        this.classList.add("add2");
        const priceElement = this.nextElementSibling;
        priceElement.innerHTML = `
            <div class="stepper">
                <button class="stepper-btn minus">-</button>
                <div class="stepper-number">1</div>
                <button class="stepper-btn plus">+</button>
            </div>`;
        initializeStepper(priceElement, this, originalText, originalPrice);
        
    });
});

function initializeStepper(container, addBtn, originalBtnText, originalPrice) {
    let currentValue = 1;
    const numberDisplay = container.querySelector('.stepper-number');

    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('minus')) {
            currentValue--;
            if (currentValue === 0) {
                // Revert to original state
                addBtn.innerText = originalBtnText;
                addBtn.classList.remove("add2");
                addBtn.classList.add("add");
                container.innerText = originalPrice;
            } else {
                numberDisplay.textContent = currentValue;
            }
        } else if (event.target.classList.contains('plus')) {
            currentValue++;
            numberDisplay.textContent = currentValue;
        }
    });
}



//--------------------------------------------------------------------------
