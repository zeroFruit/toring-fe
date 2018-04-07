import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Root.scss';
import history from '../history';
import { ViewTemplate } from '../components';
import { HeaderNavBar, ModalService } from '../containers';
import { AuthHOC } from '../hocs';
import {actions as wsActions} from '../reducers/ws';
import {actions as authActions} from '../reducers/auth';
import {
    Home,
    Works,
    SignIn,
    SignUp,
    Upload,
    Profile, Message
} from './index';
import {selectors} from "../reducers/auth";

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
            <ModalService
                render={({ maybeRenderModal }) => (
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
                                        {/* /works/writer */}
                                        {/* /works/illu */}
                                        <AuthHOC path="/works/upload" redirectPath="/works" Component={ Upload } />
                                        {/*<AuthHOC path="/works/profile" redirectPath="/works" Component={ Profile } />*/}
                                        <Route path="/works/writer/profile/me" render={() => (
                                            <Profile
                                                isMyPage
                                                isWriterPage
                                                isIlluPage={false}
                                                maybeRenderModal={maybeRenderModal}
                                                uid={-1}
                                            />
                                        )} />
                                        <Route path="/works/writer/profile/:uid" render={({ match }) => (
                                            <Profile
                                                isMyPage={false}
                                                isWriterPage
                                                isIlluPage={false}
                                                maybeRenderModal={maybeRenderModal}
                                                uid={match.params.uid}
                                            />
                                        )} />
                                        <Route path="/works/illustrator/profile/me" render={() => (
                                            <Profile
                                                isMyPage
                                                isWriterPage={false}
                                                isIlluPage
                                                maybeRenderModal={maybeRenderModal}
                                                uid={-1}
                                            />
                                        )} />
                                        <Route path="/works/illustrator/profile/:uid" render={({ match }) => (
                                            <Profile
                                                isMyPage={false}
                                                isWriterPage={false}
                                                isIlluPage
                                                maybeRenderModal={maybeRenderModal}
                                                uid={match.params.uid}
                                            />
                                        )} />
                                        <Route path={"/message"} component={Message} />
                                        <Route path="/signin" component={ SignIn } />
                                        <Route path="/signup" component={ SignUp } />
                                    </Switch>
                                </div>
                            </div>
                        </ViewTemplate>
                    </Router>
                )}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Root);






