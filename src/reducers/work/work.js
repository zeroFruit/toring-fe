import { Map } from 'immutable';
import {
    createRequestTypes,
    createType,
    action,
    createReducer
} from "../helper";

export const types = {
    INIT_WORK_API_STAT: createType(['INIT', 'WORK_API_STAT']),
    UPLOAD_WORK: createRequestTypes(['UPLOAD', 'WORK']),
};

const is = {
    workApiStat: Map({
        err: false,
        success: false
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

export default createReducer(is, {
    ...initApiStat,
    ...upload
});

export const actions = {
    initWorkApiStat: () => action(types.INIT_WORK_API_STAT),
    upload: (fd) => action(types.UPLOAD_WORK.REQUEST, { fd }),
};

export const selectors = {
    getWorkApiStat: state => state.work.workApiStat
};