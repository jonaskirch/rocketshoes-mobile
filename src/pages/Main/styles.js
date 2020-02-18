import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  padding: 20px;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  height: 400px;
  width: 250px;
  padding: 10px;
  margin-right: 20px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #666;
  font-size: 18px;
  line-height: 25px;
`;

export const Price = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
`;

export const ButtonIcon = styled.View`
  flex-direction: row;
  height: 100%;
  width: 70px;
  background: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const IconText = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  color: #fff;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: auto;
`;
