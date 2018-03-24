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
                    <div>
                        <div>

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

