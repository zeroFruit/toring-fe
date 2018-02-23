import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileTabs.scss';
import { ContentHeaderTemplate, ProfileTabTemplate } from '../../components';

const cx = classNames.bind(styles);

const ProfileTabs = ({ tabProps }) => (
    <ContentHeaderTemplate
        className={ cx('profile-tabs') }
        Tab={ ProfileTabTemplate }
        tabProps={ tabProps }
    />
);

export default ProfileTabs;