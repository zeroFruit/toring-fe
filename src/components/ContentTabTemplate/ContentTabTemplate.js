import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentTabTemplate.scss';

const cx = classNames.bind(styles);

const ContentTabTemplate = ({ label = '', underline = true }) => (
    <div className={ cx('content-tab') }>
        <h2 className={ underline ? cx('label-underline') : cx('label') }>{ label }</h2>
    </div>
);

export default ContentTabTemplate;
