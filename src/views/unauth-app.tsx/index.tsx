import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import styled from "@emotion/styled";
import { Card } from "antd";
export const UnauthAppScreen = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <ShadowCard>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <button onClick={() => setIsRegister(!isRegister)}>{`切换到：${
          isRegister ? "登录" : "注册"
        }`}</button>
      </ShadowCard>
    </Container>
  );
};

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding: 3.2rem;
  border-radius: 0%.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  box-sizing: border-box;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
