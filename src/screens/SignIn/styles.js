import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  margin: 50px;
`;

export const TextForm = styled.TouchableOpacity`
  justify-content: flex-start;
  flex-direction: row;
  color: rgba(15, 16, 32, 0.8);
  font-size: 14px;
  padding: 10px;
`;

export const Text = styled.Text`
  margin-left: 5px;
  line-height: 15px;
`;
