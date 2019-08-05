import {SET_MUNICIPALITIES} from '../actions/types';

const initialState = {
    municipalities: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_MUNICIPALITIES:
            return Object.assign({},state,{municipalities:action.payload.municipalities})
            
        default:
            return state
    }
}
