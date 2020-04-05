import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';

export const List = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 60,
    minHeight: 500,
  },
})`
  background: #fff;
`;
