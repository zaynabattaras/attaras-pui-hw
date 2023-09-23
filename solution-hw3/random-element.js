//how to use option construcutor for HTMLSelectElement
//https://www.javascripttutorial.net/javascript-dom/javascript-add-remove-options/#:~:text=JavaScript%20uses%20the%20HTMLSelectElement%20type,from%20the%20element.

let glazing = {
    "Keep original":0, 
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.50,

};

let packing = {
    "1":1,
    "3":3,
    "6":6,
    "12":12,
};

let selectglazing = document.querySelector("#glazing-select");

for (const key in glazing) {
    //how to use option construcutor for HTMLSelectElement
    //https://www.javascripttutorial.net/javascript-dom/javascript-add-remove-options/#:~:text=JavaScript%20uses%20the%20HTMLSelectElement%20type,from%20the%20element.
   let optionglazing =  new Option(key,glazing[key]);
   //how to use add method for HTMLSelectElement
   //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add
   selectglazing.add(optionglazing,null);


};

let selectpacksize = document.querySelector("#packing-select");

for (const key in packing){
    //how to use option construcutor for HTMLSelectElement
    //https://www.javascripttutorial.net/javascript-dom/javascript-add-remove-options/#:~:text=JavaScript%20uses%20the%20HTMLSelectElement%20type,from%20the%20element.
    let optionpacking = new Option(key,packing[key]);
    //how to use add method for HTMLSelectElement
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add
    selectpacksize.add(optionpacking, null);
};

let currentGlazing= 0;
let currentPackSize = 1;
let basePrice = 2.49;



selectglazing.addEventListener("change",updateGlazing);
selectpacksize.addEventListener("change", updatePacking);

let currentPrice = document.getElementById("totalPrice");

function priceCalc () {
    let tempPrice = (basePrice + currentGlazing) * currentPackSize;
    // how to round a number to nearest 100th
    //https://stackoverflow.com/questions/14968615/rounding-to-the-nearest-hundredth-of-a-decimal-in-javascript
    currentPrice.textContent = Math.round(tempPrice*100)/100;
}
function updateGlazing(event){
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    currentGlazing = Number(event.target.value);
    priceCalc();
}

function updatePacking(event){
    //how to change string to number 
    //https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
    currentPackSize = Number(event.target.value);
    priceCalc();
}
