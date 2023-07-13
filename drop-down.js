const h3s = document.querySelectorAll("h3.drop-down-invisible");
h3s.forEach(h3 => {
    h3.addEventListener("click", toggleDropDownVisibility);
});

function toggleDropDownVisibility(e) {
    if (e.target.classList.contains("drop-down-invisible")) {
        e.target.classList.remove("drop-down-invisible");
    } else {
        e.target.classList.add("drop-down-invisible");
    }
}
