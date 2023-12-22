//useEffect 执行机制
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [n, setN] = useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  React.useEffect(() => {
    console.log("App");
    return () => {
      console.log("App挂了");
    };
  });
  return (
    <div className="App">
      <h1>n: {n}</h1>
      <button onClick={onClick}>+1</button>
      {/* {n % 2 === 0 ? <B /> : ""} */}
      <B />
    </div>
  );
}

function B() {
  const [m, setM] = useState(0);
  const onClick = () => {
    setM(m + 1);
  };
  React.useEffect(() => {
    console.log("B");

    return () => {
      console.log("B挂了");
    };
  });
  useEffect(()=>{
    let tag = false
    api('').then(res=>{
      if(tag){
        setData(res.data)
      }
    })
    return ()=>{
      tag = true
    }
  },[search])
  return (
    <div>
      B组件
      <h1>m: {m}</h1>
      <button onClick={onClick}>+1</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// 注意点：useEffect 是在render结束之后才执行的。

// 组件 App 首次渲染后，先执行 console.log("B"); 再执行 console.log("App")

// 当执行 n + 1 之后，先执行 console.log("B挂了")，再执行 console.log("B")， 再执行 console.log("App挂了")， 最后执行console.log("App")， 程序结束。

// 当执行 m + 1 之后，先执行 console.log("B挂了")，再执行console.log("B")， 程序结束。

// 当组件 App内，使用 useState 创建的变量，发生变化时，会造成重新render，也就导致原组件（包含子组件）的销毁，以及新组件（包含子组件）的诞生。

// 可以得出，每次重新渲染，都会导致原组件（包含子组件）的销毁，以及新组件（包含子组件）的诞生。

// 结论：

// 1、首先渲染，并不会执行 useEffect 中的 return

// 2、变量修改后，导致的重新render，会先执行 useEffect 中的 return，再执行useEffect内除了return部分代码。

// 3、return 内的回调，可以用来清理遗留垃圾，比如订阅或计时器 ID 等占用资源的东西。