const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

//IMPORT MODELS
const Article = require('./models/article');


// MONGOOSE CONFIG 
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message))

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));


// ROUTES
const articlesRouter = require('./routes/articles');


// CSS CONFIG
app.use(express.static(__dirname + '/public'));



//INDEX
app.get('/', (req, res) => {
    const articles = [
        {
            title: "Test Title",
            createdAt: new Date(),
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil repudiandae odit suscipit dolor, dolore commodi maxime explicabo necessitatibus, consequuntur labore delectus perspiciatis similique recusandae totam quasi aliquam nam, soluta dolorem."
        },
        {
            title: "Test Title 2",
            createdAt: new Date(),
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil repudiandae odit suscipit dolor, dolore commodi maxime explicabo necessitatibus, consequuntur labore delectus perspiciatis similique recusandae totam quasi aliquam nam, soluta dolorem."
        },
    ];

    res.render('articles/index', {articles: articles});
});

// ROUTES CONFIG
app.use('/articles', articlesRouter);

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));