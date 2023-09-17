const express = require('express')

const { httpAddArtical, httpGetArticals} = require('./controller');
const articals = express.Router()

articals.post('/add-article',httpAddArtical)
articals.get('/',httpGetArticals)

module.exports = articals