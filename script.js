// THEME SWITCHER
const toggle = document.createElement("button");
toggle.innerText = "🌓 Theme";
toggle.className = "theme-btn";
document.body.appendChild(toggle);

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

toggle.onclick = () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
};
// HAMBURGER MENU (JS Version)
const hamburger = document.getElementById("hamburger");
const body = document.body;

hamburger.addEventListener("click", () => {
    body.classList.toggle("nav-open");
});
