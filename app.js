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
    const articles = [{
        title: "test title",
        createAt: Date.now(),
        description: "test description"
    }];

    res.render('index', {articles: articles});
});

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));