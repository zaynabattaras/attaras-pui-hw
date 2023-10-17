// getting cart or creating empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//roll is an instance of rolls class
let rollsTotalPrice = document.querySelector("#total-price");
let totalPrice = 0;

//function that adds roll elements to the DOM
function addingRolls(roll,i){

    let template = document.getElementById("template");
    let clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".roll");// clone  roll layout

    
    let remove = roll.element.querySelector('#remove');
    // when remove is clikced will remove DOM elements for that roll
    remove.addEventListener('click', () => {
        deleteRoll(roll,i);
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
  function deleteRoll(roll,i){
    cart = JSON.parse(localStorage.getItem("cart"));
    // how to delete from array: https://sentry.io/answers/remove-specific-item-from-array/
    cart.splice(i,1);
    roll.element.remove();
    totalPrice = totalPrice - Number(roll.rollCalcPrice);
     // updating display after roll removed
    updatingPage();
     //how to use abs in javascript
    //https://www.w3schools.com/jsref/jsref_abs.asp
    let stringfyTotalPrice = Math.abs(totalPrice).toFixed(2);
    rollsTotalPrice.innerText = "$ " +  stringfyTotalPrice;
    //saving new cart
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem("cart")));

  }
  // updates display after roll deleted
  function updatingPage (){
    let allrolls = document.querySelectorAll(".roll");
    // how to loop and delete from parent node: https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
    Array.prototype.forEach.call( allrolls, function( node ) {
      node.parentNode.removeChild( node );
    });
    addDiplay();
  }
  //adds all rolls in cart 
  function addDiplay(){ 
    totalPrice = 0;
    for ( var i in cart) {
      let roll = cart[i];
      addingRolls(roll,i);
      totalPrice += Number(roll.rollCalcPrice);
    
    }
  }
addDiplay();
// updates DOM with new total price
  rollsTotalPrice.innerText = "$ " +  totalPrice.toFixed(2);
  

