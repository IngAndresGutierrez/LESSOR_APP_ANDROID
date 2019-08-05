import {SET_PROPERTIES,SET_PUBLISHED_PROPERTIES,SET_INTERESTED_USERS_PROPERTIES} from '../actions/types';

export const setProperties = properties => ({
    type: SET_PROPERTIES,
    payload: {properties}
})

export const setPublishedProperties = publishedProperties => ({
    type: SET_PUBLISHED_PROPERTIES,
    payload: {publishedProperties}
})

export const setInterestedUsersProperties = interestedUsersProperties => ({
    type: SET_INTERESTED_USERS_PROPERTIES,
    payload: {interestedUsersProperties}
})

