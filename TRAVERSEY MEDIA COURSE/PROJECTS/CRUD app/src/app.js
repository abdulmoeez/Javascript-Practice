import { http } from './http';
import { userinterface } from './userinterface';

document.addEventListener("DOMContentLoaded", getPosts);
document.querySelector(".btnSubmit").addEventListener("click", submitPost);
document.querySelector("form").addEventListener("click", cancelEdit);


function getPosts(){
  http.get("http://localhost:3000/posts")
  .then(data => {
    userinterface.showPosts(data)
    const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((btn)=>{
  btn.addEventListener("click", deletePost);
})
document.querySelector(".posts").addEventListener("click", editState);

  })
}
 
function submitPost(e){
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector(".id");
  const data = {
    name: title,
    description: body
  }

  if(title === "" || body === ""){
    userinterface.showAlert("Please fill all the fields", "alert-danger");
    
  }else{
    if(!id.getAttribute("value")){
      http.post("http://localhost:3000/posts", data)
      .then(data=> {
        userinterface.showAlert("Post Added Success", "alert-success");
        userinterface.clearfields();
        getPosts();
      })
    }else{
      http.put(`http://localhost:3000/posts/${id.value}`, data)
      .then(data=> {
        userinterface.showAlert("Post Updated Success", "alert-warning");
        userinterface.clearfields();
        getPosts();
        userinterface.changeState();
      })
    }
    
  }

}

function deletePost(e){
  console.log(2);
  const id = e.target.parentElement.getAttribute("data-id");
  http.delete(`http://localhost:3000/posts/${id}`)
  .then(data=>{
    userinterface.showAlert("Post Deleted Success", "alert-success");
    getPosts();
  })
}

function editState(e){
  if(e.target.classList.contains('editBtn')){
    const id = e.target.parentElement.getAttribute("data-id");
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const data = {
      id: id,
      title: title,
      body: body
    }
    userinterface.editPost(data);
  }
}

function cancelEdit(e){ 
  if(e.target.classList.contains('btnCancel')){
      userinterface.changeState();
  }
  e.preventDefault();
}