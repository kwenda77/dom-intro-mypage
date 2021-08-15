// get a reference to the sms or call radio buttons

const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSetting = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');

// get refences to all the settings fields

const callCostSet = document.querySelector('.callCostSetting');
const smsCostSet = document.querySelector('.smsCostSetting');
const warningLevelSet = document.querySelector('.warningLevelSetting');
const criticalLevelSet = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
const radioAddButton = document.querySelector('.radioAdd');

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

//add an event listener for when the 'Update settings' button is pressed
var callCostSetting = 2.55;
var smsCostSetting = 0.65;
var warningLevelSetting = 30;
var criticalLevel = 50;

var callsTotal = 0;
var smsTotal = 0;

function updateSettings() {

    if (callCostSet.value != "") {
        callCostSetting = Number(callCostSet.value);
    } 
    if (smsCostSet.value != "") {
        smsCostSetting = Number(smsCostSet.value);
    }
    if (warningLevelSet.value != "") {
        warningLevelSetting = Number(warningLevelSet.value);
    }
    if (criticalLevelSet.value != "") {
        criticalLevel = Number(criticalLevelSet.value);
    }

}




//add an event listener for when the add button is presse
function billSettings(){
         

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItemType = billItemTypeWithSettings.value
    // billItemType will be 'call' or 'sms'
  
    if (billItemType === "call"){
        callsTotal += callCostSetting
    }
    else if (billItemType === "sms"){
        smsTotal += smsCostSetting;
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSetting.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);
    
    totalSettings.classList.remove("warning", "danger");

    if (totalCost >= warningLevelSetting && totalCost < criticalLevel){
        // adding the danger class will make the text red
        totalSettings.classList.add("warning");
    }
    else if (totalCost >= criticalLevel){
        totalSettings.classList.add("danger");
    }

}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
updateSettingsBtn.addEventListener("click", updateSettings)
radioAddButton.addEventListener("click", billSettings)















