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

// Animated gradient background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let gradientPos = 0;
function animateGradient(){
    gradientPos += 0.5;
    if(gradientPos>width) gradientPos=0;
    const gradient = ctx.createLinearGradient(0,0,width,height);
    gradient.addColorStop(0,"#36d1dc");
    gradient.addColorStop(0.5,"#5b86e5");
    gradient.addColorStop(1,"#36d1dc");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,width,height);

    requestAnimationFrame(animateGradient);
}
animateGradient();

// Resize
window.addEventListener('resize',()=>{
    width=canvas.width=window.innerWidth;
    height=canvas.height=window.innerHeight;
});
