// const API = 'http://localhost:3000/'
const API = 'http://54.147.40.233:3000/'

export default{


    saveColor(mood){
        return fetch(API + 'go',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({mood})
            })
            .then(response => response.json())
    }
}