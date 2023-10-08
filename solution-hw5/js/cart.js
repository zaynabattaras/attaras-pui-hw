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
// calculates total price of a roll based on glazing, packsize, baseprice
function totalPriceCalc (glazingV, packSize, basePrice) { 
    let tempPrice = (basePrice + glazing[glazingV]) * packing[packSize];
    console.log(glazing[glazingV]);
    // how to round a number to nearest 100th
    //https://www.stechies.com/javascript-round-two-decimal-places/
    return tempPrice.toFixed(2); 
}
let cart = new Set();
// class that stores roll attributes
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
        this.rollCalcPrice = totalPriceCalc(this.glazing, this.size, this.basePrice);
    }
}

// creating instances for roll entries
let originalRoll = new Roll("Original","Sugar milk", "1", 2.49);
let walnutRoll = new Roll("Walnut","Vanilla milk", "12", 3.49);
let raisinRoll = new Roll("Raisin","Sugar milk", "3",2.99);
let appleRoll = new Roll("Apple", "Keep original","3",3.49);
// adding all the rolls to cart set
cart.add(originalRoll);
cart.add(walnutRoll);
cart.add(raisinRoll);
cart.add(appleRoll);
console.log(cart);


//roll is an instance of rolls class
let rollsTotalPrice = document.querySelector("#total-price");
let totalPrice = 0;

//function that adds roll elements to the DOM
function addingRolls(roll){

    let template = document.getElementById("template");
    let clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".roll");// clone  roll layout

    
    let remove = roll.element.querySelector('#remove');
    // when remove is clikced will remove DOM elements for that roll
    remove.addEventListener('click', () => {
        deleteRoll(roll);
      });

    let rollElementList = document.querySelector("#roll-list");
    rollElementList.append(roll.element);

    addRoll(roll);
  }
  // add roll information to the DOM
  function addRoll(roll){

    let imageTemp = roll.element.querySelector("#image");
    let detailTemp = roll.element.querySelector("#details");
    let priceTemp = roll.element.querySelector("#roll-price");
    let rollInfo = rolls[roll.type];


    imageTemp.src = "../assets/products/" + rollInfo["imageFile"];
    imageTemp.alt =roll.type + " Cinnamon Roll";

    detailTemp.innerHTML = imageTemp.alt + '<br> <br>' +  roll.glazing + '<br> <br> Pack Size: ' + roll.size ;

    priceTemp.innerText = "$ " +  roll.rollCalcPrice;
    

  }
  // deletes DOM elements when roll removed and deletes it from cart
  function deleteRoll(roll){
    console.log("in delete roll");
    roll.element.remove();
    cart.delete(roll);
    totalPrice = totalPrice - Number(roll.rollCalcPrice);
    //how to use abs in javascript
    //https://www.w3schools.com/jsref/jsref_abs.asp
    let stringfyTotalPrice = Math.abs(totalPrice).toFixed(2);
    rollsTotalPrice.innerText = "$ " +  stringfyTotalPrice;

  }
  //adds all rolls in cart set
  for (const roll of cart) {
    addingRolls(roll);
    totalPrice += Number(roll.rollCalcPrice);
  }
  // updates DOM with new total price
  rollsTotalPrice.innerText = "$ " +  totalPrice;
  

