/*
 * @Author: qianhua.xiong
 */
import React from 'react';
import { List, Typography } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const WorkTech: React.FC = () => (
    <List
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[javascript]</Typography.Text> {item}
        </List.Item>
      )}
      style={{ width: "100%" }}
    />
);

export default WorkTech;