const buttonArray = document.querySelectorAll("button");

function toggleButtonAria(button) {
    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    });
}

buttonArray.forEach(toggleButtonAria);

window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("sticky-navbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelectorAll(".accordian-header").forEach((header) => {
    header.addEventListener("click", (event) => {
        header.parentElement.classList.toggle("active");
    });
});
//# sourceMappingURL=map/script.js.map
