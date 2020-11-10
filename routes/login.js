const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// SIGN-IN ROUTES
// ============================================================================================ //
router.get('/', (req, res) => {
    const user = {
        name: "User",
        password: "123"
    }

    res.render('login/login', {user: user})
});

router.post('/', passport.authenticate('local', 
    {
        successRedirect: '/articles',
        failureRedirect: '/home'
    }), (req, res) => {
});

// SIGN-OUT ROUTES
// ============================================================================================ //

router.get('/logout', (req, res) => {
    req.logout();
    // req.flash('success', 'Logout successful!')
    res.redirect('/home');   
});

module.exports = router;