import React from 'react';
import UserInfo from '../component/userInfo';
import { Anchor } from 'antd';
import IntroductionInfo from '../component/introductionInfo.jsx';
import {TechnicalDocumentationReact,TechnicalDocumentationVue,TechnicalDocumentationOther,TechnicalDocumentationNode} from './technical-documentation';
const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    link: {
      title: React.ReactNode;
      href: string;
    },
  ) => {
    e.preventDefault();
    console.log(link);
};
const LeftComponent:React.FC = ()=>{
    return <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: 'personal-resume',
        href: '#personal-resume',
        title: '个人简历',
      },
      {
        key: 'self-introduction',
        href: '#self-introduction',
        title: '个人介绍',
      },
      {
        key: 'technical-documentation',
        href: '#technical-documentation',
        title: '技术文档',
        children: [
          {
            key: 'technical-documentation-react',
            href: '#technical-documentation-react',
            title: 'react',
          },
          {
            key: 'technical-documentation-vue',
            href: '#technical-documentation-vue',
            title: 'vue',
          },
          {
            key: 'technical-documentation-node',
            href: '#technical-documentation-node',
            title: 'node',
          },
          {
            key: 'technical-documentation-other',
            href: '#technical-documentation-other',
            title: '其它',
          },
        ],
      },
    ]}
    style={{
        width:"10vw",
        position:"fixed",
        top:"15vh",
        left:"2vw",
    }}
  />
}
const RightComponent:React.FC = ()=>{
    return <div id="homePageContent">
      <UserInfo/>
      <IntroductionInfo/>
        <div id= "technical-documentation">
          <TechnicalDocumentationReact/>
          <TechnicalDocumentationVue/>
          <TechnicalDocumentationNode/>
          <TechnicalDocumentationOther/>
        </div>
      </div>
}
export {
    LeftComponent,
    RightComponent
}