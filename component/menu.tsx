
import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined,ReadOutlined,GithubOutlined, LinkOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
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
      key: 'github',
      icon: <GithubOutlined />,
    },
    {
      label: (
        <a href="https://juejin.cn/post/7313911715854598184" target="_blank" rel="noopener noreferrer">
          掘金
        </a>
      ),
      key: 'juejin',
      icon: <LinkOutlined />,
    },
  ];
interface props {
    MenuKey: string;
}
const MenuList: React.FC<props >= ({MenuKey}) => {
    const [current, setCurrent] = useState( MenuKey || '');
    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      if(e.key === 'home'){
        window.location.href = '/'
      }else{
        window.location.href = '/'+ e.key
      }
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default MenuList