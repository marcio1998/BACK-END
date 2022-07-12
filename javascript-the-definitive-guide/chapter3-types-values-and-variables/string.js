//workin with strings

const name = 'Márcio Gabriel';
let msg = 'Hello, ' + 'World';
let gretting = 'Welcome to my blog' + ' ' + name;
console.log(`First String : ${msg}`);
console.log(gretting);

var s = 'Hello, World';
console.log(s.charAt(0));
console.log(s.charAt(s.length-1));
console.log(`Substring ${s.substring(1,4)}`)
console.log(s.slice(-3));
console.log(s.indexOf("l"));
console.log(s.indexOf("l",4));
console.log(s.split(", "));
console.log(s.replace("l", 'L'));
console.log(s.toUpperCase("l", 'L'));
