import { legacy_createStore as createStore} from 'redux'
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from "redux-persist"
import reducer from "../reducers/index";
import userReducer from '../reducers/userReducer';


const persistedReducer = persistReducer({
    key:'root',
    storage: AsyncStorage,
    whitelist:['userReducer'],
}, reducer)


const  Store = createStore(persistedReducer);

let persistor = persistStore(Store);

export {Store, persistor};