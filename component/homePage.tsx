/*
 * @Author: qianhua.xiong
 */
import React from 'react';
import UserInfo from '../component/userInfo';
const LeftComponent:React.FC = ()=>{
    return <div>home-left</div>
}
const RightComponent:React.FC = ()=>{
    return <UserInfo/>
}
export {
    LeftComponent,
    RightComponent
}