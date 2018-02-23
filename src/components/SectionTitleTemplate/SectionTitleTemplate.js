import React from 'react';
import classNames from 'classnames/bind';
import styles from './SectionTitleTemplate.scss';

const cx = classNames.bind(styles);

const SectionTitleTemplate = ({ title = '', className = '' }) => (
    <h2 className={ cx('section-title', className) }>
        { title }
    </h2>
);

export default SectionTitleTemplate;