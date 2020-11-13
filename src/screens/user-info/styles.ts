import Styled from 'styled-components/native';
import {DefaultColors} from '../../styles-utils';

export const ContentScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-primary'].main}
  justify-content: center;
`;

export const FieldBox = Styled.View`
  bottom: 72px;
`;

export const BottomControlContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonSideBox = Styled.View`
  width: 50%;
  align-items: center;
  padding-horizontal: 8px;
`;
