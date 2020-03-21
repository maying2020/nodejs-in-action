// 异步编程的终极解决方案-以同步的方式来写异步
// console.log(async function(){}) // [AsyncFunction]

// console.log(function(){
//     return new Promise( function(resolve){
//         resolve()
//     })
// })  //[Function]


// 调用函数查看执行结果
// console.log(async function(){
//     return 2
// }()) // Promise { 2 }

// console.log(function(){
//     return new Promise( function(resolve){
//         resolve('2')
//     })
// }())  //Promise { 2 }

// 错误
// console.log(async function(){
//     throw new Error(2)
// }()) // error

// console.log(function(){
//     return new Promise( function(resolve,reject){
//         reject(new Error(2))
//     })
// }())  //error


// 结论：async是preomise的语法糖


// awiat

// (function(){
//     const result = async function(){
//         const content = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve('2')
//             },500)
          
//         })
//         console.log('content',content)
//         return 4;
//     }()
        
    
//     setTimeout(()=>{
//         console.log('result',result)
//     },800)
// })();


// // content Promise {<pending>}
// // result Promise {<resolved>: 4}



// (function(){
//     const result = async function(){
//         const content = await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(2)
//             },500)
          
//         })
//         console.log('content',content) //500ms之后才执行的
//         return 4;
//     }()
        
    
//     setTimeout(()=>{
//         console.log('result',result)
//     },800)
// })();


// content 2
// result Promise {<resolved>: 4}

// await等待后面的peomise的执行 再进行async函数的执行



// await可以吧一个promise的错误抛到trycatch里
// (function(){
//     const result = async function(){
//         let content;
//        try{
//         content = await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject(new Error(8))
//             },500)
//         })
//        } catch(error){
//            console.log('error',error.message)
//        }
//         console.log('content',content) //500ms之后才执行的
//         return 4;
//     }()
        
    
//     setTimeout(()=>{
//         console.log('result',result)
//     },800)
// })();


// async

// 暂停async函数的执行
// 用同步的写法获取异步的结果 
// try catch可以获取await所得到的错误



// 使用await改造面试代码




function interview(round){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(Math.random() > 0.2){
                resolve('success')
            }else{
                var error = new Error('fail')
                error.round = round;
                reject(error)
            }
        },500)
    })
}

// (
//     async function ceshi (){
//         try{
//             await interview(1)
//             await interview(2)
//             await interview(3)
//         } catch(error){
//             return console.log('error',error.round)
//         }
//         console.log('smail777')
//     }
// )();


// 并行异步任务

(
    async function ceshi (){
        try{
            await Promise.all([interview(1),interview(2),interview(3)])
        } catch(error){
            return console.log('error',error.round)
        }
        console.log('smail777')
    }
)();


