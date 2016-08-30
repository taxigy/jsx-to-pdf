import React, { Component } from 'react';

export default class Assets extends Component {
  render() {
    const {
      assets = []
    } = this.props;

    return (
      <div className="assets">
        <div className="section-title">Assets</div>
        <table className="table">
          <thead>
            <tr>
              <th>Property Type</th>
              <th>Address</th>
              <th>Estimated Value</th>
              <th>Owners</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, key) => (
              <tr
                key={key}>
                <td>{asset.type}</td>
                <td>{asset.address}</td>
                <td>{asset.estimatedValue}</td>
                <td>todo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
