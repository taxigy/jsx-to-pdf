import React, {
  Component
} from 'react';

export default class Assets extends Component {
  render() {
    const {
      property_details = [],
      other_assets = []
    } = this.props;

    return (
      <div className="assets">
        <div className="section-title">Property Details</div>
        <table className="table">
          <thead>
            <tr>
              <th>Property Type</th>
              <th>Details</th>
              <th>Estimated Value</th>
              <th>Rental Income</th>
            </tr>
          </thead>
          <tbody>
            {property_details.map((asset, key) => (
              <tr
                key={key}>
                <td>{asset.type}</td>
                <td>{asset.details}</td>
                <td>{asset.estimated_value}</td>
                <td>{asset.rental_income}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="section-title">Other Assets</div>
        <table className="table">
          <thead>
            <tr>
              <th>Asset Type</th>
              <th>Details</th>
              <th>Estimated Value</th>
              <th>Rental Income</th>
            </tr>
          </thead>
          <tbody>
            {other_assets.map((asset, key) => (
              <tr
                key={key}>
                <td>{asset.type}</td>
                <td>{asset.details}</td>
                <td>{asset.estimated_value}</td>
                <td>{asset.rental_income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
