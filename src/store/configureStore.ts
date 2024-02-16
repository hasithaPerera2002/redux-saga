import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import getReducer from "../slices/getSlice.ts";
import {getSaga} from "../saga/getSaga.ts";

const saga = createSagaMiddleware();
const store = configureStore(
    {
        reducer: {
            posts:getReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
    }
)
saga.run(getSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;