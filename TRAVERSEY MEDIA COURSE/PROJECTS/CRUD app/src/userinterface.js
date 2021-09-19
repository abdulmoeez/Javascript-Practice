class UI{
    constructor(){
        this.posts = document.querySelector(".posts");
        this.title = document.querySelector("#title");
        this.body = document.querySelector("#body");

    }

    showPosts(data){
        let output;
        data.forEach((post)=>{
            const id = post.id;
            const title = post.name;
            const description = post.description;
            
            output+=
            `<div class='card mb-3'>
                <div class='card-body'>
                    <h4 class=''>${title}</h4>
                    <p class='lead card-text'>${description}</p>

                    <a class="editBtn card-link text-primary" data-id='${id}'><i class="fas fa-edit editBtn"></i></a>
                    <a class="deleteBtn card-link text-danger" data-id='${id}'><i class="fas fa-trash-alt deleteBtn"></i></a>
                </div>
            </div>
            `
        })
        this.posts.innerHTML = output;
    }

    editPost(data){
        this.changeState('edit', data);
    }

    clearfields(){
        this.title.value = '';
        this.body.value = '';
    }
    showAlert(message, className){
            const div = document.createElement("div");
            div.classList.add("alert");
            div.classList+= " " + className;
            div.classList+= " mt-2";
            div.innerHTML = message;
            document.querySelector(".alert-div").appendChild(div);
            setTimeout(()=>{
                document.querySelector(".alert").remove();
            },2000)
    }
    changeState(type, data){
        if(type === 'edit'){
            this.title.value = data.title;
            this.body.value = data.body;
            console.log(data);
            console.log(document.querySelector(".id"));
            document.querySelector(".id").setAttribute("value", data.id);
            document.querySelector(".btnSubmit").textContent = 'Edit Post';
            document.querySelector(".btnSubmit").className = 'btn btn-warning btnEdit';
            const btnCancel = document.createElement("button");
            btnCancel.className = 'btn btn-dark btnCancel';
            btnCancel.innerHTML = 'Cancel';
            document.querySelector("form").insertBefore(btnCancel, document.querySelector(".form-end"));
        }else{
            this.clearfields();
            document.querySelector(".btnCancel").remove();
            document.querySelector(".btnEdit").textContent = 'Post';
            document.querySelector(".btnEdit").className = 'btn btn-dark mt-2 btn-block btnSubmit';
            document.querySelector(".id").removeAttribute("value");
        }
    }
}

export const userinterface = new UI();