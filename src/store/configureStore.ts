import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";

const saga = createSagaMiddleware();
const store = configureStore(
    {
        reducer: {
            // reducers
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
    }
)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;