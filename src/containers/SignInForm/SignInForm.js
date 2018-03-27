import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import _styles from './SignInForm.scss';
import { MaterialUIComponent } from '../../components';
import { TradeFormTextField } from '../index';

const cx = classNames.bind(_styles);

const SignInForm = ({ handleFdChange, fd, err, submit }) => (
    <MaterialUIComponent>
        <div className={ cx('login-form') }>
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
                    type="password"
                    name="pw"
                    value={ fd.get("pw") }
                    onChange={ handleFdChange.bind(this) }
                    floatingLabelText="비밀번호"
                />
                <div className={ cx('error-text') }>
                    { err.get('isErr') ? err.get('msg') : null }
                </div>
                <RaisedButton
                    fullWidth
                    style={ styles.btn }
                    onClick={ submit }
                    label="로그인" />
            </div>
            <section>
                <p>
                    계정이 없다면 <Link to="/signup">회원가입</Link> 하러 가기
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

export default SignInForm;