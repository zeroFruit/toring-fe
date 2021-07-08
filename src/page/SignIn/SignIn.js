import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { SignInForm, SignInService } from "../../containers/index";
import {actions, selectors} from "../../reducers/auth";
import {bindActionCreators} from "redux";
import history from "../../history";
import {Map} from "immutable";

class SignIn extends PureComponent {
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
        this.props.initsignin();
    }

    render() {
        return (
            <SignInService
                submit={this.props.signin}
                neterr={this.state.err}
                render={({ submit, handleFdChange, fd, err }) => (
                    <SignInForm
                        submit={submit}
                        handleFdChange={handleFdChange}
                        fd={fd}
                        err={err}
                    />
                )}
            />

        );
    }
}

const mapStateToProps = state => ({
    signinStat: selectors.getSignInStat(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signin: actions.signin,
    initsignin: actions.initsignin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
