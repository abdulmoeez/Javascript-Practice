// let re;

// re = /^[A-Za-z][0-9]{5,8}$/;

// const str = 'aaaa12312';

// // const result = str.replace(re, 'John');
// // console.log(result);

// function match(re,str){
//     if(re.test(str)){
//         console.log(`${str} matches ${re.source}`);
//     }else{
//         console.log(`${str} does not matches ${re.source}`);
//     }
// }
// match(re,str);

// EVENT LISTENERS
console.log(4);
document.querySelector("#name").addEventListener("blur", nameValidate);
document.querySelector("#username").addEventListener("blur", usernameValidate);
document.querySelector("#zip").addEventListener("blur", zipValidate);
document.querySelector("#email").addEventListener("blur", emailValidate);
document.querySelector("#phone").addEventListener("blur", phoneValidate);


function nameValidate(){
    const name = document.querySelector("#name");
    const value = name.value;
    const re = /^[a-zA-Z]{6,10}$/;
    const validateName = value.match(re);
    console.log(validateName);
    if(validateName === null){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
}

function usernameValidate(){
    console.log(4);
    const username = document.querySelector("#username");
    const value = username.value;
    // let re = /^([a-zA-Z]([0-9]+)?){8,16}$/;
    let re = /^[a-zA-Z]{8,16}([0-9]+)*$/;
    const validateusername = value.match(re);
    console.log(validateusername);
    if(validateusername === null){
        username.classList.add('is-invalid');
    }else{
        username.classList.remove('is-invalid');
    }
}

function zipValidate(){
    const zip = document.querySelector("#zip");
    const value = zip.value;
    const re = /^[0-9]{5}$/;
    const validatezip = value.match(re);
    console.log(validatezip);
    if(validatezip === null){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
}

function emailValidate(){
    const email = document.querySelector("#email");
    const value = email.value;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const validateEmail = value.match(re);
    console.log(validateEmail);
    if(validateEmail === null){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}

function phoneValidate(){
    const phone = document.querySelector("#phone");
    const value = phone.value;
    let re = /^((\+92)|(0092))-{0,1}[0-9]{3}-{0,1}[0-9]{7}$|^[0-9]{11}$|^[0-9]{4}-[0-9]{7}$/;
    const validatephone = value.match(re);
    console.log(validatephone);
    if(validatephone === null){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}
