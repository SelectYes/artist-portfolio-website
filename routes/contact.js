const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    
    const obj = {
        active: "contact",
        activeClass: "active"
    };

    res.render('contact/contact', {obj: obj});
});

module.exports = router;