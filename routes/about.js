const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        active: "about",
        activeClass: 'active'
    }

    res.render('about/about', {obj: obj});
});

module.exports = router;