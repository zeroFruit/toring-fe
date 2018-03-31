import { Map, List } from 'immutable';
import {
    createRequestTypes,
    createType,
    action,
    createReducer
} from "../helper";

export const types = {
    INIT_MESSAGE_API_STAT: createType(['INIT', 'MESSAGE_API_STAT']),
    ADD_MESSAGE: createRequestTypes(['SEND', 'MESSAGE']),
    FETCH_MESSAGES: createRequestTypes(['GET', 'MESSAGES']),
    UPDATE_CHECK_STATE: createRequestTypes(['UPDATE', 'CHECK_STATE']),
};

const is = {
    messageApiStat: Map({
        err: false,
        success: false
    })
};

const initApiStat = {
    [types.INIT_MESSAGE_API_STAT]: (state, action) => ({
        ...state,
        messageApiStat: is.messageApiStat
    })
}

const add = {
    [types.ADD_MESSAGE.SUCCESS]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.ADD_MESSAGE.FAILURE]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', true)
            .set('success', false)
    }),
};

const fetch = {
    [types.FETCH_MESSAGES.SUCCESS]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.FETCH_MESSAGES.FAILURE]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', true)
            .set('success', false)
    }),
};

const check = {
    [types.UPDATE_CHECK_STATE.SUCCESS]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.UPDATE_CHECK_STATE.FAILURE]: (state, action) => ({
        ...state,
        messageApiStat: state.messageApiStat
            .set('err', false)
            .set('success', true)
    }),
};

export default createReducer(is, {
    ...initApiStat,
    ...add,
    ...fetch,
    ...check
});

export const actions = {
    sendMessage: ({ sender, receiver, content }) => action(types.ADD_MESSAGE.REQUEST, {
        sender,
        receiver,
        content,
    }),
    fetchMessages: ({ token }) => action(types.FETCH_MESSAGES.REQUEST, {
        token
    }),
    updateCheckState: ({ token, mid }) => action(types.UPDATE_CHECK_STATE, {
        token,
        mid
    }),
    initMessageApiStat: () => action(types.INIT_MESSAGE_API_STAT)
};

export const selectors = {
    getMessageApiStat: state => state.message.messageApiStat,
};

