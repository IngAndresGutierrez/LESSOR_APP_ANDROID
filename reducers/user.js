import {SET_USER} from '../actions/types';

const initialState = {
    user : null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_USER:
            return Object.assign({},state,{user:action.payload.user})
            
        default:
            return state
    }
}
