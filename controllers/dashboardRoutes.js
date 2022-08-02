const router = require('express').Router();
const { User } = require('../models');

router.get('/test', async (req, res) => {
  console.log ('get request')
  try {
    const user = await User.findAll()
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message)
    res.status(400).json(err);
  }
})

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});
// login route
router.post('/login', async (req, res) => {
  console.log('here123')
  try {
      console.log('1')
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log('2')
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log('3')
    const validPassword = await userData.checkPassword(req.body.password);
    console.log('4')
    if (!validPassword) {
      console.log('4.5')
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log('5')
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    console.log('6')
  } catch (err) {
      console.log(err.message)
    res.status(400).json(err);
    
  }
});
// signup route
router.post('/signup', async (req, res) => {
  try{
    const signupData = User.create( req.body )
    req.session.save(() => {
      req.session.user_id = signupData.id;
      req.session.logged_in = true;

      res.json(signupData)
    })
  } catch (err) {
    res.status(400).json(err);
  }
})

// /api/dashboard/logout
router.post('/logout', (req, res) => {
  console.log('here')
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});


module.exports = router;