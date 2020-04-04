import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from '@expo/vector-icons/FontAwesome';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  SignLink,
  SignLinkText,
  Text,
  SecurityPassword,
  PasswordInput,
} from './styles';

import logo from '../../assets/logo.png';

export default function SignUp() {
  const [securityPassword, setSecurityPassword] = useState(true);
  const navigation = useNavigation();
  const formRef = useRef(null);

  function focusPasswordInput() {
    const PasswordRef = formRef.current.getFieldRef('password');
    PasswordRef.focus();
  }

  function focusEmailInput() {
    const emailRef = formRef.current.getFieldRef('email');
    emailRef.focus();
  }

  function showPasswordSecurity() {
    if (!securityPassword) {
      setSecurityPassword(true);
    } else {
      setSecurityPassword(false);
    }
  }

  function handleSubmit(data) {}

  return (
    <Container>
      <Content>
        <Image source={logo} />
        <Text>Cadastrar</Text>
        <Form ref={formRef}>
          <Input
            name="name"
            placeholder="Nome completo *"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => focusEmailInput()}
          />
          <Input
            name="email"
            keybardType="email-address"
            placeholder="Email *"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => focusPasswordInput()}
          />
          <PasswordInput>
            <Input
              name="password"
              placeholder="Senha *"
              secureTextEntry={securityPassword}
              returnKeyType="send"
              onSubmitEditing={() => handleSubmit()}
            />
            <SecurityPassword onPress={() => showPasswordSecurity()}>
              <Icon
                name={securityPassword ? 'eye-slash' : 'eye'}
                size={16}
                color="#0F1020"
              />
            </SecurityPassword>
          </PasswordInput>
          <SignLink onPress={() => navigation.navigate('Home')}>
            <Icon name="sign-in" size={16} color="#0F1020" />
            <SignLinkText>Já tenho uma conta.</SignLinkText>
          </SignLink>
        </Form>
        <Button onPress={() => handleSubmit()}>Cadastrar-se</Button>
      </Content>
    </Container>
  );
}
