const express = require('express')
const { append, send } = require('express/lib/response')
const Post = require('./../models/post')

// new router for the post feature
const router = express.Router()

// view for creating a new post
router.get('/newPost', (req, res) => {
  res.render('newPost')
})

router.post('/', async (req, res) => {
  await Post.create({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  })
  res.send('cool')
})

// export the router to be used externaly
module.exports = router
