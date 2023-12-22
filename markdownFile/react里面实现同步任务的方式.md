# react实现同步任务的方式有哪些？
1. React 控制之外的的事件中 setState 同步更新,
比如原生 js 绑定事件，异步执行的 setTimeout/setInterval, Promise.then() 等
  onClick = () => {
    setTimeout(() => {
      console.log('state 1');
      this.setState({
        num: this.state.num + 1,
      });
      console.log('state 2');
      this.setState({
        times: this.state.times +1,
      });
      console.log('state 3');
    }, 1000);
  }

2. setState中设置回调函数
this.setState(preState => ({
      num: preState.num + 1,
    }),() => {
      console.log(this.state.num);
    })
3. 使用async/await 
首先我们要理解 async/await 。 async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句（ await 通常用来等待一个 Promise ，但是也可以等待一般的函数表达式，等待一般表达式时相当于使用 Promise.resolve() 包装其返回值）。也就是说函数体中 await 后的语句都是异步触发，此时已经脱离了 React 的调度，所以 setState 变成了同步更新。

---------------------------
onClick = () => {
    //a
    this.setState({
      num: this.state.num + 1,
    })
    console.log('1:',this.state.num);
    //b
    this.setState({
      num: this.state.num + 1,
    })
    console.log('2:',this.state.num);
    setTimeout(() => {
      //c
      this.setState({
        num: this.state.num + 1,
      });
      console.log('3:',this.state.num);
    }, 0);
    //d
    this.setState(preState => ({
      num: preState.num + 1,
    }),() => {
      console.log('4:',this.state.num);
    })
    //e
    this.setState(preState => ({
      num: preState.num + 1,
    }))
    console.log('5:',this.state.num);
}
更新 c 在 setTimeout 中，即使延迟时间为 0 ，也属于宏任务；其他 4 次更新会合并，所以总共实际更新两次。d 中的 log 放在回调函数中，属于微任务，所以 5 次 log 的顺序时 1, 2, 5, 4, 3 。
第一次更新中，a, b 两次 setState 中，this.state.num 都为 1 ,所以更新后 num 为 2, d, e 两次 setState 中，preState.num 都可以拿到即时更新结果，分别为 2 ,3 所以更新后 num 为 4 。
第二次更新中，this.state.num 已经是 4 了，故更新后 num 为 5。

--------------------------------------

附一道简单的 async/await 面试题，加深一下对 async/await 的理解：
async function async1(){
  console.log('async1 start');
  let res = await async2();
  console.log(res);
  console.log('async1 end');
}

async function async2(){
  console.log('async2 start');
  return 'async2 end'
}

console.log('script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
async1();
new Promise((resolve,reject) => {
  console.log('Promise start');
  resolve();
}).then(() => {
  console.log('Promise end');
})
console.log('script end');
输出：
script start
VM91:2 async1 start
VM91:9 async2 start
VM91:19 Promise start
VM91:24 script end
VM91:4 async2 end
VM91:5 async1 end
VM91:22 Promise end
undefined
VM91:15 setTimeout



主线程首先打印 'script start' 后遇到 setTimeout ，函数体进入宏任务；
执行函数 async1 ，打印 'async1 start'， 遇到 await ,进入函数 async2，打印 'async2 start', 返回值 'async2 end' 会被 Promsie.resolve() 包装，进入微任务；
进入 new Promsie(), 打印 'Promise start', resolve('Promise end') 进入微任务
打印 'script end' ，主线程结束。
微任务1, 函数 async2 返回， 函数 async2 等待结束，打印 'async2 end', 'async1 end'。
微任务2，Promise.then(), 打印 'Promise end'。微任务清空。
执行宏任务，打印 'setTimeout'。
