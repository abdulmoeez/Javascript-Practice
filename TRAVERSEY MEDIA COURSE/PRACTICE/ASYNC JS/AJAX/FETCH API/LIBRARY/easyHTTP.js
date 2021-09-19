class easyHTTP {
    get(url){
        return new Promise((resolve, reject)=>{
            await fetch(url)
            .then(res => await res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        }) 
       
    }

    post(url,data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json; charset=UTF-8'   
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
                
        })
    }
    put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}