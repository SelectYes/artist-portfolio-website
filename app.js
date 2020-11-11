// SERVER/DB
const express                   = require('express');
const app                       = express();
const mongoose                  = require('mongoose');
const deleteDB                  = require('./public/js/delete')
const methodOverride            = require('method-override');

//AUTH
const passport                  = require('passport');
const localStrategy             = require('passport-local');
const passportLocalMongoose     = require('passport-local-mongoose');
const session                   = require('express-session');
var MongoStore                  = require("connect-mongo")(session);

//MISC
const PORT                      = 3000;
const clearDB                   = require('./public/js/delete');

//MODELS
const User                      = require('./models/user');

// ENV VARIABLES
if (app.get('env') == 'development'){ require('dotenv').config(); }


// =======================================================================================//


// MONGOOSE CONFIG 
mongoose.connect('mongodb+srv://Lenny:gjEscmfHwQ9g4QH@cluster0.gpyzl.mongodb.net/portfolio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message))

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// =======================================================================================//

app.use(session({
    secret: "Benny is the cutest and best dog in the entire universe",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 } // 180 minutes session expiration
}));
app.use(passport.initialize());
app.use(passport.session());

// config for using 'authenticate()' as middleware
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MAKE CURRENT USER DATA AVAILABLE IN ALL TEMPLATES/ROUTES
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    // res.locals.success = req.flash('success');
    // res.locals.error = req.flash('error');
    next();
});


// =======================================================================================//

// REQUIRE ROUTES
const articlesRoute = require('./routes/articles');
const homeRoute = require('./routes/home');
const galleryRoute = require('./routes/gallery');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const blogRoute = require('./routes/blog');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');

// =======================================================================================//

// MEDIA FOLDER CONFIG
app.use(express.static(__dirname + '/public'));


//HOME
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

// =======================================================================================//

// ROUTES CONFIG
app.use('/articles', articlesRoute);
app.use('/home', homeRoute);
app.use('/gallery', galleryRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/blog', blogRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// =======================================================================================//

// CLEAR ARTICLE DB
// deleteDB();


app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));