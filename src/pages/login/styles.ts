import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  svg {
    margin-top: 42px;
    margin-left: 8px;
  }
`;

export const LoginInput = styled.input`
  max-width: 278px;
  width: 100%;
  height: 38px;
  background-color: white;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 9px;
  padding-left: 10px;
  font-weight: 700;
  &::placeholder {
    background: -webkit-linear-gradient(
      45deg,
      rgba(255, 148, 114, 1) 0%,
      rgba(242, 112, 156, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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

export const LoginSection = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 95px;
  flex-direction: column;
  margin: 0 auto 75px;
  justify-content: center;
  align-items: center;
`;
