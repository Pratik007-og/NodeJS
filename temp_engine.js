var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets')); // use middleware
/*app.use('/assets',function(req, res, next) {
  console.log(req.url);
  next();   // go to the next middleware
});*/

app.get('/',function (req,res) {
  //res.send('This is the home page');
  //res.sendFile(__dirname + '/demo.html');
  res.render('index');
});

app.get('/contact',function (req,res) {
  //res.send('This is the contact page');
  //res.sendFile(__dirname + '/demo2.html');
  res.render('contact');
});

app.get('/profile/:name',function(req,res) {
  //res.render('profile');
  var data = {age:29, job:'Engineer', hobbies:['eating','cricket','drums']};
  res.render('profile', {person: req.params.name,data: data});//rendering data to the profile view
});

app.listen(3000);
