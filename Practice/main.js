const submitBtn = document.getElementById('form');
// array of students

let students = [];
let specialStudents=[]

submitBtn.addEventListener('submit' , function(e){
 e.preventDefault();

let userName = document.getElementById('userName').value
let email = document.getElementById('eMail').value
let password = document.getElementById('password').value
let confirmPassword = document.getElementById('confirmPassword').value
let phoneNumber = document.getElementById('phoneNumber').value
let studentId = document.getElementById('studentNumber').value

if (studentId === "") {
students.push('username:' + userName , 'email:'+ email ,'password:'+ password ,'confirmPassword:'+ confirmPassword ,'phoneNumber:' + phoneNumber)
 console.log(students)


} 

else{
	specialStudents.push('username:' + userName , 'email:'+ email ,'password:'+ password ,'confirmPassword:'+ confirmPassword ,'phoneNumber:' + phoneNumber ,  'studentId:' + studentId)
 console.log(specialStudents)


}



})

