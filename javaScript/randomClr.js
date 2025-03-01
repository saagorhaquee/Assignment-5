document.getElementById("theme-btn").addEventListener("click", function () {

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;


    document.getElementById("bg").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});