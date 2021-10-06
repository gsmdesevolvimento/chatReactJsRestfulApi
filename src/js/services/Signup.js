const axios = require('axios');

export function signup(nickname, password, callback) {

    if (!nickname || !password) {
        return false;
    }

    const params = new URLSearchParams();
    params.append('nickname', nickname);
    params.append('password', password);
    axios.post('/signup', params)
    .then(function (response) {
        callback(response);
    })
    .catch(function (error) {
        alert('Você já possui uma conta.');
    });

}
