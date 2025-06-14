// Detectar clique do mouse
var buttons = document.querySelectorAll(".drum");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});
// Detectar pressionamento de tecla
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Função para tocar o som
function makeSound(key) {
    switch (key) {
        case "A":
            var crash = new Audio("sounds/crash.mp3");
crash.play();
            break;
        case "S":
            var tom2 = new Audio("sounds/tom2.mp3");
tom2.play();
            break;
        case "D":
            var tom3 = new Audio("sounds/tom3.mp3");
tom3.play();
            break;
        case "G":
        case "g":
            var kickbass = new Audio("sounds/kickbass.mp3");
kickbass.play();
            break;
        case "J":
        case "j":
            var tom1 = new Audio("sounds/tom1.mp3");
tom1.play();
            break;
        case "K":
            var snare = new Audio("sounds/snare.mp3");
snare.play();
            break;
        case "L":
            var crash = new Audio("sounds/crash.mp3");
crash.play();
            break;
            default:
            console.log(key);
    }
}

// Função para animar os botões
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}