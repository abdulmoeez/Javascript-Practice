const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// })

const data = {
    title: "Custom Page",
    body: "Custom Blog Page, Welcome User123, We are glad to see you, Hope you have a good time here"
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});

const data2 = {
    title: "Custom Page",
    body: "Custom Blog Page, Welcome User123, We are glad to see you, Hope you have a good time here"
}

http.put('https://jsonplaceholder.typicode.com/posts/1', data2, function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
})