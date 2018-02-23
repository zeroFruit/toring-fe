import { List } from 'immutable';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { priceSelector } from '../../reducers/index';

export const FetchPriceToTableHOC = (WrappedComponent) => {
    class WithPrice extends PureComponent {
        state = {
            price: List([])
        };

        componentWillReceiveProps(nextProps) {
            this.setState({ price: List(nextProps.price) });
        }

        render() {
            const mappedItems = this.state.price.map(item => ({
                label: item.symbol,
                value: item.price
            }));
            return (
                <WrappedComponent
                    { ...this.props }
                    headerProps={ List(['코인', '마지막체결가']) }
                    bodyProps={ mappedItems }
                />
            );
        }
    }

    return connect(mapStateToProps, null)(WithPrice);
};

const mapStateToProps = state => ({
    price: priceSelector(state)
});
