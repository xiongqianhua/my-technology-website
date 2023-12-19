import React from 'react';
import LayoutComponent from '../component/layout';
import {LeftComponent,RightComponent} from '../component/homePage';
export default function Home() {
  const ComponentsWrapper:React.FC = ()=>{
    return LayoutComponent({LeftComponent,RightComponent,MenuKey:'home'})
  }
  return (
    <ComponentsWrapper/>
  )
}
