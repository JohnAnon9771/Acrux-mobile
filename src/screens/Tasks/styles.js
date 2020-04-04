import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  background: #fff;
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 60};
  align-items: center;
`;

export const Card = styled(BaseButton)`
  flex-direction: row;
  align-items: center;
  max-width: 310px;
  margin-bottom: 15px;
  padding: 8px 15px;
  elevation: 2;
  background: #fff;
  border: none;
  border-radius: 4px;
`;

export const Importance = styled.View`
  background: #0f1020;
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50px;
  margin-right: 7px;
`;

export const Matter = styled.View``;

export const Title = styled.Text``;

export const Content = styled.Text`
  font-size: 10px;
  font-style: italic;
  opacity: 0.5;
`;

export const Date = styled.Text`
  opacity: 0.5;
  font-size: 12px;
  margin-left: 90px;
`;
