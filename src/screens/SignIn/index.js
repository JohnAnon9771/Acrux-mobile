import React, { useRef } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from '@expo/vector-icons/FontAwesome';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, SignLink, SignLinkText, Text } from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const navigation = useNavigation();
  const formRef = useRef(null);

  function focusPasswordInput() {
    const inputRef = formRef.current.getFieldRef('password');
    inputRef.focus();
  }

  function handleSubmit(data) {}

  return (
    <Container>
      <Content>
        <Image source={logo} />
        <Text>Entrar</Text>
        <Form ref={formRef}>
          <Input
            name="email"
            keybardType="email-address"
            placeholder="Digite seu email *"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => focusPasswordInput()}
          />
          <Input
            name="password"
            placeholder="Digite sua senha *"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit()}
          />
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <Icon name="share" size={16} color="#0F1020" />
            <SignLinkText>Não tenho conta ainda.</SignLinkText>
          </SignLink>
        </Form>
        <Button onPress={() => handleSubmit()}>Acessar</Button>
      </Content>
    </Container>
  );
}
