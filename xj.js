//----------------Item-Information------------------------------------------
const flavours = {
  cookie: { name: "cookie2", qty: 0, price: 199, state:true},
  blueberry: { name: "blueberry2", qty: 0, price: 180, state:true},
  raspberry: { name: "raspberry2", qty: 0, price: 219, state:true},
  cottoncandy: { name: "cottoncandy2", qty: 0, price: 249, state:true},
  coconut: { name: "coconut2", qty: 0, price: 165, state:true},
  mint: { name: "mint2", qty: 0, price: 180, state:true},
  strawberry: { name: "strawberry2", qty: 0, price: 172, state:true},
  mango: { name: "mango2", qty: 0, price: 180, state:true},
  banana: { name: "banana2", qty: 0, price: 165, state:true},
  walnut: { name: "walnut2", qty: 0, price: 190, state:true},
  pista: { name: "pista2", qty: 0, price: 159, state:true},
  vanilla: { name: "vanilla2", qty: 0, price: 159, state:true},
  watermelon: { name: "watermelon2", qty: 0, price: 205, state:true},
  mocha: { name: "mocha2", qty: 0, price: 199, state:true},
  butterscotch: { name: "butterscotch2", qty: 0, price: 165, state:true},
  pineapple: { name: "pineapple2", qty: 0, price: 205, state:true},
  lemon: { name: "lemon2", qty: 0, price: 145, state:true},
  brownie: { name: "brownie2", qty: 0, price: 165, state:true},
  rainbow: { name: "rainbow2", qty: 0, price: 179 , state:true},
  chocolate: { name: "chocolate2", qty: 0, price: 152 , state:true},
  peanut: { name: "peanut2", qty: 0, price: 175, state:true},
  cashew: { name: "cashew2", qty: 0, price: 144, state:true},
  cheese: { name: "cheese2", qty: 0, price: 295, state:true},
  almond: { name: "almond2", qty: 0, price: 150, state:true}
};
//--------------------------------------------------------------------------



//-------logo-refresh-all-divs----------------------------------------------
const logoRefresh= document.querySelector("#logo");
/*which is correct
logoRefresh.addEventListener("click",refreshDiv);
or
logoRefresh.addEventListener("click",refreshDiv());

Function Reference vs. Function Call:
refreshDiv (without parentheses) is a reference to the function itself.
refreshDiv() (with parentheses) is a call to execute the function immediately.

When you use parentheses () after a function name, JavaScript interprets this as an
 instruction to run the function right away.
This happens at the point where the code is parsed, not when the event occurs*/
logoRefresh.addEventListener("click",refreshDiv);
function refreshDiv() {
  const screenWidth = window.innerWidth;
  
  allDiv.forEach(div => {
    if (screenWidth > 625) {
      div.style.display = "block";
    } else {
      div.style.display = "flex";
      div.style.flexDirection = "row";
    }
  });
}
//--------------------------------------------------------------------------



//-----------search--------------------------------------------------------
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".searchInput");
const allDiv = document.querySelectorAll(".cards");

const cookie2 = `chocochipchoco chipallbiscuitsclassicscookies&creamscookiesandcreamscookies & creamscookies and creamsoreoscookiesdoughcookiedoughcookie dough cookies
dough cookies&creamscookiesandcreamscookies & creamscookies and creamsoreoscookiesdoughcookiedoughcookie dough cookies`;
const blueberry2 = `allnaturalblueberryblue berrybluberryblu berrypurpleblack currantblackcurrantblack currentblackcurrentHuckleberryfruits`;
const raspberry2 = `allrednaturalraspberryrasp berryrapsberryraps berrypurplepinkcocoa raspberrycocao raspberry coco raspberry  fruits`;
const cottoncandy2 = `alluniquespecialcottoncandycotton candycreamcottoncream candy cream cotton creamcandy blue and pink bluepink blue pink`;
const coconut2=`allcoconut coco nut nariyalmalai`;
const mint2=`allgreenmintchocochip chocomint choco mint choco chip mint chip choco mintchipchoco`;
const  strawberry2=`allnaturalpinkstrawberrystrawberriesstraw berriesstraw berrysummerwintericecreamstrawberry icecreamstrawberry ice creamstrawberries icecream`;
const  mango2=`allnaturalsummeryellowmangomangoes icecreammango icecreammango ice creammangoes ice cream`;
const  banana2=`allnaturalfruitsbananabannanabannablue banana blue bannana blue banna bluebananabluebannanabluebannablue`;
const  walnut2=`alldry fruitnaturalnutswalnutwallnutdry`;
const  pista2=`allnaturalnuts kesarpistakesar cesarpistacesar kesar pista kesar cesar pista cesar pesta`;
const  vanilla2=`allclassicplainplanenoflavourvanillawhiteicecream white ice cream vanilla ice cream vanilla`;
const  watermelon2=`allredpinknaturalfruits watermelonwater melon watermalon water malonsummer`;
const  mocha2=`allcoffeemochalatteCappuccinobitterbrownblack`;
const  butterscotch2=`allyellowbutterscotchbutter scotchbutter skotchbutter skoch butter scochskotch butter`;
const  pineapple2=`allyellownaturalfruitspineapplepine applepine aplepineapleananasannanasanas`;
const  lemon2=`allyellownaturalfruitssourzesttinglemonlimboolimelemonlime`;
const  brownie2=`allbrowniechocolatecakechoclateblackbrowncocoacocococao`;
const  rainbow2=`allrainbowuniquecolorscolourslemonstrawberryorangegrapecolorfulcolourful`;
const  chocolate2=`allblackbrowncocoacocococaoclassicchocolateclassic chocolate classic classicchoclateclassic choclate classic`;
const  peanut2=`allnaturalnutspeanutbutterpeenutbutterpeanut butter peanutpeenut butter`;
const  cashew2=`alldry fruitnaturalnutscaramelcashewcarmelcashewkaramelcashewkeramelcashewcarmalcashewcaramalcashew caramel cashewcarmel cashewkaramel cashewkeramel cashewcarmal cashewcaramal cashew`;
const  cheese2=`allcheesecakechesecakecheesycakecheasecakechasecakecheese cakechese cakecheesy cakechease cakechase cake`;
const  almond2=`alldry fruitnaturalnutsalmondallmondaolmondbadambaddamroastalmondroastedalmondroastroasted almondroast almondroast badamroasted badam`;

/*why a separate fiter div function
The issue in your code is that the event listeners and the div filtering logic are not connected.
 The div filtering is running immediately, before any input is provided.*/
 function filterDivs(input) {
  const screenWidth = window.innerWidth;
  
  allDiv.forEach(div => {
    /*eval necessary*/
    if (eval(flavours[div.id].name).trim().toLowerCase().includes(input.trim().toLowerCase())) {
      if (screenWidth > 625) {
        div.style.display = 'block';
      } else {
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
      }
    } else {
      div.style.display = 'none';
    }
  });
}
//live search
searchInput.addEventListener("keyup", function() {
  const input = searchInput.value;
  if (input.length) {
    filterDivs(input);
  } 
  const screensizewidth=window.innerWidth;
  const adboard= document.getElementById('adboard');
  const ProductDisplayDiv = document.getElementById('productDisplayDiv');
  if(screensizewidth>625){
  ProductDisplayDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  else
  {adboard.scrollIntoView({behavior: 'smooth', block: 'start'});
}
});

searchBtn.addEventListener("click", function() {
  const input = searchInput.value;
  filterDivs(input);
});

searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const input = searchInput.value;
    filterDivs(input);
  }
});

// Add this function to handle window resizing
window.addEventListener('resize', function() {
  const input = searchInput.value;
  if (input.length) {
    filterDivs(input);
  } else {
    refreshDiv();
  }
});
//--------------------------------------------------------------------------



//----------adboard---------------------------------------------------------

//without Manual contol auto slideshow============================

/*const adboard = document.getElementById("adboard");
const images = ["sale1.png", "sale2.png", "sale3.png"]; // Array of image URLs
const colors= ["#957FFC","#E0A8A2","#F8D871"];
let currentImageIndex = 0;
function changeImage() {
  adboard.style.backgroundImage = `url(${images[currentImageIndex]})`;
  adboard.style.backgroundColor=colors[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(changeImage, 5000); // Change image every 5 seconds (5000 milliseconds) 
}
//setInterval(changeImage, 5000); doesnt show img for first 5 sec, so didn't use
changeImage();*/


//Manual + automatic slideshow
const adboard = document.getElementById("adboard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = ["sale1.png", "sale2.png", "sale3.png"]; // Array of image URLs
const colors = ["#957FFC", "#E0A8A2", "#A7B066"];
let currentImageIndex = 0;
let slideInterval; /*global necessay because we have set interval with variable slideInterval 
 if this variable was local then each time the function containing this local is called
 a new interval is set so this might lead to multiple intervals which will cause unpredictable 
 slideshow behaviour*/
const dot=document.getElementsByClassName("dot");
const dot1=document.getElementById("dot1");
const dot2=document.getElementById("dot2");
const dot3=document.getElementById("dot3");
function updateImage() {
  adboard.style.backgroundImage = `url(${images[currentImageIndex]})`;
  adboard.style.backgroundColor = colors[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
  resetTimer();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
  resetTimer();
}

function resetTimer() {
  clearInterval(slideInterval);//important to clear previous ACTIVE interval which was set
  //on first time we haven't called setInterval yet, there are no ACTIVE INTERVALS to be cleared. 
  //Calling clearInterval with a non-existent interval ID won't affect anything. The function 
  //will simply recognize there's no matching interval and do nothing.
  //No error thrown if we try to clear an interval that isn't active
  if(currentImageIndex==0){
   dot3.style.backgroundColor="white";
   dot3.style.border="none"
   dot2.style.backgroundColor="white";
   dot2.style.border="none"
   dot1.style.backgroundColor="#454545";
   dot1.style.border="1px solid white"
  }
  else if(currentImageIndex==1){
   dot3.style.backgroundColor="white";
   dot3.style.border="none"
   dot1.style.backgroundColor="white";
   dot1.style.border="none"
   dot2.style.backgroundColor="#454545";
   dot2.style.border="1px solid white"
  }
  else if(currentImageIndex==2){
    dot1.style.backgroundColor="white";
    dot1.style.border="none"
    dot2.style.backgroundColor="white";
    dot2.style.border="none"
    dot3.style.backgroundColor="#454545";
    dot3.style.border="1px solid white"
  }
  slideInterval = setInterval(nextImage, 5000);
}

// Set up event listeners for manual controls
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initialize the slideshow
 updateImage();
 resetTimer();
//--------------------------------------------------------------------------




//------------------filter--------------------------------------------------------

let classic = ["cookie","chocolate","vanilla","mocha","butterscotch","brownie"];
let fruit=["strawberry","mango","banana","watermelon","pineapple","blueberry","raspberry","coconut","lemon"];
let nuts=["walnut","pista","peanut","almond","cashew"];
let unique=["cottoncandy","rainbow","cheese","mint"];

let showDiv = [];

function updateVisibleDivs() {
  const ProductDisplayDiv = document.getElementById('productDisplayDiv');
  ProductDisplayDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
  allDiv.forEach(div => {
      if (showDiv.includes(div.id)) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  });
}
//need for spread operator ...
/*when you use ...classic,  it doesn't modify the original classic array. It creates a new array
 containing all the elements from classic. This is important because if you directly 
 assigned classic to showDiv, any modifications to showDiv would also affect classic.
 Creates a new array: Instead of assigning showDiv = classic, which would make showDiv reference
  the same array as classic, this creates a new array with the same elements.
Avoids mutation: Any changes to showDiv won't affect the original classic array.
Flexibility: If classic is not an array but another iterable (like a NodeList),
 the spread operator converts it into a proper array.*/

function classicButton() {
  showDiv = [...classic];
  console.log(showDiv);
  updateVisibleDivs();
}

function fruitButton() {
  showDiv = [...fruit];
  console.log(showDiv);
  updateVisibleDivs();
}

function nutsButton() {
  showDiv = [...nuts];
  console.log(showDiv);
  updateVisibleDivs();
}

function uniqueButton() {
  showDiv = [...unique];
  console.log(showDiv);
  updateVisibleDivs();
}
//--------------------------------------------------------------------------



//-------------------ADD quantity-------------------------------------------
const addBtns = document.querySelectorAll(".add");

addBtns.forEach(addBtn => {
    let originalPrice = addBtn.nextElementSibling.innerText; // Assuming the price is in the next element
    const cardElement = addBtn.closest('.cards');
    addBtn.addEventListener("click", function() {
      if(flavours[cardElement.id].state){
        flavours[cardElement.id].state=false;
        this.innerText = "Added";
        this.classList.remove("add");
        this.classList.add("add2");
        const priceElement = this.nextElementSibling;
        priceElement.innerHTML = `
            <div class="stepper">
                <button class="stepper-btn" id="minus">-</button>
                <div class="stepper-number">1</div>
                <button class="stepper-btn" id="plus">+</button>
            </div>`;
        initializeStepper(priceElement, this, originalPrice,cardElement.id);
      }
      else{
        flavours[cardElement.id].state=true;
        flavours[cardElement.id].qty=0;
        addBtn.innerText = "Add";
        addBtn.classList.remove("add2");
        addBtn.classList.add("add");
        const priceElement = this.nextElementSibling;
        priceElement.innerText = originalPrice;
      }

    });
  

});
//but how has putting it in a FUNCTION fixed the issue
/*The issue with your code is that you're trying to add event listeners to the minus and plus buttons 
before they exist in the DOM. These buttons are created dynamically when the addbtn is clicked, but
 the event listeners are being added when the script first runs. 
Timing of execution:
In the original code, the event listeners for minus and plus were being added immediately when the 
script ran. At that point, these elements didn't exist in the DOM, so the querySelector calls returned
 null, and no listeners were actually attached.
Function creation:
By putting the event listener code into a function (addPlusMinusListeners()), we're not executing this 
code immediately. We're just defining what should happen when the function is called.
Delayed execution:
The key is when and where we call this function. We call addPlusMinusListeners() right after we
 create the new buttons in the DOM:
Correct timing:
Now, when addPlusMinusListeners() is called, the minus and plus buttons actually exist in the DOM.
 So when the function runs document.querySelector("#minus") and document.querySelector("#plus"), 
 it successfully finds these elements and can attach the event listeners to them.*/
function initializeStepper(container, addBtn,originalPrice,id) {
  /*When we call this.closest('.cards') from the "Add" button, it's looking for the nearest 
  ancestor (including itself) that matches the selector .cards.*/
    flavours[id].qty= 1;
    const numberDisplay = container.querySelector('.stepper-number');
    const minus= container.querySelector("#minus");  
    const plus= container.querySelector("#plus"); 
    /* why container.query and not document.query
    
    By using document.querySelector only some utton wrer increment/decrementing and other cards were 
    chaning by just changing 1 card. the reason is that, the listeners were being attached to the first 
    matching element in the document, rather than the specific elements within each card. it was 
    selecting the first elements with these classes in the entire document. This meant that clicking 
    the plus or minus buttons would always affect the first item added, regardless of which item 
    you were trying to modify.
When you changed it to container.querySelector, the event listeners were correctly attached to the 
specific elements within the respective card, allowing multiple items to be independently managed.
const minus= document.querySelector(".minus");
const plus= document.querySelector(".plus");
This selects the first .minus and .plus elements in the document, which means all cards were 
incorrectly referencing the same buttons.
const minus= container.querySelector(".minus");
const plus= container.querySelector(".plus");
This selects the .minus and .plus elements within the container, ensuring each card's stepper 
buttons are managed independently.

Event Binding Timing:

The initializeStepper function is called each time an item is added, but it was selecting 
buttons globally.
This meant it always bound to the first set of buttons created, regardless of which item was
 being added.


Dynamic Content:

Your stepper buttons are created dynamically when an item is added.
This dynamic creation makes it more crucial to scope the selection to the specific container.


Context-Dependent Functionality:

In this case, the functionality needed to be specific to each item, which wasn't achieved
 with a global selector(document).

Why didn't I do this type of change before in any other code where i have used 
document.querySelector()
In other parts of your code, you might be selecting elements that are:
a) Present in the initial HTML
b) Unique across the document
c) Not requiring item-specific behavior
*/  
        minus.addEventListener("click",function(){
          flavours[id].qty--;
            if (flavours[id].qty=== 0) {
                // Revert to original state
                flavours[id].state=true;
                addBtn.innerText = "Add";
                addBtn.classList.remove("add2");
                addBtn.classList.add("add");
                container.innerText = originalPrice;
            } else {
                numberDisplay.textContent = String(flavours[id].qty);
            }
        });
        
        plus.addEventListener("click",function(){
          flavours[id].qty++;
            numberDisplay.textContent = String(flavours[id].qty);
        });
  
}
//--------------------------------------------------------------------------

//----------------------------frequently-asked-questions--------------------
let ingredientanswer=document.querySelector("#ingredientanswer");
let openinganswer=document.querySelector("#openinganswer");
let nutfreeanswer=document.querySelector("#nutfreeanswer");
let expirydateanswer=document.querySelector("#expirydateanswer");
let show=document.querySelectorAll(".show");
let ing=document.querySelector("#ing");
let open=document.querySelector("#open");
let nutf=document.querySelector("#nutf");
let expd=document.querySelector("#expd");
let check={
  ingC:0,
  opC:0,
  nuC:0,
  exC:0
};
function ingredient(){
 if(check["ingC"]==0){
 show.forEach(sign =>{
  sign.innerText="+";
 })
 ing.innerText="-";
 ingredientanswer.style.display="block";
 openinganswer.style.display="none";
 nutfreeanswer.style.display="none";
 expirydateanswer.style.display="none";
 check={
  ingC:0,
  opC:0,
  nuC:0,
  exC:0
};
 check["ingC"]=1;
 }
 else if(check["ingC"]==1){
  ing.innerText="+";
 ingredientanswer.style.display="none";
 check["ingC"]=0;
 }
}

function opening(){
  if(check["opC"]==0){
    show.forEach(sign =>{
      sign.innerText="+";
     })
    open.innerText="-";
    openinganswer.style.display="block";
    ingredientanswer.style.display="none";
    openinganswer.style.display="block";
    nutfreeanswer.style.display="none";
    expirydateanswer.style.display="none";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["opC"]=1;
    }
    else if(check["opC"]==1){
     open.innerText="+";
    openinganswer.style.display="none";
    check["opC"]=0;
    }
}

function nutfree(){
  show.forEach(sign =>{
    sign.innerText="+";
   })
  if(check["nuC"]==0){
    nutf.innerText="-";
    ingredientanswer.style.display="none";
    openinganswer.style.display="none";
    nutfreeanswer.style.display="block";
    expirydateanswer.style.display="none";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["nuC"]=1;
    }
    else if(check["nuC"]==1){
     nutf.innerText="+";
    nutfreeanswer.style.display="none";
    check["nuC"]=0;
    }
}

function expirydate(){
  show.forEach(sign =>{
    sign.innerText="+";
   })
  if(check["exC"]==0){
    expd.innerText="-";
    ingredientanswer.style.display="none";
    openinganswer.style.display="none";
    nutfreeanswer.style.display="none";
    expirydateanswer.style.display="block";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["exC"]=1;
    }
    else if(check["exC"]==1){
     expd.innerText="+";
     expirydateanswer.style.display="none";
    check["exC"]=0;
    }
}
//--------------------------------------------------------------------------
