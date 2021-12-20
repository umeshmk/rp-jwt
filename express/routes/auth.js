const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../model/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req, res) => {
  // validation of input
  const {error} = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });

  // user already registered
  const userExists = await User.findOne({email: req.body.email});
  if (userExists) return res.status(400).send('User email already exists.');

  // save user
  try {
    const savedUser = await user.save();
    return res.send({user_id: savedUser._id});
  } catch (err) {
    return res.status(400).send(err);
  }
});

// login
router.post('/login', async (req, res) => {
  // validation of input
  const {error} = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // user is a valid & registered
  const user = await User.findOne({email: req.body.email});
  if (!user) return res.status(400).send('User email is invalid');

  // check password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('User password is invalid');

  // jwt create token
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  return res.header('auth-token', token).send(`User logged in - ${token}`);
});

module.exports = router;
