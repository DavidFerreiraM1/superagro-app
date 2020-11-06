import React from 'react';
import {
  HeaderContent,
  HeaderRoot,
  LeftElement,
  ProfileBackground,
  ProfileNameBox,
  RightElement,
} from './styles';

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContent>
        <LeftElement />
        <RightElement>
          <ProfileBackground />
          <ProfileNameBox />
        </RightElement>
      </HeaderContent>
    </HeaderRoot>
  );
}
