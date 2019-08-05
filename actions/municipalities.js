import {SET_MUNICIPALITIES} from '../actions/types';

export const setMunicipalities = municipalities => ({
    type: SET_MUNICIPALITIES,
    payload: {municipalities}
})

