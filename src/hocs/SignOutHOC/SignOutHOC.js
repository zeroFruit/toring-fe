import React, { PureComponent } from 'react';
import {Map} from "immutable";
import validator from 'validator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from "../../history";
import {actions, selectors} from "../../reducers/auth";

export const SignOutHOC = (WrappedComponent) => {
    class WithSignOutHOC extends PureComponent {
        componentWillReceiveProps(nextProps) {
            if (nextProps.signoutStat.get('err')) {
                console.error('Sign out err');
            }
            if (nextProps.signoutStat.get('success')) {
                history.push('/');
            }
        }
        componentWillUnmount() {
            this.props.initsignout();
        }

        render() {
            return (
                <WrappedComponent
                    { ...this.props }
                    handleSignout={ this._handleSignout }
                />
            );
        }

        _handleSignout = async () => {
            await this.props.signout();
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithSignOutHOC);
};

const mapStateToProps = state => ({
    signoutStat: selectors.getSignOutStat(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signout: actions.signout,
    initsignout: actions.initsignout
}, dispatch);