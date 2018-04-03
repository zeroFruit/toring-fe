import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageCard.scss';

const cx = classNames.bind(styles);

class MessageCard extends PureComponent {
    render() {
        return (
            <div className={cx('message-card')}>
                <h1>작가이름</h1>
                <h2>그림책 제목(가제)</h2>
                <div className={cx('date')}>
                    2018.02.28 05:04 p.m.
                </div>
                <div className={cx('content')}>
                    <p>작업 요청이 도착했습니다.<br/>쪽지를 확인하고 그림책을 완성해보세요.</p>
                </div>
            </div>
        );
    }
}

MessageCard.propTypes = {};

export default MessageCard;
