import React from 'react';
import { Image } from 'react-native';

import { Container, Text } from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Text>Entrar</Text>
    </Container>
  );
}
