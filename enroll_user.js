require('./lib/env')
const api = require('./lib/api')

const PROGRAM_ID = ARGS[0]
const USER_ID = ARGS[1]

const url = `users/${USER_ID}/relationships/programs`

const data = {
  data: [
    {
      type: 'programs',
      id: PROGRAM_ID
    }
  ]
}

api.request('post', url, data)
   .then(() => console.log('Enrolled') )