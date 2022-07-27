const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        res.render('login')

    } catch (err) {
        res.status(500).json(err);
      }
})