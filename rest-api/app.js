const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// BODY PARSER
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are home');
});

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);

app.listen(3000, () => console.log('Listening on port 3000'));
