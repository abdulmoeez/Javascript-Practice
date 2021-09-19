class Github{
    constructor(){
        this.client_id = '9b0985690569b86caadb';
        this.client_secret = 'd620c9c70f004018556f86b6cc7035b29f7f88cf';
        this.repos_count = 5;
        this.sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return{
            profile,
            repos
        }

    }
    // getUser(user){
    //     return new Promise((resolve, reject)=>{
    //         const profile = fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_Secret=${this.client_secret}`)
    //             .then(res => res.json())
    //             .then(data => resolve(data))
            
    //     })
    // }
  
}