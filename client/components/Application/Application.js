import React, { Component } from 'react';

export default class Application extends Component {
  render() {
    const {
      application: {
        better_rate,
        end_of_fixed_rate,
        debt_consolidation,
        additional_funds,
        construction,
        lock_in_equity,
        dislikes_lender,
        change_structure,
        income_rate,
        income_speed,
        valuation,
        property_type,
        construction_purchase,
        preapproval,
        income_increase,
        extra_earner,
        add_inc_source,
        income_reduce,
        school_fees,
        additional_comments
      } = {}
    } = this.props;

    return (
      <div className="application">
        <table className="table">
          <tbody>
            <tr>
              <th>Better Rate</th>
              <td>{better_rate ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>End of Fixed Rate</th>
              <td>{end_of_fixed_rate ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Debt Consolidation</th>
              <td>{debt_consolidation ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Additional Funds</th>
              <td>{additional_funds ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Construction</th>
              <td>{construction ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Lock in Equity</th>
              <td>{lock_in_equity ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Dislikes Lender</th>
              <td>{dislikes_lender ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Change Structure</th>
              <td>{change_structure ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Income Rate</th>
              <td>{income_rate ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Income Speed</th>
              <td>{income_speed ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Valuation</th>
              <td>{valuation ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Property Type</th>
              <td>{property_type ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Construction Purchase</th>
              <td>{construction_purchase ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Preapproval</th>
              <td>{preapproval ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Income Increase</th>
              <td>{income_increase ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Extra Earner</th>
              <td>{extra_earner ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Add Inc Source</th>
              <td>{add_inc_source ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Income Reduce</th>
              <td>{income_reduce ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>School Fees</th>
              <td>{school_fees ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <div className={additional_comments ? 'section-title' : 'hidden'}>Additional Comments</div>
        <div>{additional_comments}</div>
      </div>
    );
  }
}
