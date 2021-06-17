var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname + '/demo.html');
    myReadStream.pipe(res);
  }else if(req.url === '/contact-us'){
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname + '/demo2.html');
    myReadStream.pipe(res);
  }else if(req.url === '/api/ninjas'){
    var ninjas=[
      {name:'Pratik',age:20},
      {name:'Rishi',age:22}
    ];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(ninjas));
  }else{
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname + '/404.html');
    myReadStream.pipe(res);
  }
})

server.listen(3000,'127.0.0.1');
console.log('Now Listening');
