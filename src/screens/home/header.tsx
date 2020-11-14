import React from 'react';
import {connect} from 'react-redux';
import FarmIcon from '../../assets/images/farm-white.png';
import {ProfilePhoto} from '../../components/dashboard';
import {AppState} from '../../redux';
import {UserLoggedState} from '../../redux/ducks/user/types';

import {SearchFilter} from './search-filter';
import {
  FarmImage,
  HeaderContent,
  HeaderRoot,
  IconFarmBox,
  IconFormBoxText,
  HeaderLeftElement,
  ProfileName,
  HeaderRightElement,
} from './styles';

interface OwnProps {
  openDrawer: () => void;
}

interface StateProps {
  farmUserData: UserLoggedState;
}

type Props = OwnProps & StateProps;

function _Header(props: Props) {
  return (
    <HeaderRoot>
      <HeaderContent>
        <HeaderLeftElement>
          <IconFarmBox>
            <FarmImage source={FarmIcon} />
          </IconFarmBox>
          <IconFormBoxText>{props.farmUserData.farmName}</IconFormBoxText>
        </HeaderLeftElement>
        <HeaderRightElement>
          <ProfilePhoto onPress={props.openDrawer} />
          <ProfileName>{props.farmUserData.username}</ProfileName>
        </HeaderRightElement>
      </HeaderContent>
      <SearchFilter />
    </HeaderRoot>
  );
}

const mapStateToProps = (state: AppState) => ({
  farmUserData: state.userlogged,
});

export const Header = connect(mapStateToProps)(_Header);
