const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const privateRoute = require('./routes/private');
const cors = require('cors');

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

// middleware cors
// const options = {
//   origin: ['http://localhost:3000'],
// };
// app.use(cors(options));
app.use(cors()); // all origin enabled

// middleware json
app.use(express.json());

// middleware - routes
app.use('/api/user', authRoute);
app.use('/api/private', privateRoute);

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
