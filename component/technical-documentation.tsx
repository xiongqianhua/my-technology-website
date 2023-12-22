import React from 'react';
import { Divider, Button, List,} from 'antd';

const TechnicalDocumentationReact: React.FC = () => {
  const reactData = ['fiber','HOC高阶组件','hooks','hooks的底层原理','ReactHooks模拟生命周期',
  'setState的用法','useEffect、useLayoutEffect和useInsertionEffect','useEffect','useMemo,ReactMemo,useCallBack','useReducer']
  return (
    <div id = "technical-documentation-react">
        <Divider orientation="center">react</Divider>
        <List
              bordered
              dataSource={reactData}
              renderItem={(item,index) => (
                  <List.Item>
                      <Button type="link" style={{margin:"0 auto"}}  onClick={()=>openWindow(item)}>{index}.{item}</Button>
                  </List.Item>
              )}
              style={{ width: "100%"}}
          />
    </div>
  );
};

const TechnicalDocumentationOther: React.FC =  () => {
    const otherData = [
        'http1-http2-http3',
        'import-require',
    ];
    return (
      <div id = "technical-documentation-other">
          <Divider orientation="center">其它</Divider>
          <List
              bordered
              dataSource={otherData}
              renderItem={(item,index) => (
                <List.Item>
                    <Button type="link" style={{margin:"0 auto"}} onClick={()=>openWindow(item)}>{index}.{item}</Button>
                </List.Item>
              )}
              style={{ width: "100%" }}
          />
      </div>
    );
};
const TechnicalDocumentationVue: React.FC = () => {
   const vueData = ['vue的双向绑定原理']
    return (
      <div id = "technical-documentation-vue">
          <Divider orientation="center">vue</Divider>
          <List
              bordered
              dataSource={vueData}
              renderItem={(item,index) => (
                <List.Item>
                    <Button type="link" style={{margin:"0 auto"}} onClick={()=>openWindow(item)}>{index}.{item}</Button>
                </List.Item>
              )}
              style={{ width: "100%" }}
          />
      </div>
    );
};
const TechnicalDocumentationNode: React.FC = () => {
    const NodeData = ['RESTfulAPI']
  
    return (
      <div id = "technical-documentation-node">
          <Divider orientation="center">node</Divider>
          <List
              bordered
              dataSource={NodeData}
              renderItem={(item,index) => (
                <List.Item>
                    <Button type="link" style={{margin:"0 auto"}} onClick={()=>openWindow(item)}>{index}.{item}</Button>
                </List.Item>
              )}
              style={{ width: "100%" }}
          />
      </div>
     
    );
};
const openWindow = (item:string)=>{
  window.open('/blog/' + item)
}
export {
    TechnicalDocumentationReact,
    TechnicalDocumentationVue,
    TechnicalDocumentationNode,
    TechnicalDocumentationOther
};