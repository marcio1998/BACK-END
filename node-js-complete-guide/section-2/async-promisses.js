const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('Done!!');
    },1500);
    });
    return promise;
}

//asynchronous, don't execute immediately
setTimeout(() => {
    console.log('Timer is Done!');
    fetchData().then(text=>{
        console.log(text);
        
    });
}, 2000);

//synchronous
console.log('Hello');
console.log('Hi');