const router = require('express').Router();
const userRoutes = require('./resumeRoutes')

router.use('/resume', resumeRoutes)

module.exports = router;