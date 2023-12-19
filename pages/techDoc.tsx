import React, { useState } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout, Flex,Button } from 'antd';
import { AppstoreOutlined, HomeOutlined,ReadOutlined,GithubOutlined, LinkOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ['latin'] })

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: "80vh",
  lineHeight: '120px',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
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

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '技术文档',
    key: 'techDoc',
    icon: <ReadOutlined />,
  },
  {
    label: '个人作品',
    key: 'product',
    icon: <AppstoreOutlined />,
    children: [
      {
        type: 'group',
        label: '作品1',
        children: [
          {
            label: 'product1',
            key: 'product1',
          },
          {
            label: 'product2',
            key: 'product2',
          },
        ],
      },
      {
        type: 'group',
        label: '作品2',
        children: [
          {
            label: 'product3',
            key: 'product3',
          },
          {
            label: 'product4',
            key: 'product4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://github.com/xiongqianhua/my-technology-website" target="_blank" rel="noopener noreferrer">
        github
      </a>
    ),
    key: 'alipay',
    icon: <GithubOutlined />,
  },
  {
    label: (
      <a href="https://juejin.cn/post/7313911715854598184" target="_blank" rel="noopener noreferrer">
        掘金
      </a>
    ),
    key: 'alipay',
    icon: <LinkOutlined />,
  },
];
const MenuList: React.FC = () => {
  const [current, setCurrent] = useState('techDoc');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default function Home() {
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
            <div className={styles.logoBox}></div>
            <div className={styles.webName}>Xiongqianhua's technology website</div>
            <MenuList/>
          </Header>
          <Layout>
            <Sider width="25%" style={siderStyle}>
              Sider
            </Sider>
            <Content style={contentStyle}>Content</Content>
          </Layout>
          <Footer style={footerStyle}>Xiongqianhua's technology website</Footer>
        </Layout>
        </div>
      </main>
    </>
  )
}
