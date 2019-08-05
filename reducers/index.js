import { combineReducers } from 'redux';
import Categories from './categories';
import Municipalities from './municipalities';
import Departments from './departments';
import User from './user';
import Filter from './filter';
import Properties from './properties';
import Features from './features';
import GuarantorProfile from './guarantorProfile';



export default combineReducers({
    Categories,
    Municipalities,
    Departments,
    User,
    Filter,
    Properties,
    Features,
    GuarantorProfile
})