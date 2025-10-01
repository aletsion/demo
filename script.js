// Dark/Light Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme",document.body.classList.contains("light-theme")?"light":"dark");
});
if(localStorage.getItem("theme")==="light") document.body.classList.add("light-theme");

// Copy Profile Link
document.getElementById("copyLink").addEventListener("click",()=>{
    navigator.clipboard.writeText(window.location.href)
        .then(()=>alert("Link profile đã copy!"))
        .catch(()=>alert("Copy thất bại!"));
});

// Scroll reveal
const fadeElems = document.querySelectorAll('.fade-in');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElems.forEach(elem=>{
        const top = elem.getBoundingClientRect().top;
        if(top < triggerBottom) elem.style.animationPlayState='running';
    });
};
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();
