const {json} = require('express');
let express = require('express');

const app = express();
const port = 3001;

// routes
let authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

// middlewares
app.use(express.json());

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
