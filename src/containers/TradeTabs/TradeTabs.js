import React, { PureComponent } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { MaterialUIComponent } from '../../components';

class TradeTabs extends PureComponent {
    state = {
        isAsk: true
    };

    render() {
        const { isAsk } = this.state;
        return (
          <MaterialUIComponent>
              <Tabs
                  onChange={ this._handleChange }
                  style={ styles.tabs }>
                  <Tab
                      label="구매"
                      style={ isAsk ? styles.atab : styles.tab }
                      value={ {
                          state: 'ask'
                      }}
                  />
                  <Tab
                      label="판매"
                      style={ !isAsk ? styles.atab : styles.tab }
                      value={ {
                          state: 'bid'
                      }}
                  />
              </Tabs>
          </MaterialUIComponent>
        );
    }

    _handleChange = (value) => {
        this.setState({
            isAsk: value.state === 'ask' ? true : false
        });
    }
}

export default TradeTabs;

const styles = {
    tabs: {
        width: '100%',
        'marginBottom': '.5rem'
    },
    tab: {
        'backgroundColor': 'white',
        'color': 'black'
    },
    atab: {
        'backgroundColor': '#d6336c',
    }
};