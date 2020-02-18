import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const resp = await api.get('/products');
    const products = resp.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
      // priceFormated: `R$ ${product.price.toFixed(2).replace('.', ',')}`,
    }));

    this.setState({
      products,
    });
  }

  handleAddCart = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { amount } = this.props;
    const { products } = this.state;
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
              <Button onPress={() => this.handleAddCart(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
