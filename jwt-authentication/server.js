import express from 'express';
const app = express();

import jwt from 'jsonwebtoken';

// Body Parser - allows application use json from the body that gets passed to it from requests
app.use(express.json());

const posts = [
  {
    username: 'Francis',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res) => {
  // Authenticate User (skipped this part, in another video)

  const username = req.body.username;
  const user = {
    username
  };

  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
});

app.listen(3000);
