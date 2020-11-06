const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get('/', (req, res) => {
    
    res.render('register/register')
});

router.post('/', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const name = req.body.name;
    const password = req.body.password;

    try {
        const newUser = {
            name:
        }

    } catch (error) {
        
    }
});

module.exports = router;