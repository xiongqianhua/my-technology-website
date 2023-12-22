
/**
 * useEffect与useMemo的区别
 * 1.useEffect 在dom改变之后浏览器渲染结束触发，可以帮助我们在DOM更新完成后执行某些副作用操作，
 * 如数据获取，设置订阅以及手动更改 React 组件中的 DOM 等，useEffect可以像让我们在组件即将卸载前做一些清除操作，如清空数据，清除计时器
 * 2.useMemo在dom渲染之前触发，就像官方所说的，类比生命周期就是[shouldComponentUpdate]
 */
useEffect(()=>{
    // componentDidMount is here!
    setCounter(counter=> 10);
    return ()=>{
        // componentWillUnmount is here!
        setCounter(counter=>0)
    }
},[])
useEffect(()=>{
    // componentDidMount is here!
    // componentDidUpdate is here!
    setCounter(counter=> 10);
    return ()=>{
        // componentWillUnmount is here!
        setCounter(counter=>0)
    }
});
useEffect(()=>{
    // componentDidMount is here!
    // componentDidUpdate is here!
    setCounter(counter=> 10);
    return ()=>{
        // componentWillUnmount is here!
        setCounter(counter=>0)
    }
},[props]);

//useMemo返回一个值
const total = useMemo(() => {
    number * 1000
}, [number])
//useCallback返回一个函数
const render = useCallback(
    () => {
       return <Button>{number}</Button>
    },
    [number],
);


//useRef 返回的是一个可变的ref对象，其.current属性被初始化传入参数。返回的ref对象在组件的整个生命周期保持不变。
//这个ref对象只有一个current属性，它的地址一直不会变。useRef变化不会主动使页面渲染，不会跟useState或者useReducer一样触发页面变化。
import React, { useRef } from "react";
export default function App() {
  const r = useRef(0);
  console.log(r);
  const add = () => {
    r.current += 1;
    console.log(`r.current:${r.current}`);
  };
  return (
    <div className="App">
      <h1>r的current:{r.current}</h1>
      <button onClick={add}>点击+1</button>
    </div>
  );
}


//useReducer 
 function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { counter: state.counter + 1 };
      default:
        return { counter: 0 };
    }
  }
  
  function App(props) {
    const [state, dispatch] = useReducer(counterReducer, { counter: 10 });
    return (
      <h1 onClick={() => dispatch({ type: "INCREMENT" })}>
        Hello, {props.name}
        {state.counter} times
      </h1>
    );
  }

//combineReducers
  

//useContext
const context = React.createContext();

//redux中常用的api：  createStore, compose, applyMiddleware,connect,
//mapStateToProps将state映射到UI组件参数, 
//mapDispatchToProps负责输出逻辑，将用户对ui组件的操作映射成action
import {connect} from 'react-redux';
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
const visible = connect(mapStateToProps,mapDispatchToProps)(Todolist)