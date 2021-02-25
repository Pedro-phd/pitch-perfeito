import React from 'react';

import { CadastrarInput,LoginButton,LoginSection, Wrapper } from './styles';
import {GradientBody} from '../GlobalStyles'
import {LogoCadastrar} from '../../assets/logo'

const Cadastrar: React.FC = () => {
  return (
    <>
    <GradientBody/>
    <Wrapper>
      <LogoCadastrar/>
      <LoginSection>
        <CadastrarInput placeholder="Nome Completo"/>
        <CadastrarInput  placeholder="Telefone"/>
        <CadastrarInput  placeholder="Data de Nascimento"/>
        <CadastrarInput  placeholder="E-Mail"/>
        <CadastrarInput  placeholder="Senha"/>
        <CadastrarInput  placeholder="Confirmar Senha"/>
        <LoginButton>
          CADASTRAR
        </LoginButton>
      </LoginSection>
    </Wrapper>
    
  </>
  );
};

export default Cadastrar;
