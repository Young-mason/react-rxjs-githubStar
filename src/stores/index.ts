import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./reducer";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
