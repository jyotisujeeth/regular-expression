const  fetchTimeoutData =() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            callback("done last");
        }, 1500);
    });
    return promise;
}

setTimeout( () => {
    console.log("timer1>>>>>>>>>>>>>>>>>>332222222222");
    fetchTimeoutData(text => {
        console.log(text);
    });
}, 2000);

console.log("timer2>>>>>>>>>>>>>>1111");
console.log("timer3>>>>>>>>>>333333");
