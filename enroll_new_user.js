require('./lib/env')
const api = require('./lib/api')

const PROGRAM_ID = ARGS[0]
const FIRST = ARGS[1]
const LAST = ARGS[2]
const EMAIL = ARGS[3]

const user = {
  data: {
    type: 'users',
    attributes: {
      firstName: FIRST,
      lastName: LAST,
      email: EMAIL
    },
    relationships: {
      programs: {
        data: [
          {
            type: 'programs',
            id: PROGRAM_ID
          }
        ]
      }
    }
  }
}

api.request('post', 'users', user)
   .then((payload) => {
     console.log('Created:', payload)
   })