const colorModeButton = document.querySelector("#color-mode");
const body = document.body;


colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "White Mode";
    } else {
        colorModeButton.innerText = "Black Mode";
    }
};
