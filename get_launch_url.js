require('./lib/env')
const api = require('./lib/api')

const USER_ID = ARGS[0]

const url = `users/${USER_ID}/login_tokens`

api.request('post', url)
   .then((payload) => {
     console.log(payload)
   })