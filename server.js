const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('Hello Express!');

  //res.send('<h1>Hello Express!</h1>');

  res.send({
    name: 'Javier',
    likes: [
      'Playing guitar',
      'Programming'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "This doesn't work right now!"
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
