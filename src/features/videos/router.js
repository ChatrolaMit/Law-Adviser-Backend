const express = require('express')

const { httpAddVideo, httpGetVideos} = require('./controller');
const videos = express.Router()

videos.post('/add-video',httpAddVideo)
videos.get('/',httpGetVideos)

module.exports = videos