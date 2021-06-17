var events=require('events');
var util=require('util');

/*var myEmitter=new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
  console.log(msg);
});*/

var Person=function (name) {
  this.name=name;
};

util.inherits(Person,events.EventEmitter);

var j=new Person('james');
var a=new Person('amy');
var b=new Person('Bob');
var people=[j,a,b];

people.forEach(function(person) {
  person.on('speak',function(msg) {
    console.log(person.name + ' said: '+ msg);
  })
});

j.emit('speak','Hey buddies');
