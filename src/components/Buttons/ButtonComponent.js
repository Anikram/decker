import React from 'react';
import classnames from 'classnames/bind';
import rawStyles from './index.module.css';

const cn = classnames.bind(rawStyles);

const ButtonComponent = function ({ text, ...props }) {
  return (
    <div
      style={{
        ...(props.height ? { height: props.height } : {}),
        ...(props.borderColor ? { borderColor: props.borderColor } : {}),
      }}
      className={cn('button_container')}
      onClick={props.clickCb}
    >
      <div className={cn('icon_container')}>
        {props.children}
      </div>
      <div className={cn('button_text')}>
        {text}
      </div>
    </div>
  );
};

export default ButtonComponent;
