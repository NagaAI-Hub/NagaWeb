import {configureStore} from '@reduxjs/toolkit';
import screenSizeReducer from './features/screenSize/screenSizeSlice';
import menuOpenReducer from './features/isMenuOpen/isMenuOpenSlice';
import limitsSliceReducer from './features/limits/limitsSlice';
import { modelsApi } from './api/modelsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      screenSize: screenSizeReducer,
      isMenuOpen: menuOpenReducer,
      [modelsApi.reducerPath]: modelsApi.reducer,
      limits: limitsSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(modelsApi.middleware),
  });

  // Set up listeners for RTK Query
  setupListeners(store.dispatch);

  return store;
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']