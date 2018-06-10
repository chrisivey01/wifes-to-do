const API = 'http://54.147.40.233:3000/'
// const API = 'http://localhost:3000/'

export default {

    sendItems(todo) {
        return fetch(API + 'send',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({todo})
            })
            .then(response => response.json())

    }
}