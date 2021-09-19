document.querySelector(".button1").addEventListener("click", getText);
document.querySelector(".button2").addEventListener("click", getJSON);
document.querySelector(".button3").addEventListener("click", getAPI);


function getText(){
    fetch('text.txt')
    .then(res => res.text())
    .then(data =>{
        const textList = document.querySelector(".textData");
        textList.innerHTML = data + '<br>' + '<hr>';
    })
}


function getJSON(){
    fetch('file.JSON')
    .then(res => res.json()) 
    .then(data =>{
        console.log(data);
        const JSONList = document.querySelector(".JSONData");
        output = '';
        data.forEach(function(value){
            const li = `<li>${value.Name}</li>`;
            output += li;
        })
        JSONList.innerHTML = output + '<br>' + '<hr>';
    })
}

function getAPI(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    
    .then(data =>{
        const APIList = document.querySelector(".APIData");
        output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        })
        APIList.innerHTML = output + '<br>' + '<hr>';
    })
}