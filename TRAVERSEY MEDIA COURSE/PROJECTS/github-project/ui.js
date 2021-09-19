class UI{
    constructor(){
        this.profile = document.querySelector(".profile");
    }
    showUser(data){
       
        this.profile.innerHTML = `
        <div class='card card-body mb-3'>
        <div class='container'>
        <div class='row'>
            <div class='col-md-3'>
                <img class='img-fluid' src='${data.avatar_url}'>
                <a href='${data.html_url}' targer='_blank' class='btn btn-primary btn-block'>View Profile</a>
            </div>
            <div class='col-md-9'>
                <span class='p-3 badge badge-primary'>User Repos: ${data.user_repos}</span>
                <span class='p-3 badge badge-dark'>Public Gists: ${data.public_gists}</span>
                <span class='p-3 badge badge-success'>Followers: ${data.followers}</span>
                <span class='p-3 badge badge-info'>Following: ${data.following}</span>
                <br>
                <ul class='list-group text-center mt-3'>
                    <li class='list-group-item'>Company: ${data.company}</li>
                    <li class='list-group-item'>Website/Blog: ${data.blog}</li>
                    <li class='list-group-item'>Location: ${data.location}</li>
                    <li class='list-group-item'>Member Since: ${data.created_at}</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        <h1 class='container'>Latest Repos</h1>
        

        
        `
    }
    showRepos(repos){
        let output = '';
        repos.forEach((repo) =>{
            output += `<div class='card card-body mb-3'>
        <div class='container'>
        <div class='row'>
            <div class='col-md-6'>
                <a href='${repo.html_url}'>${repo.name}</a>
            </div>
            <div class='col-md-6'>
            <span class='p-3 badge badge-primary'>Stars: ${repo.stargazers_count}</span>
            <span class='p-3 badge badge-success'>Watchers: ${repo.watchers_count}</span>
            <span class='p-3 badge badge-dark'>Forks: ${repo.forms_count}</span>
            </div>
        </div>
        </div>
        </div>`
        document.querySelector(".repos").innerHTML = output;
        })
    }

    showAlert(data, className){
        this.clearAlert();
        const alertMessage = document.createElement('div');
        alertMessage.innerHTML = data;
            
        alertMessage.className = className + ' mt-3';
        const container = document.querySelector(".searchContainer");
        const form = document.querySelector('.searchUser');
        container.insertBefore(alertMessage,form);

        setTimeout(() =>{
            this.clearAlert();
        },3000)
    }
    clearAlert(){
        const alert = document.querySelector(".alert");
        if(alert){
        alert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}