import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/logo.png';

import { Container, Logo, Cart, Total, TotalText } from './styles';

export default function Header({ navigation }) {
  function handleNavigateCart() {
    navigation.navigate('Cart', null);
  }

  return (
    <Container>
      <Logo source={ImgLogo} />
      <Cart onPress={handleNavigateCart}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <Total>
          <TotalText>1</TotalText>
        </Total>
      </Cart>
    </Container>
  );
}
