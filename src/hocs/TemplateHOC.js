import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from '../reducers/quote';

export const TemplateHOC = (WrappedComponent) => {
  class WithTemplate extends PureComponent {
    componentDidMount() {
      this.props.asyncFetchQuotes();
    }
    render() {
      return (
        <WrappedComponent
          { ...this.props }
          quote={ this.props.quote.get('text') }
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithTemplate);
};

const mapStateToProps = state => ({
  quote: selectors.getQuote(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    asyncFetchQuotes: actions.fetchQuotes
  }, dispatch);
