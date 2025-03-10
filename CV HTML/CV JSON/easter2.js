let secretCode = "";
const easterEggModal = document.getElementById("easter-egg-2");

document.addEventListener("keydown", function (event) {
    secretCode += event.key;
    if (secretCode.includes("1337")){
        easterEggModal.style.display = "block";
    }
});