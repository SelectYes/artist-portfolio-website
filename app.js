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
const articlesRoute = require('./routes/articles');
const homeRoute = require('./routes/home');
const galleryRoute = require('./routes/gallery');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const blogRoute = require('./routes/blog');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');



// MEDIA FOLDER CONFIG
app.use(express.static(__dirname + '/public'));


//INDEX
app.get('/', async (req, res) => {

    
    try {

        const obj = {
            active: "",
            activeClass: "active"
        }

        res.render('home/home', {obj: obj});

    } catch (error) {
        console.log(error.message);
    } 
});

// ROUTES CONFIG
app.use('/articles', articlesRoute);
app.use('/home', homeRoute);
app.use('/gallery', galleryRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/blog', blogRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// CLEAR ARTICLE DB
// deleteDB();


app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));