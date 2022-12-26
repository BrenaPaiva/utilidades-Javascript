const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(API, (res) => { //esta funcionalidade é uma callback
    console.log(res.statusCode);
})
console.log('Conectando API')