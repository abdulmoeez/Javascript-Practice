window.addEventListener('load' , function(){

const pads = document.querySelectorAll(".pads div");
const sounds = document.getElementsByTagName("audio");
const visuals = document.querySelector("#visuals");
const colours = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
]
pads.forEach((pad, index)=>{
    pad.addEventListener("click", (e)=>{
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
    })
})

function createBubbles(index){
    const bubble = document.createElement("div");
    bubble.style.background = colours[index];
    bubble.style.animation = `jump ease 1s`;
    visuals.appendChild(bubble);
    bubble.addEventListener("animationend", function(){
        visuals.removeChild(bubble);
    })
}
})