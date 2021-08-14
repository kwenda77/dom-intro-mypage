// get a reference to the sms or call radio buttons
const billItemType = document.querySelector(".billItemTypeRadio")
const callsTotalElem2 = document.querySelector(".callTotalTwo")
const smsTotalElem2 = document.querySelector(".smsTotalTwo")
const totalCostElem2 = document.querySelector(".totalTwo")
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//const textTotalAddBtn = document.querySelector(".textBillTotal")


//create a variable that will keep track of the total bill
var callsTotal2 = 0;
var smsTotal2 = 0;
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");  
    var billItemType = checkedRadioBtn.value

    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }

callsTotalElem2.innerHTML = callsTotal2.toFixed(2);
smsTotalElem2.innerHTML = smsTotal2.toFixed(2);
var totalCost2 = callsTotal2 + smsTotal2;
totalCostElem2.innerHTML = totalCost2.toFixed(2);

if (totalCost2 >= 50){
    // adding the danger class will make the text red
    totalCostElem2.classList.add("danger");
}
else if (totalCost2 >= 30){
    totalCostElem2.classList.add("warning");
}


})
//To get the bill type to add from the radio button use code like this:

// billItemType will be 'call' or 'sms'


 

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

