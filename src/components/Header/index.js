import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/logo.png';

import { Container, Logo, TotalItems, TotalText } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={ImgLogo} />
      <View>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <TotalItems>
          <TotalText>1</TotalText>
        </TotalItems>
      </View>
    </Container>
  );
}
