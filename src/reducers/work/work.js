import { Map, List } from 'immutable';
import {
    createRequestTypes,
    createType,
    action,
    createReducer
} from "../helper";

export const types = {
    INIT_WORK_API_STAT: createType(['INIT', 'WORK_API_STAT']),
    UPLOAD_WORK: createRequestTypes(['UPLOAD', 'WORK']),
    FETCH_WRITES: createRequestTypes(['FETCH', 'WRITES']),
    FETCH_ILLUSTS: createRequestTypes(['FETCH', 'ILLUSTS']),
};

const is = {
    workApiStat: Map({
        err: false,
        success: false
    }),
    worksOfUser: Map({
        user: null,
        writes: List(),
        illusts: List()
    })
};

const initApiStat = {
    [types.INIT_WORK_API_STAT]: (state, action) => ({
        ...state,
        workApiStat: is.workApiStat
    })
}

const upload = {
    [types.UPLOAD_WORK.SUCCESS]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.UPLOAD_WORK.FAILURE]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', true)
            .set('success', false)
    }),
};

const fetch = {
    [types.FETCH_WRITES.SUCCESS]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.FETCH_WRITES.FAILURE]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', true)
            .set('success', false)
    }),
    [types.FETCH_ILLUSTS.SUCCESS]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', false)
            .set('success', true)
    }),
    [types.FETCH_ILLUSTS.FAILURE]: (state, action) => ({
        ...state,
        workApiStat: state.workApiStat
            .set('err', true)
            .set('success', false)
    }),
}

export default createReducer(is, {
    ...initApiStat,
    ...upload
});

export const actions = {
    initWorkApiStat: () => action(types.INIT_WORK_API_STAT),
    upload: (fd) => action(types.UPLOAD_WORK.REQUEST, { fd }),
    fetchWrites: ({ uid, token }) => action(types.FETCH_WRITES.REQUEST, { uid, token }),
    fetchIllusts: ({ uid, token }) => action(types.FETCH_WRITES.REQUEST, { uid, token }),
};

export const selectors = {
    getWorkApiStat: state => state.work.workApiStat,
    getWorksOfUser: state => state.work.worksOfUser,
};