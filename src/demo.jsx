import React from 'react';
import { Button, Form, Input } from 'antd';

const Demo = () => {
  return (
    <>
      <Form>
        <Form.Item name="xxx" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary">123</Button>
      </Form>
    </>
  );
};
export default Demo;
