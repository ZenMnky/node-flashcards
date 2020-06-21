const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

//creating the root route
app.get('/',(req, res) => {
    res.render('index');
});

//creating the flashcards app route
app.get('/cards',(req, res) => {
    // res.locals.prompt = cardContent.prompt[randomCard];
    res.render('card', {prompt: `Discuss 'the blue flu'`, hint: `Atlanta cop, felony murder trial, taser`});  
});

//creating the hello form route
app.get('/hello',(req, res) => {
    res.render('hello');
    
});

//creating post route for hello
app.post('/hello',(req, res) => {
    res.render('hello', {name: req.body.username})
    
});

//setup development server (port 3000)
app.listen(port, () => {
    console.log(`The app is running on localhost: ${port} ✅`);
});