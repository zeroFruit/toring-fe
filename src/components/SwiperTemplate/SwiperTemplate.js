import React from 'react';
import classNames from 'classnames/bind';
import styles from './SwiperTemplate.scss';

const cx = classNames.bind(styles);

const SwiperTemplate = props => (
    <div className={ cx('swiper') }>
        { React.Children.only(props.children) }
    </div>
);

export default SwiperTemplate;
