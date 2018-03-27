import {Map} from "immutable";
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { SignUpForm, SignUpService } from "../../containers";
import {actions, selectors} from "../../reducers/auth";
import {bindActionCreators} from "redux";
import history from "../../history";

class SignUp extends PureComponent {
    state = {
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
    render() {
        return (
            <SignUpService
                neterr={this.state.err}
                submit={this.props.signup}
                render={({ submit, handleFdChange, fd, err}) => (
                    <SignUpForm
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
    signupStat: selectors.getSignUpStat(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signup: actions.signup,
    initsignup: actions.initsignup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);