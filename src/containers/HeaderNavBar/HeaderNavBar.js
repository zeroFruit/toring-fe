import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { MaterialUIComponent } from '../../components';
import { HeaderButtonTabs } from '../index';
import { RouteHOC, LoaderHOC } from "../../hocs";

const HeaderNavBar = ({ handleRoute, signout }) => {
    return (
        <MaterialUIComponent>
            <AppBar
                style={ styles.AppBar }
                titleStyle={ styles.title }
                title="Toring"
                iconElementRight={
                    localStorage.getItem('token') ?
                        <LogOut
                            handleProfileClick={ () => handleRoute({ path: "/works/profile" }) }
                            handleClick={ () => {
                                console.log('clikc');
                                signout();
                            } }/> :
                        <LogIn handleClick={ () => handleRoute({ path: "/signin" }) }/>
                }
                iconElementLeft={ <HeaderButtonTabs /> }
            />
        </MaterialUIComponent>
    );
};

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


export default compose(LoaderHOC, RouteHOC)(HeaderNavBar);