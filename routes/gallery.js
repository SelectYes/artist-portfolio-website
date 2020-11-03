const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        active: "gallery",
        activeClass: 'active'
    }

    res.render('gallery/gallery', {obj: obj});
});

module.exports = router;