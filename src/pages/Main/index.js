import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import {
  Container,
  // List,
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

export default class Main extends Component {
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

  handleAddCart = product => {
    const { navigation } = this.props;
    navigation.navigate('Cart', product);
  };

  render() {
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
              <Button onPress={() => this.handleAddCart(item)}>
                <ButtonIcon>
                  <Icon name="add-shopping-cart" color="#fff" size={24} />
                  <IconText>1</IconText>
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
