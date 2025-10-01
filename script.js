// Dark/Light Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load theme on page load
if(localStorage.getItem("theme") === "dark") document.body.classList.add("dark-theme");

// Copy Profile Link
document.getElementById("copyLink").addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link profile đã được copy!"))
        .catch(() => alert("Copy thất bại!"));
});
