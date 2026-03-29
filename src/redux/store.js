import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageImport from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const storage = storageImport?.default ?? storageImport;

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persistor = persistStore(store);