import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileTabTemplate.scss';

const cx = classNames.bind(styles);

const ProfileTabTemplate = ({ label = '', count = 0, id = -1, onClick= ()=> {} }) => (
  <div className={ cx('profile-tab')} onClick={()=>onClick(id) }>
      <h2> { label } </h2>
      <p> { count } </p>
  </div>
);

export default ProfileTabTemplate;
