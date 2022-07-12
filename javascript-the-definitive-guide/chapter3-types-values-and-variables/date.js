//working with dates.
var then = new Date(2010,0,1);
console.log(then);
var later = new Date(2010,0,1,17,10,30);
console.log(later);

var now = new Date();
console.log(now)
var elapsed = now - then;
console.log(elapsed); //interval in milliseconds

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.toString());
console.log(now.toUTCString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
