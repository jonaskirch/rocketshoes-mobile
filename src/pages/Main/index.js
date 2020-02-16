import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Container } from './styles';

export default function Main({ navigation }) {
  return (
    <Container>
      {console.tron.log('page main teste')}
      <Text>Main</Text>
      <RectButton
        style={{
          backgroundColor: '#fff',
          height: 30,
          border: 2,
          borderColor: '#000',
        }}
        onPress={() => navigation.navigate('Cart', { teste: 1 })}
      >
        <Text>Cart</Text>
      </RectButton>
    </Container>
  );
}
