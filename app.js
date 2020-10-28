const express = require('express');
const app = express();
const PORT = 3000;

// ROUTES
const articlesRouter = require('./routes/articles');

// ROUTES CONFIIG
app.use('/articles', articlesRouter);

// CSS CONFIG
app.use(express.static(__dirname + '/public'));

//EJS CONFIG
app.set('view engine', 'ejs');

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

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));