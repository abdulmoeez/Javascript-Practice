// class USER {


//     async getUser () {
//         const userResponse = await fetch('https://randomuser.me/api/')
//         const user = await userResponse.json()
//         return{
//             user
//         }

//     }
// }



// // INITIALIZING CLASS USER
// const user = new USER();

const data = [
    {
        name: 'John',
        cell: '033-2213-212',
        age: 20,
        gender: 'male',
        looking_for:'female',
        img: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name: 'Steve',
        cell: '033-000-111',
        age: 22,
        gender: 'male',
        looking_for:'female',
        img: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'John',
        cell: '999-22-222',
        age: 54,
        gender: 'male',
        looking_for:'female',
        img: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Maria',
        cell: '222-22-222',
        age: 24,
        gender: 'female',
        looking_for:'male',
        img: 'https://randomuser.me/api/portraits/women/71.jpg'
    }
]

// user.getUser()
//     .then((data)=>{
//         const user = data.user.results[0];

        // const data1 = [
        //     {
        //         name: user.name.title + user.name.first,
        //         cell: user.cell,
        //         age: user.dob.age,
        //         gender: user.gender
        //     },
        
        //     {
        //         name: user.name.title + user.name.first,
        //         cell: user.cell,
        //         age: user.dob.age,
        //         gender: user.gender
        //     },
        
        //     {
        //         name: user.name.title + user.name.first,
        //         cell: user.cell,
        //         age: user.dob.age,
        //         gender: user.gender
        //     },
        //     console.log(data)
        // ]
        
  //  })


        // if(currentProfile != undefined){

        // }

        document.querySelector("button").addEventListener('click',  nextProfile);

        const currentProfile = iterators(data);

        nextProfile();
            function nextProfile() {
                const profileCurr = currentProfile.next().value;
                if(profileCurr != undefined){
                console.log(profileCurr);
                document.querySelector("#profileSec").innerHTML = `
                <ul class='list-group'>
                <li class='list-group-item bg-dark text-white'>Name: ${profileCurr.name}</li>
                <li class='list-group-item bg-dark text-white'>Cell: ${profileCurr.cell}</li>
                <li class='list-group-item bg-dark text-white'>Age: ${profileCurr.age}</li>
                <li class='list-group-item bg-dark text-white '>Gender: ${profileCurr.gender}</li>
                </ul>
                
                `
                document.querySelector("#imageSec").innerHTML = `
                <img class='text-center mx-auto' src='${profileCurr.img}'>
                `
            }else{
                window.location.reload();
            }
        }
        


function iterators(data){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < data.length ? {value: data[nextIndex++], done:false} : {done:true}
            
        }
    }
}


