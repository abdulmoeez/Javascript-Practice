class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    alert(text, className){
        const errorMesg = document.createElement('div');
        errorMesg.innerHTML = text;
        errorMesg.className = className;
        document.getElementById("book-form").appendChild(errorMesg);
    }

    addBookToList(book){
        const list = document.querySelector("#book-list");
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>

        `
        list.appendChild(row);
    }

    clearfields(book){
        document.querySelector("#isbn").value = '',
        document.querySelector("#author").value = '';
        document.querySelector("#title").value = '';
        
    }

    deleteBook(target,ui){
        if(target.className === 'delete'){
            if(confirm('Are you sure?')){
               target.parentElement.parentElement.remove();
               
               ui.alert('Delete Success','success');

      
            };
         }
         
    }


}

class localstorage{
    static getBook(){
        let books;
	if (localStorage.getItem('books') === null) {
		books = [];
	}else{
		books = JSON.parse(localStorage.getItem('books'));
	}
	return books;

    }
    
    static addBook(book){
        const books = localstorage.getBook();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));

    }

    static displayBook(){
        const books = localstorage.getBook();
        books.forEach(book => {
           const ui = new UI;
           ui.addBookToList(book);
           

        });
        
    }

    static delete(isbn){
        const books = localstorage.getBook();
        books.forEach(function(book, index){
            console.log(isbn);
            console.log(book.isbn);
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}


//
document.addEventListener('DOMContentLoaded',localstorage.displayBook);

// EVENT LISTENER
const form = document.querySelector("#book-form");
form.addEventListener('submit', function(e){
    const title = document.querySelector("#title").value,
    isbn = document.querySelector("#isbn").value,
    author = document.querySelector("#author").value;
    const book = new Book(title,author,isbn);
    console.log(book)
    const ui = new UI();
    if(book.title === '' || book.author === '' || book.isbn === ''){
       ui.alert('Please fill all the fields', 'error');
      
    }else{
    ui.addBookToList(book);
    localstorage.addBook(book);
    ui.clearfields(title,author,isbn);
    ui.deleteBook(book);
    }
    e.preventDefault();

 })

 // EVENT LISTENER FOR DELETE
 document.querySelector("#book-list").addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target,ui);
    localstorage.delete(e.target.parentElement.previousElementSibling.textContent);

 })