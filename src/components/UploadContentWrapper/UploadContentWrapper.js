import React from 'react';
import classNames from 'classnames/bind';
import styles from './UploadContentWrapper.scss';

const cx = classNames.bind(styles);

const UploadContentWrapper = ({ children }) => (
    <div className={ cx('upload-content-wrapper') }>
        { React.Children.only(children) }
    </div>
);

export default UploadContentWrapper;
