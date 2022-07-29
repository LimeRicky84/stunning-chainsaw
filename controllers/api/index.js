const router = require('express').Router();
const resumeRoutes = require('./resumeRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use('/resume', resumeRoutes)
router.use('/dashboard', dashboardRoutes)

module.exports = router;