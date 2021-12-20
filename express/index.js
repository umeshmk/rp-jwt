const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// app
const app = express();
const port = 3001;

// env
dotenv.config();

// mongodb
mongoose.connect(
  process.env.CONNECT_DB,
  {
    useNewUrlParser: true,
  },
  () => console.log('connected with MongoDB')
);

// middlewares
app.use(express.json());

// middleware - routes
let authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
