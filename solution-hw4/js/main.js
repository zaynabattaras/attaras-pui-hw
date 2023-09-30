//making a dictionary with glazing info
let glazing = {
    "Keep original":0, 
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.50,

};
//making a dictionary with packing size info
let packing = {
    "1":1,
    "3":3,
    "6":5,
    "12":10,
};
//selecting glazing drop down menu
let selectglazing = document.querySelector("#glazing-select");
//looping and adding glazing options
for (const key in glazing) {
   var optionglazing = document.createElement('option'); 
   optionglazing.text = key;
   optionglazing.value = glazing[key];
   selectglazing.add(optionglazing);
}
//selecting packing size drop down
let selectpacksize = document.querySelector("#packing-select");
// looping and adding packing size options
for (const key in packing){
    var optionpacking = document.createElement('option');
    optionpacking.text = key;
    optionpacking.value = packing[key];
    selectpacksize.add(optionpacking);
}
//initializing glazing, pack size, base price variables to compute new price
let currentGlazingP= 0.0;
let currentGlazing = "Keep original";
let currentPackSize = "1";
let currentPackSizeP = 1;
let basePrice = 2.49;
// creating event listeners to update packing size and glazing whenever the drop down menus are changed
selectglazing.addEventListener("change",updateGlazing);
selectpacksize.addEventListener("change", updatePacking);
//selecting the current total price 
let currentPrice = document.getElementById("totalPrice");
// function to calculate and update the total price based off of new pack size and new glazing options
function priceCalc () { 
    let tempPrice = (basePrice + currentGlazingP) * currentPackSizeP;
    // how to round a number to nearest 100th
    //https://www.stechies.com/javascript-round-two-decimal-places/
    currentPrice.textContent = tempPrice.toFixed(2); 
}
//function to update the glazing option based off what has been selected then using price calc update the total price based off of that choice
function updateGlazing(event){
    // how to selected text
    // https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box
    currentGlazing = selectglazing.options[selectglazing.selectedIndex].text;
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript
    currentGlazingP = Number(event.target.value);
    priceCalc();
}
//function to update the pack size option based off what has been selected then using price calc update the total price based off of that choice
function updatePacking(event){
    // how to selected text
    // https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box
    currentPackSize = selectpacksize.options[selectpacksize.selectedIndex].text;
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    currentPackSizeP = Number(event.target.value);
    priceCalc();
}
// array to store rolls added to cart
let cart = [];
// getting url parameter of roll 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
// getting the information for the specific roll
let rollInfo = rolls[rollType];
// getting image element on the page 
let image = document.getElementById("product-image");
// how to update image in javascript
//https://stackoverflow.com/questions/25587973/update-image-src-using-javascript
image.src =  "../assets/products/" + rollInfo["imageFile"];
//updating alt text of image
image.alt = rollType + " Cinnamon Roll";
//getting title element of page
let title = document.getElementById("product-title"); 
//changin title of page
title.innerHTML = rollType + " Cinnamon Roll";
//updating baseproce to match the roll
basePrice = rollInfo["basePrice"];
//updating the baseprice on the page
currentPrice.textContent = basePrice;
// Roll class with attributes for each roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
//getting add cart button element
let addCart = document.getElementById('add-to-cart');
//function when the add to cart button is clicked creates a new roll instance for the roll displayed and pushes it to the cart array
addCart.onclick = function(){
    let newRoll = new Roll(rollType, currentGlazing, currentPackSize, basePrice);
    cart.push(newRoll);
    console.log(cart);
};
