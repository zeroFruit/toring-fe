import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Map} from "immutable";
import validator from "validator";

class SignInService extends PureComponent {
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
    render() {
        const { fd, err } = this.state;
        const { neterr } = this.props;

        return (this.props.render({
                fd,
                err: this._getError(err, neterr),
                handleFdChange: this._handleFdChange,
                submit: this._handleSubmit,
            })
        );
    }

    _getError = (err, neterr) => {
        let r = Map({
            isErr: false,
            msg: ''
        });
        if(err.get('isErr')) r = err;
        if(neterr.get('isErr')) r = neterr;
        return r;
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
            await this.props.submit(fd);
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

SignInService.propTypes = {};

export default SignInService;
