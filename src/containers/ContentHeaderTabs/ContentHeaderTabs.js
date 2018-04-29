import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentHeaderTabs.scss';
import { ContentHeaderTemplate, ContentTabTemplate } from '../../components';

const cx = classNames.bind(styles);

const ContentHeaderTabs = ({ tabProps }) => (
    <ContentHeaderTemplate
        className={ cx('content-header-tabs ') }
        Tab={ ContentTabTemplate }
        tabProps={ tabProps }
    />
);

export default ContentHeaderTabs;
