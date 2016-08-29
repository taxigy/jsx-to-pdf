import React, { Component } from 'react';

export default class Liabilities extends Component {
  render() {
    const {
      liabilities = []
    } = this.props;

    return (
      <div className="liabilities">
        <div className="section-title">Liabilities</div>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Lender</th>
              <th>Limit</th>
              <th>Balance</th>
              <th>Monthly Payment</th>
            </tr>
          </thead>
          <tbody>
            {liabilities.map((liability, index) => (
              <tr key={index}>
                <td>{liability.type}</td>
                <td>{liability.lender}</td>
                <td>{liability.limit}</td>
                <td>{liability.balance}</td>
                <td>{liability.monthlyPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
