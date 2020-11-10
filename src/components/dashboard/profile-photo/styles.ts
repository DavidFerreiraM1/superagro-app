import {TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {DefaultColors} from '../../../design-tokens';

export const ProfileBackground = Styled(TouchableOpacity)`
  height: 56px;
  width: 56px;
  top: 8px;
  border-width: 2px;
  border-color: ${DefaultColors['brand-secondary'].main};
  border-radius: 36px;
  margin-horizontal: 16px;
  background: #FFFFFF;
  elevation: 4;
`;
