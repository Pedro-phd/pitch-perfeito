import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  svg {
    margin-left: auto;
  }
`;
export const LoginSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 47px 0 62px;
`;
export const LoginButton = styled.button`
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  height: 38px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &:last-child {
    margin-left: 2px;
  }
`;
