import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import SetEncryptStore from "./storeEncryption";
import { shopApi } from "../../Services/apiCalls";
import { setupListeners } from "@reduxjs/toolkit/query";

// transforms: [SetEncryptStore],

const persistConfig = {
  key: "root",
  storage,
  blacklist: [shopApi.reducerPath],
};
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [shopApi.reducerPath]: shopApi.reducer,
});
const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(shopApi.middleware),
});
export const persistor = persistStore(store);
//rtk Queryfor refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
