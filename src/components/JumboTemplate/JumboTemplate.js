import React from 'react';
import classNames from 'classnames/bind';
import styles from './JumboTemplate.scss';

const cx = classNames.bind(styles);

const JumboTemplate = props => (
    <div className={ cx('jumbo') }>
        { React.Children.only(props.children) }
    </div>
);

export default JumboTemplate