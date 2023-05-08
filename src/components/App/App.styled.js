import styled from '@emotion/styled';
import { colors } from '../../Varibles/colors';

export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  width: 480px; 
  background-color: red;
  
`;

export const MainTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.titleColor};
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.titleColor};
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;