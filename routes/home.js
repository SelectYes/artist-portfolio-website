const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const obj = {
        active: "home",
        activeClass: 'active'
    }

    res.render('home/home', {obj: obj});
});

module.exports = router;