import {SET_FEATURES} from '../actions/types';

const initialState = {
    features: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_FEATURES:
            return Object.assign({},state,{features:action.payload.features})
            
        default:
            return state
    }
}
