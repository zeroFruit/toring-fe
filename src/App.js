import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import saga from './sagas';
import Root from './page/Root';


const sagaMiddleware = createSagaMiddleware();
const configureStore = (is) => {
    const enhancer = compose(applyMiddleware(sagaMiddleware));
    return createStore(reducer, is, enhancer);
};
export const store = configureStore();
sagaMiddleware.run(saga);

class App extends Component {
    render() {
        return (
        <Provider store={ store }>
            <Root />
        </Provider>
        );
    }
}

export default App;
