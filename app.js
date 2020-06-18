const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.set('view engine', 'pug');

//creating the root route
app.get('/',(req, res) => {
    res.render('index');
});

app.get('/cards',(req, res) => {
    res.render('card', {prompt: "America was founded in what year?"});
});

//setup development server (port 3000)
app.listen(port, () => {
    console.log('The app is running on localhost:3000 ✅');
});