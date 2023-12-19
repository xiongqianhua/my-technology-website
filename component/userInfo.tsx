/*
 * @Author: qianhua.xiong
 */
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { Card, Col, Row } from 'antd';
import WorkTech from '../component/workTech';
const { Meta } = Card;
const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'UserName',
        children: 'Xiongqianhua',
    },
    {
        key: '2',
        label: 'email',
        children: 'xiongqianhuaemail@163.com',
    },
    {
        key: '3',
        label: 'Live',
        children: 'Shanghai',
    },
    {
        key: '5',
        label: 'Address',
        children: 'Pudong,Zhangjiang,Shanghai',
    },
    {
        key: '4',
        label: 'Remark',
        children: '5 year‘s workspearence',
    },
];

const UserInfo: React.FC = () => <Row>
    <Col span={6}>
        <Card
            hoverable
            style={{ width: "15vw" }}
            cover={<img alt="xiongqianhua" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="个人照片" description="我就是我，不一样的烟火" />
        </Card>
    </Col>
    <Col span={18}>
        <Descriptions title="UserInfo" items={items} column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }} />
        <WorkTech/>
    </Col>

</Row>

export default UserInfo;