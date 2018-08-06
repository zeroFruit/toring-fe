import React from 'react';
import styles from './TermsTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const TermsTemplate = ({title = '', content=''}) => (
  <div className={ cx('terms')}>
    <h3>{title}</h3>
    <textarea disabled>{content}</textarea>
  </div>
);

export default TermsTemplate;
