const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const user = {
        name: "User",
        password: "123"
    }

    res.render('login/login', {user: user})
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
});

module.exports = router;