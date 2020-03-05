import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./slices/rootReducer";
import rootSaga from "./sagas/rootSaga";

const isDevelopment = process.env.NODE_ENV !== "production";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (isDevelopment) {
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger({ collapsed: true }));
}

const storeConfig = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: isDevelopment
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeConfig;
