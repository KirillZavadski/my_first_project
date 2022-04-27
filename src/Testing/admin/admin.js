function ChangeColor() {
    let green_script;
    green_script = document.querySelector(".section3");
    let button;
    button = document.getElementById("green");

    if(button.checked) {
       green_script.style.backgroundColor = "red";
    } else {
        alert("not checked")
    }
}