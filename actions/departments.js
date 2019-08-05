import {SET_DEPARTMENTS} from '../actions/types';

export const setDepartments = departments => ({
    type: SET_DEPARTMENTS,
    payload: {departments}
})


