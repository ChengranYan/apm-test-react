import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';

import * as Sentry from '@sentry/browser';

Sentry.init({
 dsn: "https://8957f6a7c18a425bb72e3b03bf9ae148@sentry.io/1366381"
});

ReactDOM.render( <ErrorBoundary><App / ></ErrorBoundary>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
