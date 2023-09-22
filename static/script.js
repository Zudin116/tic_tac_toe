let btnField = document.querySelectorAll(".button-option");
let btnReset = document.getElementById("restart");

let xTurn = true;

const enableButtons = () => {
    btnField.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
};

btnField.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
    });
});

btnReset.addEventListener("click", () => {
    xTurn = true;
    enableButtons();
});
//window.onload = enableButtons;