//     CONSTRUCTOR FUNCTIONS //
function book(Title,Author,Year){
  this.Title = Title;
  this.Author = Author;
  this.Year = Year;

}
//    PROTOTYPES // 
book.prototype.disclaimer = function(){
	return `${this.Title} has R rated content and is prohibbited for people under 18`;
};
book.prototype.getYears=function(){
	const years = newDate().gettFullYear() - Year;
	return `${Title} is ${years} years old`;
};

// INSTANTIATE OBJECTS  //
book.prototype.revise=function(newYear){
this.Year=newYear;
this.revised=true;
};

const book1 = new book('GodFather','J R MARTIN', 1998);
const book2 = new book('Rich Dad Poor Dad','Mara P', 1998);
const book3 = new book('Stars','Einstein', 1998);
const book4 = new book('Black Hole','J R MARTIN', 1998);
const book5 = new book('Game of thrones','J R Martin', 1998);
const book6 = new book('Game of thrones 1','J R MARTIN', 1998);
const book7 = new book('Game of thrones 2','J R MARTIN', 1998);
const book8 = new book('Game of thrones 3','J R MARTIN', 1798);
const book9 = new book('Game of thrones 4','J R MARTIN', 1498);
const book10 = new book('Game of thrones 5','J R MARTIN', 1798);
const book11 = new book('Game of thrones 6','J R MARTIN', 2018);
const book12 = new book('Game of thrones 7','J R MARTIN', 2016);
const book13 = new book('GodFather','Mario Puzo', 1992);
const book14 = new book('Game of thrones 9','Mario Puzo', 1995);
const book15 = new book('Game of thrones 10','J R MARTIN', 1991);


book2.revise('2018');
console.log(book2)


