const axios = require('axios');

export function signin(nickname, password, callback) {

    if (!nickname || !password) {
        return false;
    }

    const params = new URLSearchParams();
    params.append('nickname', nickname);
    params.append('password', password);
    axios.post('/signin', params)
    .then(function (response) {
        callback(response);
    })
    .catch(function (error) {
        alert('Você não possui uma conta.');
    });

}
