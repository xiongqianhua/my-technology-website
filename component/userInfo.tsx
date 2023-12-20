import React from 'react';
import { Descriptions, Divider, Collapse, Image, Typography, Progress, Space, List, Card, Col, Row } from 'antd';
import type { DescriptionsProps, CollapseProps } from 'antd';
const items: DescriptionsProps['items'] = [
    {
        key: 'items1',
        label: '姓名',
        children: 'Xiongqianhua',
    },
    {
        key: 'items5',
        label: '年龄',
        children: '28',
    },
    {
        key: 'items3',
        label: '地址',
        children: '上海',
    },
    {
        key: 'items4',
        label: '工作经验',
        children: '5年',
    },
    {
        key: 'items2',
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
        key: 'items21',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: 'items22',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: 'items23',
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

const data2 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const UserInfo: React.FC = () => <div id="personal-resume"><Row>
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
    <List
        bordered
        dataSource={data2}
        renderItem={(item) => (
            <List.Item>
                <Typography.Text mark>[javascript]</Typography.Text> {item}
            </List.Item>
        )}
        style={{ width: "100%" }}
    />
    <Divider orientation="left">工作经历</Divider>
    <Collapse items={items2} defaultActiveKey={['1']} onChange={onChange} style={{ width: "100%" }} />
</Row></div>

export default UserInfo;