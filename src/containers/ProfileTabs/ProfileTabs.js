import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileTabs.scss';
import { ContentHeaderTemplate, SemiProfileTabTemplate } from '../../components';

const cx = classNames.bind(styles);

const ProfileTabs = ({ Tab, tabProps, onClick = () => {} }) => (
    <ContentHeaderTemplate
        className={ cx('profile-tabs') }
        Tab={ Tab }
        tabProps={ tabProps }
        onClick= { onClick }
    />
);

export default ProfileTabs;
