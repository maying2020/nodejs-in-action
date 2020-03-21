// 我们在一个异步throw一个错误是不能被外面的trycatch包裹到的
// function interview(callback){
//     setTimeout(()=>{
//         if(Math.random > 0.8){
//             console.log(callback('success'))
//         } else {
//             // console.log('fail')
//             throw new Error('fail')
//         }
//     },500)
// }


// try{
//     interview(()=>{
//         console.log('smail-')
//     })
// } catch(e){
//     console.log(e)
// }



// res判断起来比较麻烦

// function interview(callback){
//     setTimeout(()=>{
//         if(Math.random()> 0.1){
//             callback('success')
//         } else {
//             callback(new Error('fail'))
//         }
//     },500)
// }



//     interview((res)=>{
//         if(res instanceof Error){
//             return console.log('cry-')
//         }
//         console.log('smail')
//     })


// nodejs规范 回调函数的第一个参数是error

    // function interview(callback){
    //     setTimeout(()=>{
    //         if(Math.random()> 0.1){
    //             callback(null,'success')
    //         } else {
    //             callback(new Error('fail'))
    //         }
    //     },500)
    // }

    //     interview((res)=>{
    //         if(res){
    //             return console.log('cry-')
    //         }
    //         console.log('smail')
    //     })




// callback的异步流程控制-回调地狱


    // function interview(callback){
    //     setTimeout(()=>{
    //         if(Math.random()> 0.1){
    //             callback(null,'success')
    //         } else {
    //             callback(new Error('fail'))
    //         }
    //     },500)
    // }

    //     interview((err)=>{
    //         if(err){
    //             return console.log('cry-第一轮')
    //         }
    //         interview((err)=>{
    //             if(err){
    //                 return console.log('cry-第二轮')
    //             }
    //             interview((err)=>{
    //                 if(err){
    //                     return console.log('cry-第三轮')
    //                 }
    //                 console.log('smail--88888')
    //             })
    //         })
    //     })


// 异步任务并发



    // function interview(callback){
    //     setTimeout(()=>{
    //         if(Math.random()> 0.1){
    //             callback(null,'success')
    //         } else {
    //             callback(new Error('fail'))
    //         }
    //     },500)
    // }

    // 同时去两家公司面试 
        // interview((err)=>{
        //     if(err){
        //         return console.log('')
        //     }
        //     count ++
        // })

        // interview((err)=>{
        //     if(err){
        //         return console.log('')
        //     }
        //     count ++

        //     if(count...){

        //     }
        // }) 
 

// 社区解决方案
// async库 

// thunk编程范式