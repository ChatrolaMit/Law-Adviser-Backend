const express = require('express')

const { httpAddAdvocate, httpGetAdvocates,httpGetAdvocateById ,httpLogin} = require('./controller');
const advocate = express.Router()

advocate.get('/',httpGetAdvocates)
advocate.get('/:id',httpGetAdvocateById)
advocate.post('/registeradvocate',httpAddAdvocate)
advocate.post('/login',httpLogin)

module.exports = advocate