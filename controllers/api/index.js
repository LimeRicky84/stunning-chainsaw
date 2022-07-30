const router = require('express').Router();
const resumeRoutes = require('./resumeRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const jobSearchIndex = require('./job-search-index')
// const jobSearchConfig = require('./job-search-config')

router.use('/resume', resumeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/jobsearch', jobSearchIndex)
// router.use('/jobsearch', jobSearchConfig)

module.exports = router;