const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  // router code here
});

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.json({ success: false, error });
  }
});

module.exports = router;
