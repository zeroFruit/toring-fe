import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Map} from "immutable";
import validator from "validator";

class SignUpService extends PureComponent {
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
        }),
    };
    render() {
        const { fd, err } = this.state;
        const { neterr } = this.props;

        return (this.props.render({
            fd,
            err: this._getError(err, neterr),
            submit: this._handleSubmit,
            handleFdChange: this._handleFdChange
        }));
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

        if (!this._isPwEql(fd.get('pw'), fd.get('rpw'))) {
            this.setState({
                err: this.state.err
                    .set('isErr', true)
                    .set('msg', 'Password is not equal')
            });
            return false;
        }

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

SignUpService.propTypes = {};

export default SignUpService;

