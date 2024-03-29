import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { limitsApi } from "./api/limitsApi";
import { modelsApi } from "./api/modelsApi";
import menuOpenReducer from "./features/isMenuOpen/isMenuOpenSlice";
import screenSizeReducer from "./features/screenSize/screenSizeSlice";

export const makeStore = () => {
	const store = configureStore({
		reducer: {
			screenSize: screenSizeReducer,
			isMenuOpen: menuOpenReducer,
			[modelsApi.reducerPath]: modelsApi.reducer,
			[limitsApi.reducerPath]: limitsApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(modelsApi.middleware, limitsApi.middleware),
	});

	// Set up listeners for RTK Query
	setupListeners(store.dispatch);

	return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
