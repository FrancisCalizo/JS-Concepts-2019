import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import jwt from 'jsonwebtoken';
import { access } from 'fs';

// Body Parser - allows application to use json from the body that gets passed to it from requests
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

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.username));
});

app.post('/login', (req, res) => {
  // Authenticate User (skipped this part, in another video)

  const username = req.body.username;
  console.log(username);
  const user = { username: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  console.log(user);
  res.json({ accessToken: accessToken });
});

// Middleware
function authenticateToken(req, res, next) {
  // Get Token that they send us
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Verify that this is correct user
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    // Return that user into the GetPost Function
    req.user = user;
    next();
  });
}

app.listen(3000, () => console.log('App running on port 3000'));
