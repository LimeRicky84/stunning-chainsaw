const router = require('express').Router();
const resumeRoutes = require('./resumeRoutes')
const inputRoutes = require('./inputRoutes')
const jobSearchIndex = require('./job-search-index')
// const jobSearchConfig = require('./job-search-config')

router.use('/resume', resumeRoutes)
router.use('/input', inputRoutes)
router.use('/jobsearch', jobSearchIndex)
// router.use('/jobsearch', jobSearchConfig)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;