import React from 'react';
import { Descriptions,Divider,Collapse,List,Image, Typography,Progress, Space } from 'antd';
import type { DescriptionsProps,CollapseProps } from 'antd';
import { Card, Col, Row } from 'antd';
import WorkTech from '../component/workTech';
const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: '姓名',
        children: 'Xiongqianhua',
    },
    {
        key: '5',
        label: '年龄',
        children: '28',
    }, 
    {
        key: '3',
        label: '地址',
        children: '上海',
    },
    {
        key: '4',
        label: '工作经验',
        children: '5年',
    },
    {
        key: '2',
        label: '邮箱',
        children: 'xiongqianhuaemail@163.com',
    },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items2: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];
const onChange = (key: string | string[]) => {
    console.log(key);
};
const data1 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
  ];
const UserInfo: React.FC = () => <Row>
    <Col span={6}>
            <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    </Col>
    <Col span={18}>
        <Descriptions title="个人信息" items={items} column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }} />
        <List
            bordered
            dataSource={data1}
            renderItem={(item) => (
                <List.Item>
                <Typography.Text mark>[javascript]</Typography.Text> {item}
                </List.Item>
            )}
            style={{ width: "100%" }}
            />
    </Col>
    <Divider orientation="left">工作技能</Divider>
    <WorkTech/>
    <Divider orientation="left">工作经历</Divider>
    <Collapse items={items2} defaultActiveKey={['1']} onChange={onChange} style={{ width: "100%" }}/>
</Row>

export default UserInfo;