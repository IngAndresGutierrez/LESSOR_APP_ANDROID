import {SET_CATEGORIES} from '../actions/types';

const initialState = {
    categories: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_CATEGORIES:
            return Object.assign({},state,{categories:action.payload.categories})
            
        default:
            return state
    }
}
