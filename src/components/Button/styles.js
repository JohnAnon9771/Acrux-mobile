import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  background: #0f1020;
  height: 38px;
  width: 125px;
  margin: 30px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  line-height: 17px;
  font-size: 16px;
`;
