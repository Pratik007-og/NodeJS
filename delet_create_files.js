var fs=require('fs');

/*fs.mkdir('stuff',function () {
  fs.readFile('readme.txt','utf8',function (err,data) {
    fs.writeFile('./stuff/writeMe.txt',data, err=>{
      if(err){console.error(err);}
    });
  })
});*/

fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff',err=>{
    if(err){
      console.error(err);
    }
  });
});
