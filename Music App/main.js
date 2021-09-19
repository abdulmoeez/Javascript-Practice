window.addEventListener('load' , function(){
	const sounds = document.getElementsByTagName('audio')
	const pads = document.querySelectorAll(".pads div")
	const visuals = document.querySelector("#visuals")
	const colors = [
        "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
	]

	
   pads.forEach(function(pad , index){
   	pad.addEventListener('click' , function(){
   		sounds[index].currentTime = 0;
   		sounds[index].play()
   		createBubbles(index);
   	})
   })
	
function createBubbles(index){
	const bubble = document.createElement("div");
   bubble.style.backgroundColor = colors[index];
	bubble.style.animation = `jump 1s ease`;
	visuals.appendChild(bubble);
bubble.addEventListener('animationend' , function(){
	visuals.removeChild(this)
})


}

})