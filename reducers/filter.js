import {SET_FILTER_PROPERTY} from '../actions/types';

const initialState = {
    filter: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_FILTER_PROPERTY:
            return Object.assign({},state,{filter:action.payload.filter})
            
        default:
            return state
    }
}
