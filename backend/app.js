const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
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