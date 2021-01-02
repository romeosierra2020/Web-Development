const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const initialisePassport = require('./passport-config');
const passport = require('passport');
initialisePassport(passport);


const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Rick' });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
});

app.post('/login', (req, res) => {

});
app.listen(3000);