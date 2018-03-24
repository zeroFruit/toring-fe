import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageDetail.scss';
import {
    RoundCardTemplate,
    FlatButtonTemplate
} from '../../components';

const cx = classNames.bind(styles);

class MessageDetail extends PureComponent {
    state = {
        title: '\‘작가 이름\’님이 \‘그림책 이름\’에 대해 작업을 요청했어요',
        message: '메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.메세지를 입력해주세요.',
        check1: false,
        check2: false
    }
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
                        { this.state.title }
                    </div>
                    <hr className={cx('divider')} />
                    <div className={cx('message')}>
                        { this.state.message }
                    </div>
                    <hr className={cx('divider')} />
                    <div className={cx('checkbox')}>
                        <Checkbox
                            label={"Toring과의 계약서 확인"}
                            onClick={this.onClickCheck1}
                            check={
                                this.state.check1 ?
                                    require('./images/check_selected_icon.png') :
                                    require('./images/check_default_icon.png')}
                        />
                    </div>
                    <hr className={cx('divider')} />
                    <div className={cx('checkbox')}>
                        <Checkbox
                            label={"수락을 누르면 상대방에게 연락처가 공개됩니다."}
                            onClick={this.onClickCheck2}
                            check={
                                this.state.check2 ?
                                    require('./images/check_selected_icon.png') :
                                    require('./images/check_default_icon.png')}
                        />
                    </div>
                    <hr className={cx('divider')} />
                    <div className={cx('footer')}>
                        <Button
                            label={"수락"}
                        />
                        <Button
                            label={"거절"}
                        />
                    </div>
                </div>
            </div>
        );
    }

    onClickCheck1 = () => this.setState({ check1: !this.state.check1 });
    onClickCheck2 = () => this.setState({ check2: !this.state.check2 });
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
            marginLeft: '1.5rem',
            border: '1px solid #c2c2c2',
            fontSize: '1rem',
            color: '#c2c2c2'
        }}
        onClick={onClick}
    />
)
MessageDetail.propTypes = {};

export default MessageDetail;
