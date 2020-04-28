const process = require('process')
const dotenv = require('dotenv');

dotenv.config();

global.ARGS = process.argv.slice(2)