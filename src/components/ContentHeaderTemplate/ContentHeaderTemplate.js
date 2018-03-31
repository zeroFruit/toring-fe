import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentHeaderTemplate.scss';

const cx = classNames.bind(styles);

const ContentHeaderTemplate = ({Tab, tabProps, className = '', onClick = () => {}}) => (
  <div className={ cx('content-header'), className }>
    {
      tabProps.map((prop, idx) => <Tab key={idx} onClick={onClick} { ...prop} />)
    }
  </div>
);

export default ContentHeaderTemplate;
