const express = require('express')
const mongoose = require('mongoose')

const Post = require('./models/post')
const postRouter = require('./routes/post')

// connection to mongodb
mongoose.connect('mongodb://localhost/blog')

// create and express app
const app = express()
// set the templating engin
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }))

// root route
app.get('/', async (req, res) => {
  const posts = await Post.find()
  res.render('allPosts', { posts })
})

// post routes
app.use('/posts', postRouter)

// listening to requests
app.listen(3000)
