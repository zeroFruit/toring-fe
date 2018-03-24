import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageDetail.scss';
import {
    RoundCardTemplate
} from '../../components';

const cx = classNames.bind(styles);

class MessageDetail extends PureComponent {
    render() {
        const {
            profileImg
        } = this.props;
        return (
            <div className={cx('message-detail')}>
                <header>
                    <div className={cx('profile')}>
                        <RoundCardTemplate
                            img={profileImg}
                            className={cx('profile-img')}
                        />
                        <h1>작가 이름</h1>
                    </div>
                    <div className={cx('works')}>
                        <MessageDetailCount />
                    </div>
                </header>
                <div className={cx('container')}>
                    <div className={cx('title')}>
                        ‘작가 이름’님이 ‘그림책 이름’에 대해
                        작업을 요청했어요
                    </div>
                    <div className={cx('message')}>

                    </div>
                    <div className={cx('checkbox')}>

                    </div>
                    <div className={cx('checkbox')}>

                    </div>
                </div>
            </div>
        );
    }
}

const MessageDetailCount = () => (
    <div className={cx('message-detail-count')}>
        <div className={cx('count')}>
            <div className={cx('label')}>
                완성된 작품수
            </div>
            <div className={cx('digit')}>
                2
            </div>
    </div>
        <div className={cx('count')}>
            <div className={cx('label')}>
                함께한 작품수
            </div>
            <div className={cx('digit')}>
                0
            </div>
        </div>
    </div>
);

MessageDetail.propTypes = {};

export default MessageDetail;
