import React from 'react';
import classnames from 'classnames/bind';
import ButtonComponent from '../Buttons/ButtonComponent';
import rawStyles from './index.module.scss';
import Collection from '../Collection/CollectionComponent';
import AddCollection from '../Collection/AddCollection';

const cn = classnames.bind(rawStyles);

const Dashboard = function () {
  return (
    <div>
      <ButtonComponent text="Button" />

      <Collection />
      <Collection />
      <Collection />
      <AddCollection />
    </div>
  );
};

export default Dashboard;
