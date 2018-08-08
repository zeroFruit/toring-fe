import React from 'react'
import classNames from 'classnames/bind';
import styles from './RoundCardTemplate.scss';

const cx = classNames.bind(styles);

const RoundCardTemplate = ({ className = '', img = null }) => (
    <div className={ cx('round-card', className) }>
        <img src={ img } alt={"round card template"} />
    </div>
);

export default RoundCardTemplate;