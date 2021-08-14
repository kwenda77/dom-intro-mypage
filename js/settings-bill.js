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
const updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

//add an event listener for when the 'Update settings' button is pressed

updateSettings.addEventListener('click', function(){

   
    var callCostSetting = callCostSet.value;
    if(parseInt(callCostSetting)<= 29.99)
    {
        callsTotal += parseInt(callCostSetting);
    }

    var smsCostSetting = smsCostSet.value;
    if(parseInt(smsCostSetting)<= 29.99)
    {
        smsTotal += parseInt(smsCostSetting);
    }
    
    var warningLevelSetting = warningLevelSet.value;
    if(parseInt(smsCostSetting)>= 30 || parseInt(smsCostSetting)<=49.99)
            {
        totalCost += parseInt(warningLevelSetting);
       
       }


    
    var criticalLevelSetting = criticalLevelSet.value;;
    if(parseInt(smsCostSetting)>= 50)
    {
        totalCost += parseInt(criticalLevelSetting);
    } 
 
});


//add an event listener for when the add button is pressed

radioAddButton.addEventListener('click', function(){
         

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItemType = billItemTypeWithSettings.value
    // billItemType will be 'call' or 'sms'
  
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSetting.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);
    
    
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalSettings.classList.add("warning");
    }

});

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.












