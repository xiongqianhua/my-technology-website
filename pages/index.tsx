import React from 'react';
import LayoutComponent from '../component/layout';

export default function Home() {
  const LeftComponent:React.FC = ()=>{
    return <div>home-left</div>
  }
  const RightComponent:React.FC = ()=>{
    return <div>home-right</div>
  }
  const ComponentsWrapper:React.FC = ()=>{
    return LayoutComponent({LeftComponent,RightComponent,MenuKey:'home'})
  }
  return (
    <ComponentsWrapper/>
  )
}
