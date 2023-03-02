//SOLID Principles
const $ = document;
const NAME = $.getElementById("userName");
const AGE = $.getElementById("userAge");
const RESULT = $.getElementById("resultDisplay");
RESULT.style.display="none";
// Function to get form data
/* const getHeartRate = () => { */
const getHeartRate = () => {
    let name = NAME.value;
    let age = AGE.value;
    let heartRate = `Hi ${String(name).toUpperCase()} your heartrate should not go beyond ${220-age}`;
    /* $.RESULT.text = heartRate; */
    alert(heartRate);
    RESULT.innerHTML = heartRate;
    RESULT.style.display="block";
    alert(heartRate);
}
//on click event listener 
const button = $.getElementById("check");
button.addEventListener("click", getHeartRate);
