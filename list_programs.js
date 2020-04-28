require('./lib/env')
const api = require('./lib/api')

api.request('get', 'programs')
   .then((payload) => {
     payload.data.forEach((program) => {
       console.log(program.id, program.attributes)
     })
   })