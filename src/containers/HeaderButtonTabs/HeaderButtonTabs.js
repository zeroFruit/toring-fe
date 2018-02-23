import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import classNames from 'classnames/bind';
import { MaterialUIComponent, FlatButtonTemplate } from '../../components';
import { RouteHOC } from "../../hocs";

const TYPE = {
    READER: 'reader',
    CREATOR: 'creator'
};

class HeaderButtonTabs extends PureComponent {
    state = {
        pageType: TYPE.READER
    };

    render() {
        const { pageType } = this.state;

        return (
            <MaterialUIComponent>
                <div>
                    <FlatButtonTemplate
                        style={ pageType === TYPE.READER ? styles.active : styles.inactive }
                        label={ TYPE.READER }
                        onClick={ this._handleClick.bind(this, TYPE.READER) }
                    />
                    <FlatButtonTemplate
                        style={ pageType === TYPE.CREATOR ? styles.active : styles.inactive }
                        label={ TYPE.CREATOR }
                        onClick={ this._handleClick.bind(this, TYPE.CREATOR) }
                    />
                </div>
            </MaterialUIComponent>
        );
    }

    _handleClick = (type) => {
        this.setState({
            pageType: type
        });
        const path = type === TYPE.READER ? '/' : '/works';
        this.props.handleRoute({ path });
    }
}

const styles = {
    active: {
        backgroundColor: '#ced4da',
        color: '#343a40',
        transform: 'translateY(.6rem)'
    },
    inactive: {
        backgroundColor: '#343a40',
        color: 'white',
        transform: 'translateY(.6rem)'
    }
}

export default compose(RouteHOC)(HeaderButtonTabs);