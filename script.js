let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === "=") {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error";
            }
        } else if (buttonText === "AC") {
            string = "";
            inputBox.value = "";
        } else if (buttonText === "⌫") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else {
            string += buttonText;
            inputBox.value = string;
        }
    });
});
