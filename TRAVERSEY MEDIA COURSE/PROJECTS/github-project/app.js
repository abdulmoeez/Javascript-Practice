
// init GITHUB
const github = new Github();
const ui = new UI();

// event on keydown
const searchInput = document.querySelector("#searchUser");
searchInput.addEventListener("keyup", (e)=>{
    const userText = e.target.value;
    if(userText != ''){
        github.getUser(userText)
        .then(data =>{
            console.log(data.profile.message);
            if(data.profile.message = 'Not Found' && data.message != null){
                ui.showAlert('User not Found', 'alert alert-danger');
            }else{
                console.log(data.profile);
                ui.showUser(data.profile);
                ui.showRepos(data.repos);
            }
            
        })
    }else{
        ui.clearProfile();
    }
})