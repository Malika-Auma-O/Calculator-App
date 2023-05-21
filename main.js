let num1 = prompt("enter first number")
let num2 =  prompt("enter second number")

if (isNaN(num1 && num2)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    document.getElementById("num1-el").textContent = parseFloat(num1)
    document.getElementById("num2-el").textContent = parseFloat(num2)
  }






let sumEl = document.getElementById("sum-el")

//clear the sum before making a new calcualtion
let clearSum = () => {
    sumEl.textContent = "Sum:";
  };

let add = () => {
    clearSum();
  let total =  num1 + num2;
  sumEl.textContent += total;
  document.window.reload()
} 

let subtract = () => {
    clearSum();
    let total =  num1 - num2;
  sumEl.textContent += total;
}
let divide = () => {
    clearSum();
    let total =  num1 / num2;
    sumEl.textContent += total;
}
let multiply = () => {
    clearSum();
    let total =  num1 * num2;
    sumEl.textContent += total;
}