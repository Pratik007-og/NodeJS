var fs = require('fs');
//SYNCHRONOUS VERSION
//var readme = fs.readFileSync('readme.txt','utf8');

//console.log(readme);

//fs.writeFileSync('writeMe.txt',readme);

//ASYNCHRONOUS VERSION

fs.readFile('readme.txt', 'utf8', function (err, data) {
    //console.log(data);
    fs.writeFile('writeMe.txt', data,err=> {
      if(err){
        console.error(err);
      }
    });

});
//  console.log(data);

//console.log('test');
