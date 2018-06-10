const API = 'http://54.147.40.233:3000/'
// const API = 'http://localhost:3000/'

export default {

    deleteItem(id) {
        return fetch(API + 'delete/' + id,
            {
                method: 'DELETE',
            })
            // .then(response =>
            //     response.json().then(json => {
            //         return json;
            //     })
            // )
    }
}