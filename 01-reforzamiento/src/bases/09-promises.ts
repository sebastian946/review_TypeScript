

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {

        console.log('Yo quiero mi dinero');
        //resolve(100);
        reject('No tienes dinero');
    }, 2000);
});


myPromise.then(
    (myMoneyisBack) => {
        console.log(`I have my money ${myMoneyisBack}`);        
    }).catch(reason => {
        console.warn(reason);
    }).finally(()=>{
        console.log('End of the promise');
    })