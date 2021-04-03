import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { AccessTokenReducer } from './accessToken';

const rootReducer = combineReducers({
    token: AccessTokenReducer,
});

const composeEnhancers =
    typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) :
        compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;