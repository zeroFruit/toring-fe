import React, { PureComponent } from 'react';
import history from '../../history';

export const RouteHOC = (WrappedComponent) =>
    class WithRoute extends PureComponent {
        render() {
            return (
                <WrappedComponent
                    { ...this.props }
                    handleRoute={ this._handleRoute }
                />
            )
        }

        _handleRoute = ({ path }) => {
            history.push(path);
        }
    }