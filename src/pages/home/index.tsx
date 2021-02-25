import React from 'react';
import Link from 'next/link'

import { Wrapper,LoginButton,LoginSection } from './styles';
import {GradientBody} from '../GlobalStyles'

import {LogoHome} from '../../assets/logo'

const Home: React.FC = () => {
  return (
    <>
      <GradientBody/>
      <Wrapper>
        <LogoHome/>
        <LoginSection>
          <Link href="/login">
            <LoginButton>ENTRAR</LoginButton>
          </Link>
          <Link href="/cadastrar">
            <LoginButton>CADASTRAR</LoginButton>
          </Link>
        </LoginSection>
      </Wrapper>

    </>
  );
};

export default Home;
