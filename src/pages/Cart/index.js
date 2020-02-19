import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Item,
  Product,
  Image,
  Description,
  Title,
  Price,
  Footer,
  Amount,
  AmountText,
  Total,
  TotalCart,
  Label,
  PriceTotal,
  ButtonFinish,
  ButtonFinishText,
  EmptyContainer,
} from './styles';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (sumTotal, product) => (sumTotal += product.price * product.amount),
        0
      )
    )
  );
  const dispatch = useDispatch();

  function handleDelCart(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleUpdateAmount(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount));
  }

  if (cart.length === 0) {
    return (
      <EmptyContainer>
        <Icon name="remove-shopping-cart" color="#ccc" size={128} />
        <Label>Nenhum item no carrinho</Label>
      </EmptyContainer>
    );
  }

  return (
    <Container>
      <List
        data={cart}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Item>
            <Product>
              <Image source={{ uri: item.image }} />
              <Description>
                <Title>{item.title}</Title>
                <Price>{formatPrice(item.price)}</Price>
              </Description>
              <View style={{ marginRight: 5 }}>
                <Icon
                  name="delete-forever"
                  color="#7159c1"
                  size={24}
                  onPress={() => handleDelCart(item.id)}
                />
              </View>
            </Product>
            <Footer>
              <Amount>
                <Icon
                  name="remove-circle-outline"
                  color="#7159c1"
                  size={24}
                  onPress={() => handleUpdateAmount(item.id, item.amount - 1)}
                />
                <AmountText>{item.amount}</AmountText>
                <Icon
                  name="add-circle-outline"
                  color="#7159c1"
                  size={24}
                  onPress={() => handleUpdateAmount(item.id, item.amount + 1)}
                />
              </Amount>
              <Total>{formatPrice(item.price * item.amount)}</Total>
            </Footer>
          </Item>
        )}
      />
      <TotalCart>
        <Label>TOTAL</Label>
        <PriceTotal>{total}</PriceTotal>
      </TotalCart>
      <ButtonFinish>
        <ButtonFinishText>FINALIZAR PEDIDO</ButtonFinishText>
      </ButtonFinish>
    </Container>
  );
}
