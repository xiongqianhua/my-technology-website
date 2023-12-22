//手写一个HOC高阶组件
//增改props
function control(wrappedComponent){
    return class Control extends React.Component{
        render(){
            let props = {
                ...this.props,
                message:"You are under contrl"
            }
            return <wrappedComponent {...props}/>
        }
    }
}

//劫持渲染
function HOC(component){
    return class hoc extends React.Component{
        render(){
            if(this.props.data){
                return <component {...this.props}/>
            }
            return <div>lodaing...</div>
        }
    }
}
