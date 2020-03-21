// (function(){
//     var promise = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             // resolve(3);
//             reject(new Error('5'))
//         },300)
//     }).then((res)=>{
//         // console.log('res',res) //3
//     }).catch((err)=>{
//         console.log(err)
//     })
//     console.log(promise)
//     setTimeout(()=>{
//         console.log('800',promise)
//     },800)
// })();


// 与callback比优秀的点
// (function(){

// var promise = interview();
// var promise2 = promise.then((res)=>{
//     // console.log('smile')
//     // throw new Error('refuse')
//     // return 'sccept'
// })
// .then((error)=>{
//     // console.log('cry')

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('accept!!!')
//         },300)
//     })
// })


// // .then的结果返回全新的promise2
// // 这个promise2的状态会根据promise的执行结果来决定的 then和catch都一样promise2会等待
// // 里面的代码执行结束才会返回结果


// setTimeout(()=>{
//     console.log('promise',promise)
//     console.log('promise2',promise2)
//     },800)

// setTimeout(()=>{
// console.log('promise',promise)
// console.log('promise2',promise2)
// },1000)

// function interview(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             if(Math.random() > 0){
//                 resolve('success')
//             }else{
//                 reject(new Error('fail'))
//             }
//         },500)
//     })
// }
// })();



// 面试

// (function(){
// // 把回调地狱编程线性
//  interview(1)
//     .then((res)=>{
//         return interview(2)
//     })
//     .then((res)=>{
//         return interview(3)
//     })
//     .then((res)=>{
//         console.log('smile-----')
//     })
//     .catch((error)=>{
//         console.log('scry-----',error.round)
//     })
//     function interview(round){
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 if(Math.random() > 0.2){
//                     resolve('success')
//                 }else{
//                     var error = new Error('fail')
//                     error.round = round;
//                     reject(error)
//                 }
//             },500)
//         })
//     }
//     })();

// 同时面试两家公司

(function(){
    // 并发控制
    Promise.all([
            interview('geekbang'),
            interview('tencent')
        ])
        .then(()=>{
            console.log('两家都成功啦')
        })
        .catch((error)=>{
            // 两家都挂了 name是第一家公司
            console.log('fail-cry ' + error.name)
        })



        function interview(name){
            return new Promise(function(resolve,reject){
                setTimeout(()=>{
                    if(Math.random() > 0.2){
                        resolve('success')
                    }else{
                        var error = new Error('fail')
                        error.name = name;
                        reject(error)
                    }
                },500)
            })
        }
        })();