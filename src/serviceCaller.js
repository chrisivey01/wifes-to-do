const API = 'http://54.147.40.23:3000/'
// const API = 'http://localhost:3000/'

let msgSuccess = false;

export default{

    sendText(){
        return fetch(API)
            .then(response => response.json())
            .then((success) => {
                msgSuccess = success;

                return msgSuccess;
            });
    }

}