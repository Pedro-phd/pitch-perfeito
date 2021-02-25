import React from 'react';

import { LoginInput,LoginButton,LoginSection, Wrapper } from './styles';
import {GradientBody} from '../GlobalStyles'
import {LogoLogin} from '../../assets/logo'
const Login: React.FC = () => {
  return (
    <>
      <GradientBody/>
      <Wrapper>
        <LogoLogin/>
        <LoginSection>
          <LoginInput placeholder="E-Mail"/>
          <LoginInput placeholder="Senha"/>
          <LoginButton>
            ENTRAR
          </LoginButton>
        </LoginSection>
      </Wrapper>
      
    </>
  );
};

export default Login;
