import React, { PureComponent } from 'react';
import {Map} from "immutable";
import validator from 'validator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from "../../history";
import {actions, selectors} from "../../reducers/auth";

export const SignInHOC = (WrappedComponent) => {
    class WithSignInHOC extends PureComponent {
        state = {
            fd: Map({
                email: '',
                pw: ''
            }),
            err: Map({
                isErr: false,
                msg: ''
            })
        };

        componentWillReceiveProps(nextProps) {
            if (nextProps.signinStat.get('err')) {
                this.setState({
                    err: this.state.err
                        .set('isErr', true)
                        .set('msg', 'Network error')
                });
            }

            if (nextProps.signinStat.get('success')) {
                history.push('/');
            }
        }

        componentWillUnmount() {
            console.log('unmount');
            this.props.initsignin();
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
                await this.props.signin(fd);
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
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithSignInHOC);
};

const mapStateToProps = state => ({
    signinStat: selectors.getSignInStat(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signin: actions.signin,
    initsignin: actions.initsignin
}, dispatch);