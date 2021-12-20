const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verify = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
}

module.exports = verifyToken;
