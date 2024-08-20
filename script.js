const ul = document.getElementById("add");
const ham = document.getElementsByClassName("ham")[0];

ham.addEventListener("click", () => {
    if (ul.classList.contains("Show")) {  
        ul.classList.remove("Show");
    } else {
        ul.classList.add("Show");
    }
});
