const express = require('express')

const { httpAddAdvocate, httpGetAdvocates,httpGetAdvocateById } = require('./controller');
const advocate = express.Router()

advocate.get('/',httpGetAdvocates)
advocate.get('/:id',httpGetAdvocateById)
advocate.post('/registeradvocate',httpAddAdvocate)

module.exports = advocate