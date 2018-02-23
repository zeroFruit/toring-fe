import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileTemplate.scss';
import { RoundCardTemplate } from '../index';

const cx = classNames.bind(styles);

const ProfileTemplate = ({ className }) => (
    <div className={ cx('profile', className) }>
        <section>
            <RoundCardTemplate
                img={ require('./images/image-template.png') }
                className={ cx('profile-image') }
            />
        </section>
        <section>
            <h2>작가 이름</h2>
        </section>
        <section>
            <p>
                작가 프로필을 적어주세요작가 프로필을 적어주세요
                작가 프로필을 적어주세요작가 프로필을 적어주세요
                작가 프로필을 적어주세요
            </p>
        </section>
    </div>
);

export default ProfileTemplate;