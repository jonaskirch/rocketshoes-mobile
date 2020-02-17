import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/logo.png';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={ImgLogo} />
      <Icon name="shopping-basket" size={24} color="#FFF" />
    </Container>
  );
}
