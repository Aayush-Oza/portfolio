window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
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
const hamburger = document.getElementById("hamburger");
const body = document.body;

hamburger.addEventListener("click", () => {
    body.classList.toggle("nav-open");
});
// CLOSE MENU when a nav link is clicked
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        body.classList.remove("nav-open");
    });
});
