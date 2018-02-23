import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class MaterialUIComponent extends PureComponent {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <MuiThemeProvider>
                { React.Children.only(this.props.children) }
            </MuiThemeProvider>
        );
    }
}

MaterialUIComponent.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};