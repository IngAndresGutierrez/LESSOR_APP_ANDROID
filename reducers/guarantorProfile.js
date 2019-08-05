import {SET_PROFILEGUARANTOR} from '../actions/types';

const initialState = {
    guarantorProfile: {state:''},
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_PROFILEGUARANTOR:
            return Object.assign({},state,{guarantorProfile:action.payload.guarantorProfile})
            
        default:
            return state
    }
}