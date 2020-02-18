import styled from 'styled-components/native';

export const Container = styled.View`
  background: #000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const TotalItems = styled.View`
  position: absolute;
  background: #7159c1;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-left: 15px;
  margin-top: 0px;
`;

export const TotalText = styled.Text`
  color: #fff;
  margin: auto;
`;
