import { List } from 'immutable';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectors } from '../../reducers/currency';

export const FetchDepthToTableHOC = (WrappedComponent) => {
    class WithDepth extends PureComponent {
        state = {
            bids: List([]),
            asks: List([])
        };

        componentWillReceiveProps(nextProps) {
            this.setState({
                bids: List(nextProps.bids),
                asks: List(nextProps.asks)
            });
        }

        render() {
            const mappedBids = this.state.bids.map(item => ({
                label: item[0],
                value: item[1]
            }));
            const mappedAsks = this.state.asks.map(item => ({
                label: item[0],
                value: item[1]
            }));
            return (
                <WrappedComponent
                    { ...this.props }
                    headerProps={ List(['가격', '수량']) }
                    asks={ mappedAsks }
                    bids={ mappedBids }
                />
            );
        }
    }

    return connect(mapStateToProps, null)(WithDepth);
};

const mapStateToProps = state => ({
    bids: selectors.getBids(state),
    asks: selectors.getAsks(state)
});
