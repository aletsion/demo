// Particle.js config
particlesJS("particles-js", {
    "particles": {
        "number": {"value":60},
        "color": {"value":"#ffffff"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.5},
        "size":{"value":3},
        "line_linked":{"enable":true,"distance":120,"color":"#ffffff","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":2}
    },
    "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"}}},
    "retina_detect":true
});

// Dark/Light toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme","light");
    } else { localStorage.setItem("theme","dark"); }
});
// Load theme
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light-theme");}

// Copy profile link
document.getElementById("copyLink").addEventListener("click",()=>{
    navigator.clipboard.writeText(window.location.href)
        .then(()=>alert("Link profile đã được copy!"))
        .catch(()=>alert("Copy thất bại!"));
});
