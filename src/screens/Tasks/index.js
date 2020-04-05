import React from 'react';

import Card from '../../components/Card';
import { Container, List } from './styles';

export default function Tasks() {
  const array = [
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
    {
      title: 'Matemática',
      content: 'Funções quadráticas',
      date: '12/03 até 17/03',
      anotations:
        'Em Matemática, uma função quadrática, um polinômio quadrático, um polinômio de grau 2 ou um polinômio de segundo grau, é uma função polinomial de segundo grau.',
    },
  ];
  return (
    <List>
      {array.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </List>
  );
}
