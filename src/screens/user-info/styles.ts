import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const ContentScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-primary'].main}
  justify-content: center;
`;

export const FieldBox = Styled.View`
  bottom: 72px;
`;
