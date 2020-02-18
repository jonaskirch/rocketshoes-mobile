import React from 'react';
import { connect } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImgLogo from '../../assets/logo.png';

import { Container, Logo, Total, TotalText } from './styles';

function Header({ navigation, amount }) {
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

const mapStateToProps = state => ({
  amount: state.cart.length,
});

export default connect(mapStateToProps)(Header);
