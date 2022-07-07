//this is ecapsulate
const fortuneCookies = [
    'Conquer Your Years Or They Will Conquer You!!!',
    'Rivers Need Spring',
    "Do Not Fear What You Don't Know",
    'You Will Have a Pleasant Surprise',
    'Whenever Possible, Keep It Simple'
];

//exports is a global variable use to display code outside the module
exports.getFortune = function(){
    var id = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[id];
}