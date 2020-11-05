const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().sort({
            createdAt: 'desc'
        });
    
        const obj = {
            active: "blog",
            activeClass: "active"
        };
    
        res.render('blog/blog', {obj: obj, articles: articles});
        
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const article = await Article.findOne({slug: req.params.slug});

        const obj = {
            active: "blog",
            activeClass: "active"
        };

        if (!article) {
            res.redirect('/');
        } else {
            res.render('blog/show', {obj: obj, article: article});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;