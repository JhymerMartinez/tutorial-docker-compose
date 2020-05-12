import React from 'react';
import { Form, Input, Button } from 'antd';

const TodoForm = ({ onFinish, loading }) => {

  const [form] = Form.useForm();

  const layout = {
    wrapperCol: {
      span: 8,
    },
  };

  return <Form
    {...layout}
    name="basic"
    form={form}
    onFinish={(values) => onFinish(values, form)}
  >
    <Form.Item name="text"
      rules={[{ required: true }]}>
      <Input allowClear={true}/>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Add
    </Button>
    </Form.Item>
  </Form>
}

export default TodoForm;
