const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../model/validation');

// register
router.post('/register', async (req, res) => {
  // validation of input
  const {error} = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);
  else {
    // create new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // user already registered
    const userExists = await User.findOne({email: req.body.email});
    if (userExists) res.status(400).send('User already exists.');
    else {
      // save user
      try {
        const savedUser = await user.save();
        res.send(savedUser);
      } catch (err) {
        res.status(400).send(err);
      }
    }
  }
});

// login
router.post('/login', (req, res) => {});

module.exports = router;
