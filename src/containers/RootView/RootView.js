import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './RootView.scss';
import history from '../../history';
import { ViewTemplate } from '../../components';
import { HeaderNavBar } from '../../containers';
import { AuthHOC } from '../../hocs';
import { actions } from '../../reducers/ws';
import {
    Home,
    Works,
    SignIn,
    SignUp,
    Upload,
    Profile
} from '../../page'

const cx = classNames.bind(styles);

class RootView extends PureComponent {
    componentWillMount() {
        this.props.startWS();
    }
    render() {
        return (
            <Router history={ history }>
                <ViewTemplate
                    header={ <HeaderNavBar /> }>
                    <div className={ cx('root-view') }>
                        <div>
                            <Switch>
                                <Route exact path="/" component={ Home } />
                                <Route exact path="/works" component={ Works } />
                                <AuthHOC path="/works/upload" redirectPath="/works" Component={ Upload } />
                                 {/*<AuthHOC path="/works/profile" redirectPath="/works" Component={ Profile } />*/}
                                <Route path="/works/profile" component={ Profile } />
                                <Route path="/signin" component={ SignIn } />
                                <Route path="/signup" component={ SignUp } />
                            </Switch>
                        </div>
                    </div>
                </ViewTemplate>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    startWS: actions.startWS
}, dispatch);

export default connect(null, mapDispatchToProps)(RootView);






