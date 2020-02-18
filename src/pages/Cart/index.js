import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  LabelTotal,
  PriceTotal,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  handleDelCart = product => {
    console.tron.log(product);
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <Product>
                <Image source={{ uri: item.image }} />
                <Description>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </Description>
                <View style={{ width: 100 }}>
                  <Icon
                    name="delete-forever"
                    color="#7159c1"
                    size={24}
                    onPress={() => this.handleDelCart(item)}
                  />
                </View>
              </Product>
              <Footer>
                <Amount>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={24}
                  />
                  <AmountText>5</AmountText>
                  <Icon name="add-circle-outline" color="#7159c1" size={24} />
                </Amount>
                <Total>150,00</Total>
              </Footer>
            </Item>
          )}
        />
        <TotalCart>
          <LabelTotal>TOTAL</LabelTotal>
          <PriceTotal>R$ 1500,00</PriceTotal>
        </TotalCart>
        <ButtonFinish>
          <ButtonFinishText>FINALIZAR PEDIDO</ButtonFinishText>
        </ButtonFinish>
      </Container>
    );
  }
}
