import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from '../reducers/quote';

export const Template2HOC = (WrappedComponent) => {
  class WithTemplate extends PureComponent {
    componentDidMount() {
      this.props.asyncFetchQuotes2();
    }
    render() {
      return (
        <WrappedComponent
          { ...this.props }
          quote2={ this.props.quote2.get('text') }
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithTemplate);
};

const mapStateToProps = state => ({
  quote2: selectors.getQuote2(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    asyncFetchQuotes2: actions.fetchQuotes2
  }, dispatch);
