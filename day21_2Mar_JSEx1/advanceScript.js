//SOLID Principles
const ADV_NAME = $.getElementById("userNameAdvance");
const ADV_AGE = $.getElementById("userAgeAdvance");
const ADV_RESULT = $.getElementById("result");
/* if(ADV_AGE != null)
    {
        let currentAge= ADV_AGE.value();
    }
    else{
        currentAge = 0;
    } */
    let currentAge= 0;
//on click event listener 
const DECREASE = $.getElementById("minus");
const INCREASE = $.getElementById("plus");

DECREASE.addEventListener("click", function() {
    //currentAge = ADV_AGE.value() + 1;
    displayAge(currentAge -1);
});
DECREASE.addEventListener("click", function() {
    //currentAge = ADV_AGE.value() - 1;
    displayAge(currentAge+1);
});

displayAge = (currentAge) => {
    $.getElementById("result").innerHTML = currentAge;
    console.log('display' + currentAge);
}