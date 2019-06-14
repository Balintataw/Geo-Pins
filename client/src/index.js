import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Splash from "./pages/Splash";
import Context from './store/context';
import reducer from './store/reducer';
import ProtectedRoute from './routes/ProtectedRoute';
import './fontawesome';

import "mapbox-gl/dist/mapbox-gl.css";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const wslink = new WebSocketLink({
    uri: process.env.NODE_ENV === 'production' ? 
         process.env.REACT_APP_APOLLO_WEBSOCKET_URL_PROD :
         process.env.REACT_APP_APOLLO_WEBSOCKET_URL_DEV,
    options: {
        reconnect: true
    }
});

const client = new ApolloClient({
    link: wslink,
    cache: new InMemoryCache()
});

const Root = () => {
    const initialState = useContext(Context);
    const [ state, dispatch ] = useReducer(reducer, initialState)
    console.log("STATE", {state})

    return (
        <Router>
            <ApolloProvider client={client}>
                <Context.Provider value={{ state, dispatch }}>
                    <Switch>
                        <ProtectedRoute exact path="/" component={App} />
                        <Route path="/login" component={Splash} />
                    </Switch>
                </Context.Provider>
            </ApolloProvider>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
