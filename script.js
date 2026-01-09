/* =========================================
   SCROLL CONTROL — MUST RUN FIRST
========================================= */

// prevent browser from restoring scroll position
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// remove hash BEFORE it causes auto-scroll
if (location.hash) {
  history.replaceState(null, "", location.pathname);
}

// always start at top
window.scrollTo(0, 0);


/* =========================================
   THEME SWITCHER
========================================= */

const themeBtn = document.createElement("button");
themeBtn.className = "theme-btn";
themeBtn.textContent = "🌓 Theme";
document.body.appendChild(themeBtn);

// apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
});


/* =========================================
   MOBILE NAV / HAMBURGER
========================================= */

const hamburger = document.getElementById("hamburger");
const body = document.body;

hamburger.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});


/* =========================================
   SMOOTH SCROLL + CLEAN URL
========================================= */

document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });

    // keep URL clean (no #hash)
    history.pushState(null, "", location.pathname);

    // close mobile menu
    body.classList.remove("nav-open");
  });
});
