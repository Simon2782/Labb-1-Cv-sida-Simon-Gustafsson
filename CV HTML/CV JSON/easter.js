document.getElementById("easter-egg-1").addEventListener("click", function(){
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}