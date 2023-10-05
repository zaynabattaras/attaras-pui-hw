//making a dictionary with glazing info
let glazing = {
    "Original":0, 
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.50,

};
//making a dictionary with packing size info
let packing = {
    "1":1,
    "3":3,
    "6":5,
    "12":10,
};
let cart = [];
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, totalPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.totalPrice = totalPrice;
    }
}
function totalPriceCalc (glazingV, packSize, basePrice) { 
    let tempPrice = (basePrice + glazing[glazingV]) * packing[packSize];
    console.log(glazing[glazingV]);
    // how to round a number to nearest 100th
    //https://www.stechies.com/javascript-round-two-decimal-places/
    return tempPrice.toFixed(2); 
}

let originalRoll = new Roll("Original","Sugar Milk", "1", 2.49, totalPriceCalc("Sugar Milk", "1", 2.49));
let walnutRoll = new Roll("Walnut","Vanilla Milk", "12", 3.49, totalPriceCalc("Vanilla Milk", "12", 3.49));
let raisinRoll = new Roll("Raisin","Sugar Milk", "3",2.99, totalPriceCalc("Sugar Milk", "3",2.99));
let appleRoll = new Roll("Apple", "Original","3",3.49, totalPriceCalc("Original","3",3.49));
cart.push(originalRoll);
cart.push(walnutRoll);
cart.push(raisinRoll);
cart.push(appleRoll);
console.log(cart);

let templateImg = document.getElementById("images");
let col1 = document.getElementsByClassName("sc-container1-cols")[0];
//let clone = templateImg.content.cloneNode(true);
let shadowImg = col1.attachShadow({ mode: "open" });

let templateDetails = document.getElementById("productDetails");
let col2= document.getElementById("c1col2");

let shadowDetail = col2.attachShadow({ mode: "open" });


function addingRolls(rollI){
    let rollInfo = rolls[rollI.type];

    let cloneTempImg = templateImg.content.cloneNode(true); 
    imageTemp = cloneTempImg.querySelector(".sc");
    imageTemp.src = "..//assets/products/" + rollInfo["imageFile"];
    imageTemp.alt =rollI.type + " Cinnamon Roll"
    shadowImg.appendChild(cloneTempImg);

    let cloneTempDetail = templateDetails.content.cloneNode(true); 
    let detailTemp = cloneTempDetail.querySelector(".sc-container1-col2-rows");
    detailTemp.innerHTML = '<p class = sc-container1-col2-rows>' + imageTemp.alt + '<br> Glazing: ' +  rollI.glazing + '<br> Pack Size: ' + rollI.size + '</p>';
    shadowDetail.append(cloneTempDetail);
  }
  for (let i = 0; i < cart.length; i++) {
    addingRolls(cart[i]);
  }
  
//let clone2 = template.content.cloneNode(true);
//let clone3 = template.content.cloneNode(true);
//shadow.appendChild(clone);
//shadow.appendChild(clone2);
//shadow.appendChild(clone3);

//document.body.appendChild(clone);
