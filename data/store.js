import { createStore } from 'redux';
import reducer from '../reducers/index';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import devToolsEnhancer from 'remote-redux-devtools';
 

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer,devToolsEnhancer({ realtime: true }),);

export default store;

