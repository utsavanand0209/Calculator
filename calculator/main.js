document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("inputBox");
    let currentInput = "";

    const calculate = (expression) => {
        try {
            return Function(`return ${expression}`)();
        } catch {
            return "Error";
        }
    };

    const updateInput = (value) => {
        if (value === "AC") {
            currentInput = "";
        } else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
        } else if (value === "=") {
            currentInput = calculate(currentInput).toString();
        } else {
            if (currentInput === "Error") currentInput = "";
            currentInput += value;
        }

        inputBox.value = currentInput;
    };

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            updateInput(button.innerText);
        });
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (key >= 0 && key <= 9) {
            updateInput(key);
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            updateInput(key);
        } else if (key === "Enter") {
            updateInput("=");
        } else if (key === "Backspace") {
            updateInput("DEL");
        } else if (key === "Escape") {
            updateInput("AC");
        } else if (key === ".") {
            updateInput(".");
        }
    });
});
