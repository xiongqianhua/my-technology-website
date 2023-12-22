# constructor

类组件
class A extends Component{
    super()
    this.state = {
        data:""
    }
    render(){
        return null
    }
}

函数组件
function A(){
    const [data,setData] = useState('')
    return null
}

# componentDidMount

类组件
class A extends Component(){
    componentDidMount(){
        console.log('componentDidMount')
    }
    return null
}

函数组件
function A(){
    useEffect(()=>{
        console.log(componentDidMount)
    },[data])
}

# shouldComponentUpdate


const MyComponent = React.memo(
    _MyComponent, 
    (prevProps, nextProps) => nextProps.count !== prevProps.count
)

# componentDidUpdate

const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
   console.log('I am didUpdate')
  }
});

# componentWillUnmount

useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);
//当在 useEffect 的回调函数中返回一个函数时，这个函数会在组件卸载前被调用。我们可以在这里面清除定时器或事件监听器


react 生命周期：挂载，更新，卸载





