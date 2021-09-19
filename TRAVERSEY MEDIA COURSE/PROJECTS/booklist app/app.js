// getting the values
const form = document.querySelector("#book-form");


 // BOOK CONSTRUCTOR
 function BOOK(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
 }


 // UI CONSTRUCTOR
 function UI (){

 }

  // ALERT
  UI.prototype.alert = function(text, className){
     console.log(className);
   const errorMesg = document.createElement('div');
   errorMesg.innerHTML = text;
   errorMesg.className = className;
   document.getElementById("book-form").appendChild(errorMesg);
 }


   // APPENDING BOOKS TO LIST
 UI.prototype.addBookToList = function(book) {
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
UI.prototype.clearfields = function(book){
    book.title = '';
    book.author = '';
    book.isbn = '';

}

// delete books

UI.prototype.deleteBook = function(target,ui){
   if(target.className === 'delete'){
      if(confirm('Are you sure?')){
         target.parentElement.parentElement.remove();
         ui.alert('Delete Success','success');

      };
   }
   }


 // EVENT LISTENER
 form.addEventListener('submit', function(e){
    const title = document.querySelector("#title").value,
    isbn = document.querySelector("#isbn").value,
    author = document.querySelector("#author").value;
    const book = new BOOK(title,author,isbn);
    const ui = new UI();
    if(book.title === '' || book.author === '' || book.isbn === ''){
       ui.alert('Please fill all the fields', 'error');
      
    }else{
    ui.addBookToList(book);
    ui.clearfields(book);
    ui.deleteBook(book);
    }
    e.preventDefault();

 })

 // EVENT LISTENER FOR DELETE
 document.querySelector("#book-list").addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target,ui);
 })

