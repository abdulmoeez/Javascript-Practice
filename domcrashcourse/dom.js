// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



	
// const Box = document.getElementById('mouseMove');
// const Area = document.getElementById('textarea');

// Box.addEventListener('mousemove', mouseEnter);
// function mouseEnter(e){
//       console.log("entered")
//       // Area.innerHTML= '<h3>MouseX: '+ e.offsetX + '</h3><h3>MouseY: '+ e.offsetY+'</h3>';
//       document.body.style.backgroundColor= "rgb("+e.offsetX+" , "+e.offsetY+" , 40 )"
// 	}
// const InputBox = document.querySelector('input');
// InputBox.addEventListener('keydown', function(e){
// console.log(e.target.value)
// Area.innerHTML= e.target.value;

// })







//       F O R M --- S T A R T

var form = document.getElementById('formControl');
var input = document.getElementById('input1');
var lists = document.getElementById('items');

form.addEventListener('submit', clickEvent);
function clickEvent(e){
  e.preventDefault();
  var li = document.createElement('li');
  li.className="list-group-item";

  li.appendChild(document.createTextNode(input.value));
  lists.appendChild(li);

  //create button
  var deleteButton=document.createElement('button');
  deleteButton.className='btn btn-danger float-right btn-sm delete'
  deleteButton.appendChild(document.createTextNode('X'));
  li.appendChild(deleteButton);
}

//DELETE  BUTTON

lists.addEventListener('click',EventClick);
function EventClick(e){
	if (e.target.classList.contains('delete')) {
		if (confirm('are you sure?')) {
			var li = e.target.parentElement;
			lists.removeChild(li);
		}
	}
}

// SearchFilter

const search = document.getElementById('filter');
search.addEventListener('keyup' ,keyEvent);
function keyEvent(e){
const Filter = e.target.value.toUpperCase();

const value = lists.getElementsByTagName('li');

Array.from(value).forEach(function(val){
  const values = val.textContent;

  if (values.toUpperCase().indexOf(Filter) > -1) {
    val.style.display='';
  }
  else
  {
    val.style.display='none'

  }
})

}