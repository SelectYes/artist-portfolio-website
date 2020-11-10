const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');


router.get('/', (req, res) => {
    
    res.render('register/register')
});


router.post('/', async (req, res) => {
    try {
        const newUser = new User({ username: req.body.username });
        const password = req.body.password;
    
        await User.register(newUser, password)
    
        passport.authenticate('local')(req, res, () => {
            res.redirect('/login');
        });
        
    } catch (error) {
        console.log(error);
        res.redirect('/register');
    }
});

module.exports = router;