import React from 'react';
import classNames from 'classnames/bind';
import styles from './JumboProfile.scss';
import { ProfileTemplate, JumboTemplate } from '../../components';

const cx = classNames.bind(styles);

const JumboProfile = props => (
    <JumboTemplate>
        <ProfileTemplate className={ cx('jumbo-profile') }/>
    </JumboTemplate>
);

export default JumboProfile;