let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".calculator button");

let string = "";
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        const operators = ["+", "-", "*", "/", "%"];

        if (buttonText === "=") {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error";
            }
        } 
        else if (buttonText === "AC") {
            string = "";
            inputBox.value = "";
        } 
        else if (buttonText === "⌫") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } 
        else {
            let lastChar = string[string.length - 1];
            if (operators.includes(buttonText) && operators.includes(lastChar)) {
                string = string.slice(0, -1) + buttonText; 
            } else {
                string += buttonText;
            }

            inputBox.value = string;
            inputBox.scrollLeft = inputBox.scrollWidth;
        }
    });
});

const themeBtn = document.getElementById('theme-btn');
const calculator = document.querySelector('.calculator');

themeBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    calculator.classList.toggle('light-mode');

    if (calculator.classList.contains('light-mode')) {
        themeBtn.textContent = "🌙";
        themeBtn.title = "Switch to Dark Mode";
    } else {
        themeBtn.textContent = "🌞";
        themeBtn.title = "Switch to Light Mode";
    }
});

