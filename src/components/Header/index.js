import React from 'react';
import classnames from 'classnames/bind';
import rawStyles from './index.module.scss';
import ButtonComponent from '../Buttons/ButtonComponent';

const cn = classnames.bind(rawStyles);

const Header = function ({}) {
  const buttonClickHandler = () => {

  };
  return (
    <div className={cn('wrapper')}>
      <div className={cn('stat_drop_down')}>
        <div className={cn('handle')}>...</div>
      </div>
      <div className={cn('avatar_container')}>
        ava
      </div>
      <div className={cn('actions')}>
        <ButtonComponent text="Add card" clickCb={buttonClickHandler} />
      </div>
    </div>
  );
};

export default Header;
