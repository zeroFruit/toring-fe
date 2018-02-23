import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import history from '../../history';

export const AuthHOC = ({ Component, path, redirectPath, exact, ...rest }) => {
    if(!localStorage.getItem('token')) // DANGER: check validation of token with server
        history.push(redirectPath);
    return (
        <Route
            { ...rest }
            exact={ exact }
            path={ path }
            render={ props =>
                <Component { ...props } />
            }
        />
    );
}
