import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { MaterialUIComponent } from '../../components';
import { HeaderButtonTabs } from '../index';
import { RouteHOC, SignOutHOC } from "../../hocs";
import { selectors } from '../../reducers/auth';

class HeaderNavBar extends PureComponent {
    state = {
        loggedin: false
    };

    render() {
        return (
            <MaterialUIComponent>
                <AppBar
                    style={ styles.AppBar }
                    titleStyle={ styles.title }
                    title="Toring"
                    iconElementRight={
                        localStorage.getItem('token') ?
                            <LogOut
                                handleProfileClick={ this._handleProfileClick }
                                handleClick={ this._handleSignOut }/> :
                            <LogIn handleClick={ this._handleSignIn }/>
                    }
                    iconElementLeft={ <HeaderButtonTabs /> }
                />
            </MaterialUIComponent>
        )
    }

    _handleSignIn = () => {
        this.props.handleRoute({ path: "/signin" });
    }

    _handleSignOut = async () => {
        await this.props.handleSignout();
    }

    _handleProfileClick = () => {
        this.props.handleRoute({ path: "/works/profile" });
    }
}

const LogIn = ({ handleClick }) => (
    <FlatButton
        style={ styles.login }
        labelStyle={ styles.login }
        label="로그인"
        onClick={ handleClick }
    />
);

const LogOut = ({ handleProfileClick, handleClick }) => (
    <div>
        <FlatButton
            style={ styles.logout }
            labelStyle={ styles.logout }
            label={ localStorage.getItem('email') }
            onClick={ handleProfileClick }
        />
        <FlatButton
            style={ styles.logout }
            labelStyle={ styles.logout }
            label="로그아웃"
            onClick={ handleClick }
        />
    </div>
);

const styles = {
    AppBar: {
        'backgroundColor': '#343a40',
        'alignItems': 'center'
    },
    title: {
        'textAlign': 'center',
        'fontSize': '1rem'
    },
    login: {
        'backgroundColor': '#343a40',
        'color': 'white',
        'fontSize': '.8rem'
    },
    logout: {
        'backgroundColor': '#343a40',
        'color': 'white',
        'fontSize': '.8rem'
    }
};

const mapStateToProps = state => ({
    signedin: selectors.getSignedIn(state)
});

export default connect(mapStateToProps)(compose(RouteHOC, SignOutHOC)(HeaderNavBar));

/*
* const hoc1 =
* const hoc2 =
* const App
*
* export default hoc2(hoc1(App));
* export default compose(hoc2, hoc1)(App);
*
* */