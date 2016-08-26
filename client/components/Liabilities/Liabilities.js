import React, { Component } from 'react';
import styles from './Liabilities.scss';

export default class Liabilities extends Component {
  render() {
    const {
      liabilities = []
    } = this.props;

    return (
      <div className="liabilities">
        <div className="title">Liabilities</div>
        <table className="table">
          <thead>
            <tr>
              <td>Type</td>
              <td>Lender</td>
              <td>Limit</td>
              <td>Balance</td>
              <td>Monthly Payment</td>
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
        <style>{styles}</style>
      </div>
    );
  }
}
