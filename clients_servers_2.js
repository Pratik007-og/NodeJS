var http=require('http');
var fs = require('fs');

var server=http.createServer(function(req,res){
  console.log('request was made '+ req.url);
  res.writeHead(200,{'Content-Type':'application.json'});
  var obj = {
    name: 'Pratik',
    job: 'Ninja',
    age: 25
  };
  res.end(JSON.stringify(obj));
  //var myReadStream = fs.createReadStream(__dirname + '/demo.html','utf8');
  //myReadStream.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log('Hey! Listening to port 3000');
