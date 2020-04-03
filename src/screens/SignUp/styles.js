import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 24};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SecurityPassword = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  right: 50px;
  flex-direction: row;
  color: rgba(15, 16, 32, 0.8);
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SignLinkText = styled.Text`
  margin-left: 5px;
  line-height: 17px;
`;

export const Text = styled.Text`
  color: rgba(15, 16, 32, 0.8);
  font-size: 30px;
  margin: 50px;
`;

export const PasswordInput = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
