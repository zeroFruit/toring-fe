import React, { PureComponent } from 'react'
import classNames from 'classnames/bind';
import styles from './Message.scss';
import {
    CardList,
    MessageCard,
    MessageDetail
} from '../../containers';

const cx = classNames.bind(styles);

const messageProps = [
    {},
    {},
    {}
];

export default class Message extends PureComponent {

    render() {
        return (
            <div className={cx('message-page')}>
                <header>
                    <div className={cx('filter-table')}>
                        <div className={cx('filter')}>
                            날짜순
                        </div>
                        <div className={cx('filter')}>
                            안 읽은 쪽지
                        </div>
                    </div>
                </header>
                <hr className={cx('divider')} />
                <div className={cx('container')}>
                    <div className={cx('message-list-container')}>
                        <CardList
                            Card={MessageCard}
                            cardProps={messageProps}
                        />
                    </div>
                    <div className={cx('message-detail-container')}>
                        <MessageDetail
                            profileImg={require('./images/profile_img.png')}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
