import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentTabTemplate.scss';

const cx = classNames.bind(styles);

const ContentTabTemplate = ({ label = '' }) => (
    <div className={ cx('content-tab') }>
        <h2 className={ cx('label') }>{ label }</h2>
    </div>
);

export default ContentTabTemplate;