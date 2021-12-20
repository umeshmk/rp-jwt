let router = require('express').Router();

router.post('/login', (req, res) => {
  res.send('login user');
});
router.post('/register', (req, res) => {
  res.send('register user');
});

module.exports = router;
