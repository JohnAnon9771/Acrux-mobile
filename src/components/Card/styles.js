import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Card = styled(Animated.View)`
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

export const Matter = styled.View`
  padding-right: 85px;
`;

export const Title = styled.Text``;

export const Content = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 10px;
  font-style: italic;
  opacity: 0.5;
`;

export const Date = styled.Text`
  opacity: 0.5;
  font-size: 12px;
  padding-right: 5px;
`;
