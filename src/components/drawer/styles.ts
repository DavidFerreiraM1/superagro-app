import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const DrawerRoot = Styled.View`
  background-color: ${DefaultColors['brand-primary'].main};
  flex: 1;
  elevation: 8;
`;
