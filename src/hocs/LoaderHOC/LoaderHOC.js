import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from '../../reducers/loading/index';

export const LoaderHOC = (WrappedComponent) => {
    class WithLoader extends PureComponent {
        componentDidMount() {
        }
        render() {
            if (this.props.lcount !== 0) {
                return <div>Loading...</div>
            } else {
                return (
                    <WrappedComponent
                        { ...this.props }
                    />
                );
            }

        }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithLoader);
};


const mapStateToProps = state => ({
  lcount: selectors.getLcount(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  }, dispatch);
