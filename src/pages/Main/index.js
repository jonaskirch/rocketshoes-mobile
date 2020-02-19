import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  Image,
  Title,
  Price,
  Button,
  ButtonIcon,
  IconText,
  ButtonText,
} from './styles';
import api from '../../services/api';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const resp = await api.get('/products');
      const data = resp.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
        // priceFormated: `R$ ${product.price.toFixed(2).replace('.', ',')}`,
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormated}</Price>
            <Button onPress={() => handleAddCart(item.id)}>
              <ButtonIcon>
                <Icon name="add-shopping-cart" color="#fff" size={24} />
                <IconText>{amount[item.id] || '0'}</IconText>
              </ButtonIcon>
              <ButtonText>ADICIONAR</ButtonText>
            </Button>
          </Product>
        )}
      />
    </Container>
  );
}
