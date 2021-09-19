const form = document.querySelector("#form");
const clearBtn = document.querySelector(".clear");
const filter = document.querySelector("#filter-tasks");
const taskList = document.querySelector(".collection");
const taskInput= document.querySelector("#add-task");


loadEventListeners();

function loadEventListeners(){
// document load
document.addEventListener('DOMContentLoaded',getFromLocalStorage);
// add task
form.addEventListener('submit', addTask);
// delete tasks
taskList.addEventListener('click',deleteTask);
// clear all tasls
clearBtn.addEventListener('click',clearTasks);

// filter Tasks
filter.addEventListener('keyup',filterTasks);



}
function addTask(e){

	if (taskInput.value === '') {
		alert('Please enter something');
	}
	const li = document.createElement('li');
	li.className = "collection-item";
	li.appendChild(document.createTextNode(taskInput.value));
	const link = document.createElement('a');
	link.className = "delete-item secondary-content";
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);
	taskList.appendChild(li);
	setLocalStorage(taskInput.value);

	taskInput.value = '';
	e.preventDefault();





}

function setLocalStorage(task){
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getFromLocalStorage(){

	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(task){
		const li = document.createElement('li');
	li.className = "collection-item";
	li.appendChild(document.createTextNode(task));
	const link = document.createElement('a');
	link.className = "delete-item secondary-content";
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);
	taskList.appendChild(li);

	})

}


function deleteTask(e){
	console.log(e.target.parentElement);
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove();

			// remove frm localstorage
			removeLocalStorage(e.target.parentElement.parentElement);
		}
	}


}
 function removeLocalStorage(item){
 	let tasks;
 	if (localStorage.getItem('tasks') === null) {
 		tasks = [];
 	}else{
 		tasks = JSON.parse(localStorage.getItem('tasks'));
 	}
 	tasks.forEach(function(task, index){
 		if (item.textContent === task) {
 			tasks.splice(index, 1);
 		}
 	});
 	localStorage.setItem('tasks', JSON.stringify(tasks));
 	console.log('done');
 }



function clearTasks(e){
	while(taskList.firstChild){
		taskList.removeChild();

	
}

clearAllFromLocalStorage();
e.preventDefault();
}

function filterTasks(e){
	const value = e.target.value.toLowerCase();

	document.querySelectorAll(".collection-item").forEach(function(task){
		const item = task.textContent;
		if (item.toLowerCase().indexOf(value) != -1) {
			task.style.display = 'block';
		}else{
			task.style.display = 'none';
		}
	});
}

function clearAllFromLocalStorage(){
	localStorage.clear();
}
