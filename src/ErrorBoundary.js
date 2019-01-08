import * as Sentry from '@sentry/browser';
import React, { Component } from 'react';

// Sentry.init({
//  dsn: "https://8957f6a7c18a425bb72e3b03bf9ae148@sentry.io/1366381"
// });
// should have been called before using it here
// ideally before even rendering your react app 


export default class ExampleBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return ( <h1 onClick = { () => console.log('error')}> Report feedback </h1> );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}