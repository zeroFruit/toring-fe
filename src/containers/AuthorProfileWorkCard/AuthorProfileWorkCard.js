import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthorProfileWorkCard.scss';
import { RoundCardTemplate } from '../../components';

const cx = classNames.bind(styles);

const AuthorProfileWorkCard = ({ id = -1, img = null, label1 = '', count1 = 0, label2= '', count2 = 0 }) => (
    <div className={ cx('author-profile-work-card') }>
        <div className={ cx('wrapper-left') }>
            <div className={ cx('thumb') }>
                <RoundCardTemplate img= { img } />
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

        <div className={ cx('wrapper-right') }>
          <div className={ cx('works-ongoing')}>
            <h2>{ count1 }</h2>
            <p>
              { label1 }
            </p>
          </div>
          <div className={ cx('works-complete')}>
            <h2>{ count2 }</h2>
            <p>
              { label2 }
            </p>
          </div>
        </div>
    </div>
);

export default AuthorProfileWorkCard;
