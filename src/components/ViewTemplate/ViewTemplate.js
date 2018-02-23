import React from 'react';
import styles from './ViewTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewTemplate = ({ children, header }) => (
  <div className={ cx('viewer-template') }>
    <header>
        { React.Children.only(header)}
    </header>
    <div className={ cx('viewer-template__wrapper')}>
        { React.Children.only(children) }
    </div>
  </div>
);

export default ViewTemplate;
