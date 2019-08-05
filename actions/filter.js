import {SET_FILTER_PROPERTY} from '../actions/types';

export const setFilterProperty = filter => ({
    type: SET_FILTER_PROPERTY,
    payload: {filter}
})