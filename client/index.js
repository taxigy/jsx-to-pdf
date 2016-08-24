import React, { Component } from 'react';
import Application from './components/Application/Application';
import Applicants from './components/Applicants/Applicants';
import Assets from './components/Assets/Assets';
import Liabilities from './components/Liabilities/Liabilities';

export default class Html extends Component {
  render() {
    const {
      applicationId,
      item = {},
      applicants,
      assets,
      liabilities
    } = this.props;

    return (
      <html>
        <head>
          <link rel="stylesheet" href="/build/styles.css" />
        </head>
        <body>
          <Application title={item.name} />
          <Applicants applicants={applicants} />
          <Assets assets={assets} />
          <Liabilities liabilites={liabilities} />
          {applicationId}
        </body>
      </html>
    );
  }
};
