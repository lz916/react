import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";

export const LoginScreen = () => {
  const { login, user } = useAuth();
  interface Param {
    username: string;
    password: string;
  }

  // const login = (param: Param) => {};
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>{`登录的用户名是：${user?.name}`}</div>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="密码"></label>
        <input type="password" id={"password"} />
      </div>
      <button>登录</button>
    </form>
  );
};
