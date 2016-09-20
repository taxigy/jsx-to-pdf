import React, {
  Component
} from 'react';
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
      property_details = [],
      other_assets = [],
      liabilities = [],
    } = this.props;

    return (
      <html>
        <head>
          <style>{styles}</style>
        </head>
        <body className="index">
          <div className="title">{item.name}</div>
          <Applicants applicants={applicants} />
          <Application application={item} />
          <Assets
            property_details={property_details}
            other_assets={other_assets} />
          <Liabilities liabilities={liabilities} />
        </body>
      </html>
    );
  }
};
