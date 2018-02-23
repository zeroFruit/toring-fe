import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileTabTemplate.scss';

const cx = classNames.bind(styles);

const ProfileTabTemplate = ({ label = '', count = 0 }) => (
  <div className={ cx('profile-tab') }>
      <h2 className={ cx('label') }>{ label }</h2>
      <h2 className={ cx('count') }>{ count }</h2>
  </div>
);

export default ProfileTabTemplate;