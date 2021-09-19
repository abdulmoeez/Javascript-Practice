// CREATING VARIABLES

const searchBtn = document.querySelector('button');
const Modal = document.getElementById('simpleModal');
const closeBtn = document.querySelector('span');

// ADD EVENT LISTENER 

searchBtn.addEventListener('click' , ModalAppear);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', windowEvent);

// FUNCTIONS

function ModalAppear(){
	Modal.style.display = 'block'
}

function closeModal(){
	Modal.style.display = 'none'

}
function windowEvent(e){
	if (e.target == Modal) {
	Modal.style.display = 'none'


	}
}