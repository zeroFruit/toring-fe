import { Map } from 'immutable';
import validator from 'validator';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../../history';
import { actions, selectors } from '../../reducers/auth';

export const SignUpHOC = (WrappedComponent) => {
    class WithSignUpHOC extends PureComponent {
        state = {
            fd: Map({
                email: '',
                uname: '',
                pw: '',
                rpw: ''
            }),
            err: Map({
                isErr: false,
                msg: ''
            })
        };

        componentWillReceiveProps(nextProps) {
            if (nextProps.signupStat.get('err')) {
                this.setState({
                    err: this.state.err
                        .set('isErr', true)
                        .set('msg', 'Network error')
                });
            }

            if (nextProps.signupStat.get('success')) {
                console.log('sign up success');
                history.push('/signin');
            }
        }

        componentWillUnmount() {
            console.log('unmount');
            this.props.initsignup();
        }

        render() {
            return (
                <WrappedComponent
                    { ...this.props }
                    fd={ this.state.fd }
                    err={ this.state.err }
                    handleFdChange={ this._handleFdChange }
                    submit={ this._handleSubmit }
                />
            );
        }

        _handleFdChange = (evt) => {
            const { name, value } = evt.target;
            this.setState({
                fd: this.state.fd.set(name, value)
            });
        }

        _handleSubmit = async () => {
            const { fd } = this.state;
            if (this._validate(fd)) {
                await this.props.signup(fd);
            }
        }

        _validate = (fd) => {
            if (this._isFdEmpty(fd)) {
                this.setState({
                    err: this.state.err
                        .set('isErr', true)
                        .set('msg', 'Form is empty')
                });
                return false;
            }

            if (!this._isEmailValid(fd.get('email'))) {
                this.setState({
                    err: this.state.err
                        .set('isErr', true)
                        .set('msg', 'Email is not valid')
                });
                return false;
            }

            if (!this._isPwEql(fd.get('pw'), fd.get('rpw'))) {
                this.setState({
                    err: this.state.err
                        .set('isErr', true)
                        .set('msg', 'Password is not equal')
                });
                return false;
            }

            // TODO: 중복확인

            this.setState({
                err: this.state.err
                    .set('isErr', false)
                    .set('msg', '')
            });
            return true;
        }

        _isFdEmpty = fd =>
            fd.filter((v, k) => v !== '').size !== fd.size;
        _isEmailValid = em =>
            validator.isEmail(em);
        _isPwEql = (pw, rpw) =>
            pw.toString() === rpw.toString();
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithSignUpHOC);
};

const mapStateToProps = state => ({
    signupStat: selectors.getSignUpStat(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signup: actions.signup,
    initsignup: actions.initsignup
}, dispatch);