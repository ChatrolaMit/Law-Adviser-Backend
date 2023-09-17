const express = require('express')

const { httpAddBlog, httpGetBlogs} = require('./controller');
const blogs = express.Router()

blogs.post('/addblog',httpAddBlog)
blogs.get('/',httpGetBlogs)

module.exports = blogs