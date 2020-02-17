import styled from 'styled-components/native';

export const Container = styled.View`
  background: #000;
  flex-direction: row;
  justify-content: space-between;
  /* height: 50px; */
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
