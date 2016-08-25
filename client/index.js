import React, { Component } from 'react';
import Application from './components/Application/Application';
import Applicants from './components/Applicants/Applicants';
import Assets from './components/Assets/Assets';
import Liabilities from './components/Liabilities/Liabilities';
import styles from './index.scss';

export default class Html extends Component {
  render() {
    const {
      item = {},
      applicants = [],
      assets = [],
      liabilities = []
    } = this.props;

    return (
      <html>
        <body className="index">
          <Application title={item.name} />
          <Applicants applicants={applicants} />
          <Assets assets={assets} />
          <Liabilities liabilites={liabilities} />
        </body>
      </html>
    );
  }
};
