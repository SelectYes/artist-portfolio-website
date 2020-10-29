const express = require('express');
const Article = require('../models/article');
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
});

router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.render('articles/show', {article: article})
        
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });

    try {
        await article.save();
        res.redirect(`/articles/${article._id}`);
    } catch (error) {
        // console.log(error)
        res.render('articles/new', { article: article })
    }
});

module.exports = router;