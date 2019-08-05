import {SET_PROFILEGUARANTOR} from '../actions/types';

export const setGuarantorProfile = guarantorProfile => ({
    type: SET_PROFILEGUARANTOR,
    payload: {guarantorProfile}
})