import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageModalContent.scss';
import {
    TextAreaTemplate,
    FlatButtonTemplate
} from '../../components';

const cx = classNames.bind(styles);

const MessageModalContent = () => {
    return (
        <div className={cx('message-modal-content')}>
            <div className={cx('message-modal-content__title')}>
                ‘작가 이름’님의 ‘그림책 이름’에 대해 작업을 요청합니다.
            </div>
            <hr className={cx('divider')}/>
            <div className={cx('message-modal-content__textarea')}>
                <TextAreaTemplate
                    rows={10}
                    rowsMax={10}
                    underlineShow={false}
                    hintText={"메세지를 입력해주세요."}
                    containerStyle={textareaStyles.container}
                    textareaStyle={textareaStyles.textarea}
                />
            </div>
            <hr className={cx('divider')}/>
            <div className={cx('message-modal-content__checkbox')}>
                <Checkbox
                    label={"Toring과의 계약서 확인"}
                    check={
                            require('./images/check_default_icon.png')}
                />
            </div>
            <hr className={cx('divider')}/>
            <div className={cx('message-modal-content__checkbox')}>
                <Checkbox
                    label={"수락을 누르면 상대방에게 연락처가 공개됩니다."}
                    check={
                        require('./images/check_default_icon.png')}
                />
            </div>
            <hr className={cx('divider')}/>
            <div className={cx('message-modal-content__footer')}>
                <Button label={"보내기"}/>
            </div>
        </div>
    );
};

const textareaStyles = {
    container: {
        width: '100%',
        height: '14.375rem',
        border: '1px solid #c2c2c2',
        borderRadius: '2px',
    },
    textarea: {
        margin: '.75rem .9375rem'
    }
};

const Checkbox = ({ label = '', check, onClick = () => {} }) => (
    <div
        className={cx('message-checkbox')}
        onClick={onClick}
    >
        <div className={cx('label')}>
            { label }
        </div>
        <div className={cx('checkbox')}>
            <div className={cx('label')}>동의합니다.</div>
            <img src={check} />
        </div>
    </div>
);

const Button = ({label = '', onClick = () => {}}) => (
    <FlatButtonTemplate
        label={label}
        style={{
            width: '10.625rem',
            height: '2.8125rem',
            border: '1px solid #c2c2c2',
            fontSize: '1rem',
            color: '#c2c2c2'
        }}
        onClick={onClick}
    />
)

MessageModalContent.propTypes = {

};

export default MessageModalContent;
