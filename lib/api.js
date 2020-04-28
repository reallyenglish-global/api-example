const axios = require('axios')
const API_TOKEN = process.env.API_TOKEN
const API_BASE = process.env.API_BASE

const headers = {
  'X-API-TOKEN': API_TOKEN,
  'Content-Type': 'application/vnd.api+json'
}

module.exports = {
  request(method, path, params) {
    return new Promise((resolve, reject) => {
      axios.request({
        url: `${API_BASE}/${path}`,
        method: method,
        headers: headers,
        data: params
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        const response = error.response
        console.log(response.data.errors)
      })
    })
  }
}