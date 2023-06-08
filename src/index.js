import { createRoot } from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { getUsersReducer, searchReducer } from "./redux/reducers";
import "./index.css";
import App from "./container/App";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

const rootReducer = combineReducers({ getUsersReducer, searchReducer });

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
