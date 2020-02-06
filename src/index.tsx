import React from 'react';
import { Form, Input } from 'antd';

const DInput = (props: any) => {
  return <Input {...props} />;
};

const DForm = () => {
  return <Form />;
};

export { DForm, DInput };
