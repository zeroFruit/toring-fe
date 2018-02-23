import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.scss';

const cx = classNames.bind(styles);

const Column = ({ children }) => (
    <div className={ cx('col', 'col--2') }>
        { React.Children.only(children) }
    </div>
);

export default Column;