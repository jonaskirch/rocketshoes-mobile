import React from 'react';
import { useSelector } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/logo.png';

import { Container, Logo, Total, TotalText } from './styles';

export default function Header({ navigation }) {
  const amount = useSelector(state => state.cart.length);

  function handleNavigateCart() {
    navigation.navigate('Cart', null);
  }

  function handleNavigateMain() {
    navigation.navigate('Main', null);
  }

  return (
    <Container>
      <RectButton onPress={handleNavigateMain}>
        <Logo source={ImgLogo} />
      </RectButton>
      <RectButton onPress={handleNavigateCart}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <Total>
          <TotalText>{amount}</TotalText>
        </Total>
      </RectButton>
    </Container>
  );
}
