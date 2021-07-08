import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { MaterialUIComponent } from '../../components';
import { HeaderButtonTabs } from '../index';
import { LoaderHOC } from "../../hocs";
import history from '../../history';

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
                            onClickWriterWorks={() => history.push("/works/writer/profile/me")}
                            onClickIllustratorWorks={() => history.push("/works/illustrator/profile/me")}
                            handleClick={() => signout()}/> :
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

const LogOut = ({ onClickWriterWorks, onClickIllustratorWorks, handleClick }) => (
    <div>
        <FlatButton
            style={ styles.logout }
            labelStyle={ styles.logout }
            label={"글작업실"}
            onClick={ onClickWriterWorks }
        />
        <FlatButton
            style={ styles.logout }
            labelStyle={ styles.logout }
            label={"그림작업실"}
            onClick={ onClickIllustratorWorks }
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


export default compose(LoaderHOC)(HeaderNavBar);