import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";
import { Form, Button, Input } from "antd";

export const RegisterScreen = () => {
  const { register, user } = useAuth();
  interface Param {
    username: string;
    password: string;
  }

  // const login = (param: Param) => {};
  const handleSubmit = (values: { username: string; password: string }) => {
    // event.preventDefault();

    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <div>{`登录的用户名是：${user?.name}`}</div>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "用户名不能为空" }]}
      >
        <div>
          <label htmlFor="username">用户名</label>
          <Input type="text" id={"username"} />
        </div>
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "密码不能为空" }]}
      >
        <div>
          <label htmlFor="密码"></label>
          <Input type="password" id={"password"} />
        </div>
      </Form.Item>
      <Button type={"primary"} htmlType={"submit"}>
        注册
      </Button>
    </Form>
  );
};
