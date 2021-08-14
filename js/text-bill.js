// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn")
const callsTotalElem = document.querySelector(".callTotalOne")
const smsTotalElem = document.querySelector(".smsTotalOne")
const totalCostElem = document.querySelector(".totalOne")
const textTotalAddBtn = document.querySelector(".textBillTotal")

//create a variable that will keep track of the total bill
var totalCost = 0;
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", function textBillTotal(){
  
        var billTypeEntered = billTypeText.value.trim();

        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
})
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
textTotalAddBtn.addEventListener('click', textBillTotal);