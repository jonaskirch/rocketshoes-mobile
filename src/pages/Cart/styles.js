import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px;
  padding: 15px;
`;

export const EmptyContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  height: 70%;
`;

export const Item = styled.View``;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Description = styled.View`
  justify-content: space-between;
  flex: 1;
  margin: 0 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #ccc;
  padding: 10px;
  border-radius: 4px;
`;

export const Amount = styled.View`
  flex-direction: row;
`;

export const AmountText = styled.Text`
  color: #666;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  margin: 0 5px;
  width: 50px;
  padding: 2px 0 0 5px;
`;

export const Total = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalCart = styled.View`
  justify-content: center;
  align-items: center;
  height: 20%;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #666;
`;

export const PriceTotal = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonFinish = styled(RectButton)`
  height: 10%;
  background: #7159c1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonFinishText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
