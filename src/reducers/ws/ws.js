import {
    createType,
    action
} from '../helper';

export const types = {
    START_WS: createType(['START', 'WS'])
};

export const actions = {
    startWS: () => action(types.START_WS)
};
