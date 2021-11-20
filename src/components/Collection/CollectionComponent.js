import React from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as PlaySvg } from '../../images/icons/video_play_48-48.svg';
import { ReactComponent as EditSvg } from '../../images/icons/edit_16-16.svg';
import rawStyles from './index.module.scss';

const cn = classnames.bind(rawStyles);

const Collection = function ({ title = 'Sample title' }) {
  return (
    <div className={cn('container')}>
      <div className={cn('text')}>
        {title}
      </div>
      <div className={cn('actions')}>
        <div className={cn('edit_icon')}>
          <EditSvg />
        </div>
        <div className={cn('play_icon')}>
          <PlaySvg />
        </div>
      </div>
    </div>
  );
};

export default Collection;
