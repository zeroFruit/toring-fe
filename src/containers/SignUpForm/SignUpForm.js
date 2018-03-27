import React from 'react';
import { compose } from 'recompose';
import classNames from 'classnames/bind';
import RaisedButton from 'material-ui/RaisedButton';
import _styles from './SignUpForm.scss';
import { MaterialUIComponent } from '../../components';
import { TradeFormTextField } from '../index';
import { SignUpHOC, LoaderHOC } from "../../hocs";

const cx = classNames.bind(_styles);

const SignUpForm = ({ handleFdChange, fd, err, submit }) => (
    <MaterialUIComponent>
        <div className={ cx('signup-form') }>
            <header>
                Toring
            </header>
            <div className={ cx('wrapper') }>
                <TradeFormTextField
                    type="email"
                    name="email"
                    value={ fd.get("email") }
                    onChange={ handleFdChange.bind(this) }
                    floatingLabelText="이메일"
                />
                <TradeFormTextField
                    name="uname"
                    value={ fd.get("uname") }
                    onChange={ handleFdChange.bind(this) }
                    floatingLabelText="사용자이름"
                />
                <TradeFormTextField
                    type="password"
                    name="pw"
                    value={ fd.get("pw") }
                    onChange={ handleFdChange.bind(this) }
                    floatingLabelText="비밀번호"
                />
                <TradeFormTextField
                    type="password"
                    name="rpw"
                    value={ fd.get("rpw") }
                    onChange={ handleFdChange.bind(this) }
                    floatingLabelText="비밀번호 확인"
                />
                <div className={ cx('error-text') }>
                    { err.get('isErr') ? err.get('msg') : null }
                </div>
                <RaisedButton
                    fullWidth
                    onClick={ submit }
                    style={ styles.btn }
                    label="회원가입" />
            </div>
            <section>
                <p>
                    이용약관, 개인정보 수집 및 이용 약관에 동의합니다.
                </p>
            </section>
        </div>
    </MaterialUIComponent>
);

const styles = {
    btn: {
        marginTop: '1.5rem'
    }
}

export default compose(SignUpHOC, LoaderHOC)(SignUpForm);