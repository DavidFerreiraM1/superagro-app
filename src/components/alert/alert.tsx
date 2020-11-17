import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StatusBar} from 'react-native';
import {AlertBackground} from './styles';

function _Alert(props: any, ref: any) {
  const [render, setRender] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setTimeout(() => setRender(true), 200),
    close: () => setTimeout(() => setRender(false), 600),
  }));

  const renderComponent = () => {
    return render ? (
      <AlertBackground onTouchStart={() => setRender(false)}>
        <StatusBar backgroundColor="#000000" />
        {props.children}
      </AlertBackground>
    ) : null;
  };

  return renderComponent();
}

export const Alert = forwardRef(_Alert);
