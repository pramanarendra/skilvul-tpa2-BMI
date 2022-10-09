// Get DOM elements
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let form = document.getElementById("form");


// Input validation
// Check if input not empty and not a negative number
const validate = () => {
    if(weight.value == "" || height.value == "" || parseInt(weight.value) < 0 || parseInt(height.value) < 0) {
        alert("Input is not valid");
        form.reset();
    } else {
        countBMI();
    }
}

// BMI calculator
const countBMI= () => {
    let condition = "";
    let BMI = (weight.value / (height.value / 100)**2).toFixed(1);

    // BMI category
    if (BMI < 18.5) {
        condition = "underweight";
    } else if (BMI <= 24.9) {
        condition = "normal";
    } else if (BMI <= 29.9) {
        condition = "overweight";
    } else if (BMI >= 30) {
        condition = "obese";
    }

    // Show the result in HTML
    document.getElementById("BMI").innerText = BMI;
    document.getElementById("category").innerText = condition;
    document.getElementById("result").style.visibility = "visible";

    // Reset input
    form.reset();
}

// Submit form event
document.getElementById("submit").addEventListener("click", (ev) => {
    ev.preventDefault();
    validate();
});

