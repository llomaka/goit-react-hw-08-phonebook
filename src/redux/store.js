import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import { authReducer } from './authorization';
import filterReducer from './filterSlice';

const filterPersistConfig = {
  key: 'filter',
  storage,
}
const authorizationPersistConfig = {
  key: 'authorization',
  storage,
  whitelist: ['token'],
}
const filterPersistedReducer = persistReducer(filterPersistConfig, filterReducer);
const authorizationPersistedReducer = persistReducer(authorizationPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authorization: authorizationPersistedReducer,
    filter: filterPersistedReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
