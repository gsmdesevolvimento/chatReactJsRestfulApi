const axios = require('axios');

export function getMessages(callback) {
    axios.get('/chat')
    .then(function (response) {
        callback(response);
    })
    .catch(function (error) {
    });
}

export function sendMessage(message_send, callback) {
    const user_logged = JSON.parse(localStorage.getItem("user_logged"));
    if (!typeof user_logged == "object") {
        window.location = "/";
    }
    if (!message_send) {
        return false;
    }
    const params = new URLSearchParams();
    params.append('nickname', user_logged.nickname);
    params.append('message', message_send);
    axios.post('/chat', params)
    .then(function (response) {
        callback();
    })
    .catch(function (error) {
    });
}
