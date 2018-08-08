import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Root.scss';
import history from '../history';
import { ViewTemplate } from '../components';
import { HeaderNavBar } from '../containers';
import { AuthHOC } from '../hocs';
import {actions as wsActions} from '../reducers/ws';
import {actions as authActions} from '../reducers/auth';
import {
    Home,
    Works,
    SignIn,
    SignUp,
    Upload,
<<<<<<< HEAD:src/containers/RootView/RootView.js
    WriterProfile,
    IllustratorProfile,
    Writers
} from '../../page'
=======
    Profile
} from './index';
import {selectors} from "../reducers/auth";
>>>>>>> e827d341c4faa80fada903b29bb13b62f1b0bd2e:src/page/Root.js

const cx = classNames.bind(styles);

class Root extends PureComponent {
    componentWillMount() {
        this.props.startWS();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.signoutStat.get('err')) {
            console.error('Sign out err');
        }
        if (nextProps.signoutStat.get('success')) {
            history.push('/');
        }
    }
    componentWillUnmount() {
        this.props.initsignout();
    }
    render() {
        return (
            <Router history={ history }>
                <ViewTemplate
                    header={<HeaderNavBar
                        signout={this.props.signout}
                    />}>
                    <div className={ cx('root-view') }>
                        <div>
                            <Switch>
                                <Route exact path="/" component={ Home } />
                                <Route exact path="/works" component={ Works } />
<<<<<<< HEAD:src/containers/RootView/RootView.js
                                <Route path="/works/upload" component={ Upload } />
                                 {/*<AuthHOC path="/works/profile" redirectPath="/works" Component={ Profile } />*/}
                                <Route path="/works/profile/writer" component={ WriterProfile } />
                                <Route path="/works/profile/illustrator" component= { IllustratorProfile } />
                                <Route path="/works/writers" component={ Writers } />
=======
                                <AuthHOC path="/works/upload" redirectPath="/works" Component={ Upload } />
                                {/*<AuthHOC path="/works/profile" redirectPath="/works" Component={ Profile } />*/}
                                <Route path="/works/profile" component={ Profile } />
>>>>>>> e827d341c4faa80fada903b29bb13b62f1b0bd2e:src/page/Root.js
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

const mapStateToProps = state => ({
    signoutStat: selectors.getSignOutStat(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({
    startWS: wsActions.startWS,
    signout: authActions.signout,
    initsignout: authActions.initsignout,
}, dispatch);

<<<<<<< HEAD:src/containers/RootView/RootView.js
export default connect(null, mapDispatchToProps)(RootView);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Root);






>>>>>>> e827d341c4faa80fada903b29bb13b62f1b0bd2e:src/page/Root.js
