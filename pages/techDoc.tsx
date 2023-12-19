import React from 'react';
import LayoutComponent from '../component/layout';

export default function Tech() {
  const LeftComponent:React.FC = ()=>{
    return <div>技术-left</div>
  }
  const RightComponent:React.FC = ()=>{
    return <div>技术-right</div>
  }
  const ComponentsWrapper:React.FC = ()=>{
    return LayoutComponent({LeftComponent,RightComponent,MenuKey:'techDoc'})
  }
  return (
    <ComponentsWrapper/>
  )
}
