import React, { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as PlusSvg } from '../../images/icons/plus_20.svg';
import rawStyles from './index.module.scss';
import useComponentVisible from '../../customHooks/useComponentVisible';

const cn = classnames.bind(rawStyles);

const AddCollection = function ({}) {
  const [itemRef, isCreatingNew, setIsCreatingNew] = useComponentVisible(false);
  const titleRef = useRef(null);

  const handleAddClick = () => {

  };

  return (
    <div ref={itemRef} className={cn('container', 'add_new', { active: isCreatingNew })} onClick={handleAddClick}>
      {!isCreatingNew && (
      <div className={cn('add_new')}>
        <PlusSvg />
      </div>
      )}
      {isCreatingNew && (
      <div ref={titleRef} className={cn('text', 'editable')} contentEditable={isCreatingNew} />
      )}
    </div>
  );
};

export default AddCollection;
