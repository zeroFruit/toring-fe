import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthorProfileCard.scss';
import { RoundCardTemplate } from '../../components';

const cx = classNames.bind(styles);

class AuthorProfileCard extends PureComponent {
    render() {
        return (
            <div className={ cx('author-profile-card') }>
                <div className={ cx('wrapper') }>
                    <div className={ cx('thumb') }>
                        <RoundCardTemplate { ...this.props } />
                    </div>
                    <div className={ cx('profile') }>
                        <h3>작가 이름</h3>
                        <p>
                            작가 프로필을 적어주세요작가 프로필을 적어주세요
                            작가 프로필을 적어주세요작가 프로필을 적어주세요
                            작가 프로필을 적어주세요
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorProfileCard;