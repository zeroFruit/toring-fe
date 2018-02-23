import { Map } from 'immutable';
import {
    createRequestTypes,
    createType,
    action,
    createReducer
} from "../helper";

export const types = {
    UPLOAD_WORK: createRequestTypes(['UPLOAD', 'WORK']),
    INIT_UPLOAD_WORK: createType(['INIT', 'UPLOAD', 'WORK'])
};

const is = {
    uploadStat: Map({
        err: false,
        success: false
    })
};

const upload = {
    [types.INIT_UPLOAD_WORK]: (state, action) => ({
        ...state,
        uploadStat: is.uploadStat
    }),
    [types.UPLOAD_WORK.REQUEST]: (state, action) => ({
        ...state,
    }),
    [types.UPLOAD_WORK.SUCCESS]: (state, action) => ({
        ...state,
        uploadStat: state.uploadStat
            .set('err', false)
            .set('success', true)
    }),
    [types.UPLOAD_WORK.FAILURE]: (state, action) => ({
        ...state,
        uploadStat: state.uploadStat
            .set('err', true)
            .set('success', false)
    }),
};

export default createReducer(is, {
    ...upload
});

export const actions = {
    upload: (fd) => action(types.UPLOAD_WORK.REQUEST, { fd }),
    initupload: () => action(types.INIT_UPLOAD_WORK)
};

export const selectors = {
    getUploadStat: state => state.work.uploadStat
};