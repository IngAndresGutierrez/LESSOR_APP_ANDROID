import {SET_FEATURES} from '../actions/types';

export const setFeatures = features => ({
    type: SET_FEATURES,
    payload: {features}
})