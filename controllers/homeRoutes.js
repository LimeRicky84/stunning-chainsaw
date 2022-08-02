const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        console.log('there')
        res.render('homepage', {
            logged_in: req.session.logged_in
          });

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        console.log('there')
        res.render('login')

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        console.log('there')
        res.render('dashboard', {
            // pass data into dashboard here
            logged_in: req.session.logged_in
          });

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/JobSearch', async (req, res) => {
    try {
        console.log('there')
        res.render('JobSearch')

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/input', async (req, res) => {
    try {
        console.log('there')
        res.render('input')

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });

  router.get('/resume', async (req, res) => {
    try {
        res.render('resume')

    } catch (err) {
        res.status(500).json(err);
    }
  })


module.exports = router;