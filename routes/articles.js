const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('articles page')
});

router.get('/new', (req, res) => {
    res.render('articles/new')
});

router.post('/', (req, res) => {
    
});

module.exports = router;