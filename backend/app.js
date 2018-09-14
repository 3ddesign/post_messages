const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://root:s5eVDNzDmVAMPouX@test-api-mhcni.mongodb.net/test?retryWrites=true')
.then(() => {
  console.log('Connected to datebase')
})
.catch(() => {
  console.log('Connection failed')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  // console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'wfeerwwe23',
      title: 'First post',
      content: 'Thist is test first post'
    },
    {
      id: 'wfe4234s23',
      title: 'Second post',
      content: 'Thist is test second post'
    }
  ];
  res.status(200).json({
    message: 'Post fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
