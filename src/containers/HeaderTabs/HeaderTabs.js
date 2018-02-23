import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { Tabs, Tab } from 'material-ui/Tabs';
import { MaterialUIComponent } from '../../components';
import { RouteHOC } from "../../hocs";

class HeaderTabs extends PureComponent {
    render(){
        return (
            <MaterialUIComponent>
                <Tabs
                    onChange={ this._handleChange }
                    style={ styles.tabs }>
                    <Tab
                        label="홈"
                        path="/"
                        style={ styles.tab }
                        value={ {
                            path: '/'
                        }}
                    />
                    <Tab
                        label="거래소"
                        path="/trade"
                        style={ styles.tab }
                        value={ {
                            path: '/trade'
                        }}
                    />
                </Tabs>
            </MaterialUIComponent>

        );
    }

    _handleChange = (value) => {
        this.props.handleRoute(value);
    }
}

export default compose(RouteHOC)(HeaderTabs);

const styles = {
    tabs: {
        'marginBottom': '.5rem'
    },
    tab: {
        'backgroundColor': '#343a40',
    }
};