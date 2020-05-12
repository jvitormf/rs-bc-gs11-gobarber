import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input
          name="name"
          icon={FiUser}
          type="text"
          placeholder="Nome completo"
        />
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button name="submit" type="submit">
          Entrar
        </Button>
      </form>

      <a href="SignUp">
        <FiLogIn />
        Já tenho uma conta
      </a>
    </Content>
  </Container>
);

export default SignUp;
