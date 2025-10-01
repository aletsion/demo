// Particle.js configuration
particlesJS("particles-js",{
    "particles":{
        "number":{"value":80},
        "color":{"value":"#ffffff"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.5},
        "size":{"value":3},
        "line_linked":{"enable":true,"distance":120,"color":"#ffffff","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":2}
    },
    "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"}}},
    "retina_detect":true
});

// Dark/Light theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme",document.body.classList.contains("light-theme")?"light":"dark");
});
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light-theme");}

// Copy Portfolio Link
document.getElementById("copyLink").addEventListener("click",()=>{
    navigator.clipboard.writeText(window.location.href)
        .then(()=>alert("Portfolio link đã copy!"))
        .catch(()=>alert("Copy thất bại!"));
});

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});
