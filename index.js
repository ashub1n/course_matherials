// Call stack
// event loop
// timers
// callback hell
// Promises
// then catch
// await asynk
/*

onGetUserInfo(1, (userData) => {
    onGetPermissions(userData, (permissions, userData) => {
        makePost(permissions, userData);
    });
});
Рефактор:

getUserInfo(1)
    .then(userData => { return getPermissions(userData); })
    .then(([permissions, userData]) => { makePost(permissions, userData); })
    .catch(console.log("err"));


function addFrom(a){
    return new Promise(resolve => {
        plusOneAfter1Second(a).then((b) => {
            plusOneAfter1Second(b).then((c) => {
                plusOneAfter1Second(c).then((d) => {
                    resolve(console.log([a, b, c, d]));
                })
            })
        })
    });
}
console.log(addFrom(6)); //[6, 7, 8, 9]


plusOneAfter1Second(6)
    .then(n1 => plusOneAfter1Second(n1))
    .then(n2 => plusOneAfter1Second(n2))
    .then(n3 => plusOneAfter1Second(n3))
    .then((n1, n2, n3) => console.log([n1, n2, n3])) //[10, undefined, u

async function chainAsync(n) {
  const a = await plusOneAfter1Second(n);
  const b = await plusOneAfter1Second(a);
  const c = await plusOneAfter1Second(b);
  return [n, a, b, c];
}


*/


console.log('Start');

// const main = () => {
//     console.log('Start main');
//     const fun1 = (a) => {
//         console.log('Start fun1');
//         const fun2 = (a) => {
//             console.log('Start fun2');
//             const fun3 = (a) => {
//                 console.log('Start fun3');
//                 return a * a;
//             }
//             return fun3(a);
//         }
//         const b = fun2(a);
//         console.log('Start fun1 call 2');
//         return  b ;
        
//     }
//     console.log(fun1(2));
// }

// main();
// let i = 0; 
// let int = setInterval(() => {
//     console.log('before Finish int ');

//     if (i > 5){
//         clearInterval(int);
//     }
//     i++;
// }, 1000);

 
// console.log('before Finish');

// setTimeout(() => {
//     console.log('Try to sennd request');
//     const x = {};
//     setTimeout(() => {
//         console.log('Try to send response');
//         x.test = true;
//         x.finished = true;
//         console.log(x);   
//     }, 2000);
//     console.log(x);   

// }, 1000);
 
// console.log('File end');   

// const p = new Promise((resolve, reject)=>{
    
//         setTimeout(() => {
//             console.log('Try to send request');
//             const x = {};
//             setTimeout(() => {
//                 try {
//                     console.log('Try to send response');
//                     x.test = true;
//                     x.finished = true;
//                     const rr = Math.random()*10;
//                     console.log('rr', rr);
//                     if (rr < 5) {
//                         throw  'error from async code';
//                     } 
                    
//                     console.log(x); 
//                     resolve(x);  
//                 } catch (e) {
//                     console.log(e);
//                     reject('Error' + e);
//                 }
//             }, 2000);
//         }, 1000);
  
// });


// const p2 = new Promise((resolve, reject)=>{
    
//     setTimeout(() => {
//         console.log('Try to send request');
       
//         setTimeout(() => {
//             try {
//                 console.log('Try to send response');
//                 const x = {};
//                 x.test = true;
//                 x.finished = true;
                
//                 x.rr = Math.random()*10;
//                 x.uuid = Date.now();
//                 console.log('rr', x.rr);
//                 if ( x.rr < 5) {
//                     throw  'error from async code';
//                 } 
                
//                 console.log(x); 
//                 resolve(x);  
//             } catch (e) {
//                 console.log(e);
//                 reject('Error' + e);
//             }
//         }, 2000);
//     }, 1000);

// });


// (async ()=>{
//     try {
//         console.log('before await');
//         const [v1,v2 ] = await Promise.all([p,p2]);
//         // 
//         let result = await p;
//         let result2 = await p2;
//         console.log('await Promise is fullfilled', result === v1, result2 === v2);
//     } catch (e) {
//         console.log('await error', e);
//     }
    
// })()


// let testVar = null;
// p.then((value)=>{
//     console.log('Promise is fullfilled', value);
//     testVar = value;
// }).then(()=>{
//     console.log('testVar is ', testVar);
// }).catch((e)=>{
//     console.log('error is ', e);
// }).finally(()=>{
//     console.log('Finally');
// })