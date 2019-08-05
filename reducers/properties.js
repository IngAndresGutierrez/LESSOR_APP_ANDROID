import {SET_PROPERTIES,SET_PUBLISHED_PROPERTIES,SET_INTERESTED_USERS_PROPERTIES} from '../actions/types';

const initialState = {
    properties: null,
    publishedProperties: null,
    interestedUsersProperties: null
}

export default function(state=initialState, action){
    switch(action.type) {
        case SET_PROPERTIES:
            return Object.assign({},state,{properties:action.payload.properties})

        case SET_PUBLISHED_PROPERTIES:
            return Object.assign({},state,{publishedProperties:action.payload.publishedProperties})

        case SET_INTERESTED_USERS_PROPERTIES:
            return Object.assign({},state,{interestedUsersProperties:action.payload.interestedUsersProperties})

            
        default:
            return state
    }
}
