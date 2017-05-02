const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('Hello Express!');

  //res.send('<h1>Hello Express!</h1>');

  // res.send({
  //   name: 'Javier',
  //   likes: [
  //     'Playing guitar',
  //     'Programming'
  //   ]
  // });

  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Hello world 2!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "This doesn't work right now!"
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
