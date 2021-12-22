const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, (req, res) => {
  res.send(`You can access private route ${JSON.stringify(req.user)}`);
});

module.exports = router;
