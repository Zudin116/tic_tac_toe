let btnField = document.querySelectorAll(".button-option");
let btnReset = document.getElementById("restart");
let msg = document.getElementById("message");
let popup = document.querySelector(".popup");
let btnNewGame = document.getElementById("new-game");

let xTurn = true;
let count = 0;
let winCombobs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// 0 1 2
// 3 4 5
// 6 7 8

const enableButtons = () => {
    btnField.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
};

const disableButtons =() => {
    btnField.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide");
};

const drawFunction = () => {
    disableButtons();
    msg.innerHTML = "&#x1F60E; <br> It's a Draw";
};

const winFunction = (letter) => {
    disableButtons();
    xTurn = true;
    count = 0;
    if (letter === "X") {
        msg.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msg.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

const winCheck = () => {
    for (let i of winCombobs) {
        let [element1, element2, element3] = [
            btnField[i[0]].innerText,
            btnField[i[1]].innerText,
            btnField[i[2]].innerText
        ];
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 === element2 && element2 === element3) {
                winFunction(element1);
            }
        }
    }
};

btnNewGame.addEventListener("click", () => {
    enableButtons();
    xTurn = true;
    count = 0;
    popup.classList.add("hide");
});

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
        count += 1;
        if (count === 9) {
            drawFunction();
        }
        winCheck();
    });
});

btnReset.addEventListener("click", () => {
    xTurn = true;
    enableButtons();
});

window.onload = enableButtons;