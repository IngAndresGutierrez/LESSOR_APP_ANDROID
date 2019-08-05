import {SET_DEPARTMENTS} from '../actions/types';

const initialState = {
    departments: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_DEPARTMENTS:
            return Object.assign({},state,{departments:action.payload.departments})
            
        default:
            return state
    }
}
