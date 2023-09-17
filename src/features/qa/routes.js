const express = require('express')

const { httpGetAllQa, httpPostQue,httpPostAns, httpUpVote,httpDownVote} = require('./controller');
const qaRouter = express.Router()

qaRouter.get('/qa',httpGetAllQa)
qaRouter.post('/qa/post',httpPostQue)
qaRouter.post('/qa/:id',httpPostAns)
qaRouter.post('/qa/up/:id/:aid',httpUpVote)
qaRouter.post('/qa/down/:id/:aid',httpDownVote)

module.exports = qaRouter