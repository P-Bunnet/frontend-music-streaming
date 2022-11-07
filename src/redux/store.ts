import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
  });
  let persistor = persistStore(store);
  return { store, persistor };
};
