import React, { Component } from 'react';
import Root from './components/Root/Root';

export default class Html extends Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/build/styles.css" />
        </head>
        <body>
          <Root />
        </body>
      </html>
    );
  }
};
