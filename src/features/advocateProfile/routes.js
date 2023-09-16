const express = require('express')

const { httpAddAdvocate, httpGetAdvocates } = require('./controller');
const advocate = express.Router()

advocate.get('/',httpGetAdvocates)
advocate.post('/registeradvocate',httpAddAdvocate)

module.exports = advocate