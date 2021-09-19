// BOOK CLASS
class Book{
	constructor(title,author,isbn){
		this.title=title;
		this.author=author;
		this.isbn=isbn; 
	}
}

// UI CLASS //

class UI {
	static displayBooks(){
		const StoredBooks = [
		{
		title:'GodFather',
		author:'Mario Puzo',
		isbn:'3123719',
	    },
		{
		
		title:'GodFather',
		author:'Mario Puzo',
		isbn:'3123719',
	    }
		];
	
	const books = StoredBooks;
	books.forEach(function(book){
		UI.addBookToList(book);
	})
}

static addBookToList(book){
      const list = document.querySelector('#book-list')
      const row = document.createElement('tr')
      row.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-small delete">X</a></td>

      `;
      list.appendChild(row);
}
static ClearFields(){
document.querySelector('#title').value='';
document.querySelector('#author').value='';
document.querySelector('#isbn').value='';

}

}


//    EVEN BOOKS //
document.addEventListener('DOMContentLoaded',UI.displayBooks);
// event add books from form//

document.getElementById('book-form').addEventListener('submit', (e)=>{

	e.preventDefault();
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;
	// VALIDATION
if (title==='' || author === '' || isbn==='') {
	alert('Please enter all Fields')}
	else{
		const book = new Book(title,author,isbn);
UI.addBookToList(book);
UI.ClearFields();
	}



    });
// INSTANTIATE A BOOK //





// DELETE A BOOK //
const table = document.querySelector('#book-list').addEventListener('click', eventClick);
function eventClick(e){
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you Sure?')) {
		 e.target.parentElement.parentElement.remove();
		}
	}
}

