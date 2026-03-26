// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
}

document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
