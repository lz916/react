import React, { FormEvent } from "react";

export const LoginScreen = () => {
  interface Param {
    username: string;
    password: string;
  }
  const apiUrl = process.env.REACT_APP_API_URL;
  const login = (param: Param) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
        // setList(await response.json());
      }
    });
  };
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
