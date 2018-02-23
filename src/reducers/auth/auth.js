import { Map } from 'immutable';
import {
    createRequestTypes,
    createType,
    action,
    createReducer
} from "../helper";

export const types = {
    SIGN_UP: createRequestTypes(['SIGN', 'UP']),
    INIT_SIGN_UP: createType(['INIT', 'SIGN', 'UP']),
    SIGN_IN: createRequestTypes(['SIGN', 'IN']),
    INIT_SIGN_IN: createType(['INIT', 'SIGN', 'IN']),
    SIGN_OUT: createRequestTypes(['SIGN', 'OUT']),
    INIT_SIGN_OUT: createType(['INIT', 'SIGN', 'OUT'])
};

export const is = {
    signedin: false,
    signupStat: Map({
        err: false,
        success: false
    }),
    signinStat: Map({
        err: false,
        success: false
    }),
    signoutStat: Map({
        err: false,
        success: false
    })
};

const signup = {
    [types.INIT_SIGN_UP]: (state, action) => ({
        ...state,
        signupStat: is.signupStat
    }),
    [types.SIGN_UP.REQUEST]: (state, action) => ({
        ...state,
    }),
    [types.SIGN_UP.SUCCESS]: (state, action) => ({
        ...state,
        signupStat: state.signupStat
            .set('err', false)
            .set('success', true)
    }),
    [types.SIGN_UP.FAILURE]: (state, action) => ({
        ...state,
        signupStat: state.signupStat
            .set('err', true)
            .set('success', false)
    })
};

const signin = {
    [types.INIT_SIGN_IN]: (state, action) => ({
        ...state,
        signinStat: is.signinStat
    }),
    [types.SIGN_IN.REQUEST]: (state, action) => ({
        ...state,
    }),
    [types.SIGN_IN.SUCCESS]: (state, action) => ({
        ...state,
        signinStat: state.signinStat
            .set('err', false)
            .set('success', true),
        signedin: true
    }),
    [types.SIGN_IN.FAILURE]: (state, action) => ({
        ...state,
        signinStat: state.signinStat
            .set('err', true)
            .set('success', false),
        signedin: false
    })
};

const signout = {
    [types.INIT_SIGN_OUT]: (state, action) => ({
        ...state,
        signoutStat: is.signoutStat
    }),
    [types.SIGN_OUT.REQUEST]: (state, action) => ({
        ...state
    }),
    [types.SIGN_OUT.SUCCESS]: (state, action) => ({
        ...state,
        signoutStat: state.signoutStat
            .set('err', false)
            .set('success', true),
        signedin: false
    }),
    [types.SIGN_OUT.FAILURE]: (state, action) => ({
        ...state,
        signoutStat: state.signoutStat
            .set('err', true)
            .set('success', false),
        signedin: true
    })
};

export default createReducer(is, {
    ...signup,
    ...signin,
    ...signout
});

export const actions = {
    signup: (fd) => action(types.SIGN_UP.REQUEST, fd),
    initsignup: () => action(types.INIT_SIGN_UP),
    signin: (fd) => action(types.SIGN_IN.REQUEST, fd),
    initsignin: () => action(types.INIT_SIGN_IN),
    signout: () => action(types.SIGN_OUT.REQUEST),
    initsignout: () => action(types.INIT_SIGN_OUT)
};

export const selectors = {
    getSignedIn: state => state.auth.signedin,
    getSignUpStat: state => state.auth.signupStat,
    getSignInStat: state => state.auth.signinStat,
    getSignOutStat: state => state.auth.signoutStat
};