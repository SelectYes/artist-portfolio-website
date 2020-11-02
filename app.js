const express = require('express');
const app = express();
const mongoose = require('mongoose');
const deleteDB = require('./public/js/delete')
const methodOverride = require('method-override');

const PORT = 3000;

//IMPORT MODELS
const Article = require('./models/article');
const clearDB = require('./public/js/delete');


// MONGOOSE CONFIG 
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message))

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// ROUTES
const articlesRouter = require('./routes/articles');
const homeRoute = require('./routes/home');


// MEDIA FOLDER CONFIG
app.use(express.static(__dirname + '/public'));


//INDEX
app.get('/', async (req, res) => {
    
    try {
        const articles = await Article.find().sort({
            createdAt: 'desc'
        });
        res.render('articles/index', {articles: articles});
    } catch (error) {
        console.log(error.message);
    } 
});

// ROUTES CONFIG
app.use('/articles', articlesRouter);
app.use('/home', homeRoute);

// CLEAR DB
// deleteDB();


app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));