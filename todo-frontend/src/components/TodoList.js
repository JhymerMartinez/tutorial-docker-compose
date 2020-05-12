import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';

import { List, Button } from 'antd';

const TodoList = ({todos, onSelectClose}) => {

  return <List itemLayout="horizontal"
    dataSource={todos}
    style={{width: '50%'}}
    renderItem={item => (
      <List.Item key={item.id}>
        <List.Item.Meta title={
          <div>
            <span>{item.text}</span>
            <Button type="primary"
              icon={<CloseCircleOutlined />}
              onClick={() => onSelectClose(item)}
              style={{position: 'absolute', right: 0}}
            >
            </Button>
          </div>
        }/>
      </List.Item>
    )}
  />;
}

export default TodoList;
