import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from '@expo/vector-icons/FontAwesome';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Image, TextForm, Text } from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input name="name" placeholder="Nome *" autoCorrect={false} />
        <Input name="password" placeholder="Senha *" secureTextEntry />
        <TextForm onPress={() => navigation.navigate('SignUp')}>
          <Icon name="share" size={16} color="#0F1020" />
          <Text>Não tenho conta ainda.</Text>
        </TextForm>
      </Form>
      <Button>Acessar</Button>
    </Container>
  );
}
