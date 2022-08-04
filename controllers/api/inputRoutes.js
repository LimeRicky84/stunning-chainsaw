const router = require('express').Router();
const { User } = require("../../models")

router.get('/resume', async (req, res) => {
  try {
      res.render('resume')
    } catch (err) {
      res.status(500).json(err);
  }
})


  module.exports = router;