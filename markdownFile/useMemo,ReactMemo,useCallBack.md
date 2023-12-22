# useMemo,ReactMemo,useCallBack,三者的区别
 

//useMemo​​和​​useCallback​​接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，
//区别在于​​useMemo​​返回的是函数运行的结果，​​useCallback​​返回的是函数。
//useCallback（fn，deps）相当于useMemo（（）=> fn，deps）

顶部上面所说的，当你把某些函数传递给经过优化的并使用引用替代性去避免非必要渲染（例如shouldComponentUpdate）的子组件时，则非常有用。
而父组件传递一个函数给子组件的时候，由于父组件的更新会导致该函数重新生成从而传递给子组件的函数引用发生了变化，这就会导致子组件也会更新，而很多时候子组件的更新是没必要的，
所以我们可以通过​​useCallback​​来缓存该函数，然后传递给子组件。举个例子：
-----------------------------------
## useMemo和useCallback的区别和使用
https://blog.51cto.com/u_15283585/5275160

## useEffect 和 useMemo 区别

useEffect是在DOM改变之后触发，useMemo在DOM渲染之前就触发
useMemo是在DOM更新前触发的，就像官方所说的，类比生命周期就是[shouldComponentUpdate]
useEffect可以帮助我们在DOM更新完成后执行某些副作用操作，如数据获取，设置订阅以及手动更改 React 组件中的 DOM 等
不要在这个useMemo函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo
在useMemo中使用setState你会发现会产生死循环，并且会有警告，因为useMemo是在渲染中进行的，你在其中操作DOM后，又会导致触发memo

## useCallback 和 useMemo 区别

类似 shouldComponentUpdate， 判定该组件的 props 和 state 是否有变化，从而避免每次父组件render时都去重新渲染子组件
useCallback返回一个函数，当把它返回的这个函数作为子组件使用时，可以避免每次父组件更新时都重新渲染这个子组件,子组件一般配合 memo 使用


## 总结：React.memo() 和 useMemo() 的主要区别
从上面的例子中，我们可以看到 React.memo() 和 useMemo() 之间的主要区别：

React.memo() 是一个高阶组件，我们可以使用它来包装我们不想重新渲染的组件，除非其中的 props 发生变化
useMemo() 是一个 React Hook，我们可以使用它在组件中包装函数。 我们可以使用它来确保该函数中的值仅在其依赖项之一发生变化时才重新计算

虽然 memoization 似乎是一个可以随处使用的巧妙小技巧，但只有在绝对需要这些性能提升时才应该使用它。 Memoization 会占用运行它的机器上的内存空间，因此可能会导致意想不到的效果。

# 问题一：既然memo对性能优化有好处，为什么不把每个组件都包一下？
因为memo有缓存，大量使用，造成大量的性能开销。其次，props的比较只是浅比较，会有一些坑（解决浅比较的方式有：重新定义一个对象或者数组比如{...object,1},不用pop或者push）

<!-- useCallback 和 useMemo 仅仅在后续渲染（也就是重渲染）中起作用，在初始渲染中它们反而是有害的
useCallback 和 useMemo 作用于 props 并不能避免组件重渲染。只有当每一个 prop 都被缓存，且组件本身也被缓存的情况下，重渲染才能被避免。
只要有一丁点疏忽，那么你做的一切努力就打水漂了。所以说，简单点，把它们都删了吧。把包裹了“纯 js 操作“的 useMemo 也都删了吧。
与组件本身的渲染相比，它缓存数据带来的耗时减少是微不足道的，并且会在初始渲染时消耗额外的内存，造成可以被观察到的延迟。 -->


