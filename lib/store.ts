import {configureStore} from '@reduxjs/toolkit';
import screenSizeReducer from './features/screenSize/screenSizeSlice';
import menuOpenReducer from './features/isMenuOpen/isMenuOpenSlice';
import modelsSliceReducer from './features/models/modelsSlice';
export const makeStore = () => {

return configureStore({
        reducer: {
            screenSize: screenSizeReducer,
            isMenuOpen: menuOpenReducer,
            models: modelsSliceReducer,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
