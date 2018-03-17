import React, { PureComponent } from 'react'
import classNames from 'classnames/bind';
import styles from './Message.scss';
import {
    CardList,
    MessageCard
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
                    header
                </header>
                <div className={cx('container')}>
                    <CardList
                        Card={MessageCard}
                        cardProps={messageProps}
                    />
                </div>
            </div>
        );
    }
}

