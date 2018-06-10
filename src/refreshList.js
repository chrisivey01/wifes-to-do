const API = 'http://54.147.40.233:3000/'
// const API = 'http://localhost:3000/'



export default{

    refresh(){
        return fetch(API + 'load')
            // .then(response => response.json())
            // .then(response => {
            //     return response
            // })
    }
}


