const HTTP = new easyHTTP();

HTTP.get('https://www.skrill.com/app/ondemand_request.pl')
    .then((data) =>{
        console.log(data);
    });


// const data = {
//     name: 'Moeez',
//     grade: 11,
//     age: 17,
//     major: 'CODING LEGENDARY MMA FIGHTER'
// }
// HTTP.post('https://jsonplaceholder.typicode.com/users' , data )
//     .then((data) =>{
//         console.log(data);
//     })

// HTTP.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data =>{
//         console.log(data);
//     })
