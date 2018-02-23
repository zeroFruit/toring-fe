import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentWrapper.scss';

const cx = classNames.bind(styles);

const ContentWrapper = ({ children }) => (
    <div className={ cx('content-wrapper') }>
        { React.Children.only(children) }
    </div>
);

export default ContentWrapper;