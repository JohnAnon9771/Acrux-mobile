import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  Importance,
  Content,
  Card,
  Matter,
  Date,
} from './styles';

export default function Tasks() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {array.map((item) => (
          <Card>
            <Importance />
            <Matter>
              <Title>Matemática</Title>
              <Content>Funções</Content>
            </Matter>
            <Date>12/03 até 17/03</Date>
          </Card>
        ))}
      </Container>
    </ScrollView>
  );
}
