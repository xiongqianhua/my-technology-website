/*
 * @Author: qianhua.xiong
 */
import React from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Layout} from 'antd';
import MenuList from '../component/menu';
import Image from 'next/image'
import logo from '../public/favicon.ico';
const { Header, Footer, Sider, Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: "80vh",
  lineHeight: '120px',
  padding: "2vw",
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: 'rgba(0,0,0,0.05)',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff',
};
const headStyle: React.CSSProperties = {
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  backgroundColor: '#fff',
  padding:"12px",
  boxShadow:"0px 10px 25px 0px rgba(0, 0, 0, 0.2)",
  marginBottom:"10px"
};
const layoutStyle = {
  width: '100vw',
  overflow: 'hidden',
};

interface WrapperProps {
    LeftComponent: React.ComponentType<any>;
    RightComponent: React.ComponentType<any>;
    MenuKey:string;
}
const LayoutComponent: React.FC<WrapperProps> = ({ LeftComponent, RightComponent, MenuKey }) => {
  return (
    <>
      <Head>
        <title>xiongqianhua‘s-technology-website</title>
        <meta name="description" content="xiongqianhua‘s-technology-website, main about blogs and self-product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="App">
        <Layout style={layoutStyle}>
          <Header style={headStyle}>
            <div className={styles.headLeft}>
              <Image src={logo} alt="Picture of the author" className={styles.logoBox}/>
              <span className={styles.webName}>My technology website</span></div>
            <MenuList MenuKey={MenuKey}/>
          </Header>
          <Layout>
            <Sider width="15%" style={siderStyle}>
              <LeftComponent/>
            </Sider>
            <Content style={contentStyle}><RightComponent/></Content>
          </Layout>
          <Footer style={footerStyle}>My technology website</Footer>
        </Layout>
        </div>
      </main>
    </>
  )
}

export default LayoutComponent