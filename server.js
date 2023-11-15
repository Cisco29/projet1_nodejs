const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'templates'));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/inscription', (req, res) => {
    res.render('form')
})


app.post('/inscription', (req, res) => {
    console.log(req.body);
    res.render('presentation', { 
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        phone: req.body.phone
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Le serveur HTTP est : http://localhost:${process.env.PORT}`)
});
