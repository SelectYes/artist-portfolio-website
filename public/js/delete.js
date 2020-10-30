const mongoose = require('mongoose');
const article = require('../../models/article');
const Article = require('../../models/article');

const clearDB = async () => {
    Article.deleteMany({}, () => console.log('ARTICLES CLEARED'));
}   

module.exports = clearDB;