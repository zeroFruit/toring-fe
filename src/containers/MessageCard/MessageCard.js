import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageCard.scss';

const cx = classNames.bind(styles);

class MessageCard extends PureComponent {
    render() {
        return (
            <div className={cx('message-card')}>
                MessageCard
            </div>
        );
    }
}

MessageCard.propTypes = {};

export default MessageCard;
