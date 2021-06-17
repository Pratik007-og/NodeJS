var express = require('express');

var app = express();
app.get('/',function (req,res) {
  //res.send('This is the home page');
  res.sendFile(__dirname + '/demo.html');
});

app.get('/contact',function (req,res) {
  //res.send('This is the contact page');
  res.sendFile(__dirname + '/demo2.html');
});

app.get('/profile/:name',function(req,res) {
  res.send('You requested to see a profile with the name of '+ req.params.name);
});

app.listen(3000);
