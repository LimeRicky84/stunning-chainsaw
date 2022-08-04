const router = require('express').Router();
const { Resume } = require("../../models")

router.get('/test', async (req, res) => {
    console.log ('get request')
    try {
      const user = await Resume.findAll()
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message)
      res.status(400).json(err);
    }
})


module.exports = router;