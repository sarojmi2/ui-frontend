//SOLID Principles
const $ = document;
const EMAIL = $.getElementById("email");
const NAME = $.getElementById("name");
const PHONE = $.getElementById("phone");
const MSG = $.getElementById("msg");

// Function to get form data
const getMessage = () => {
    let email = EMAIL.value;
    let name = NAME.value;
    let phone = PHONE.value;
    let msg = MSG.value;
    let thankyou = `Hi ${name} thank you for contacting us , we will revert you on your ${email} or ${phone} for your query below ${msg}`;
    $.MSG.innerHTML = thankyou;
    alert(thankyou);
}
//on click event listener 
const btn = $.getElementById("send-msg");
btn.addEventListener("click", {getMessage});

// Rest

// spread operator

const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8];
const arr3 = [...arr1, ...arr2 , 9 , 0];
console.log('spread operator ' + arr3);

// Loop array
const userId = [1,2,4, 6, 7 ,9];
const isEven= (num) => num %2 === 0;
console.log('isEven...' +  isEven);
const newUserId = userId.filter(isEven);
console.log('new user id ' + newUserId);