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
    "6":6,
    "12":12,
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
let currentGlazing= 0.0;
let currentPackSize = 1;
let basePrice = 2.49;
// creating event listeners to update packing size and glazing whenever the drop down menus are changed
selectglazing.addEventListener("change",updateGlazing);
selectpacksize.addEventListener("change", updatePacking);
//selecting the current total price 
let currentPrice = document.getElementById("totalPrice");
// function to calculate and update the total price based off of new pack size and new glazing options
function priceCalc () { 
    let tempPrice = (basePrice + currentGlazing) * currentPackSize;
    // how to round a number to nearest 100th
    //https://www.stechies.com/javascript-round-two-decimal-places/
    currentPrice.textContent = tempPrice.toFixed(2); 
}
//function to update the glazing option based off what has been selected then using price calc update the total price based off of that choice
function updateGlazing(event){
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    currentGlazing = Number(event.target.value);
    priceCalc();
}
//function to update the pack size option based off what has been selected then using price calc update the total price based off of that choice
function updatePacking(event){
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    currentPackSize = Number(event.target.value);
    priceCalc();
}
