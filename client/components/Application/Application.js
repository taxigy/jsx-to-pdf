import React, { Component } from 'react';

const labels = {
  better_rate: 'Better Rate',
  end_of_fixed_rate: 'End of Fixed Rate',
  debt_consolidation: 'Debt Consolidation',
  additional_funds: 'Additional Funds',
  construction: 'Construction',
  lock_in_equity: 'Lock in Equity',
  dislikes_lender: 'Dislikes Lender',
  change_structure: 'Change Structure',
  income_rate: 'Income Rate',
  income_speed: 'Income Speed',
  valuation: 'Valuation',
  property_type: 'Property Type',
  construction_purchase: 'Construction Purchase',
  preapproval: 'Preapproval',
  income_increase: 'Income Increase',
  extra_earner: 'Extra Earner',
  add_inc_source: 'Add Inc Source',
  income_reduce: 'Income Reduce',
  school_fees: 'School Fees'
};

export default class Application extends Component {
  render() {
    const {
      application: {
        additional_comments,
        ...application
      } = {}
    } = this.props;

    return (
      <div className="application">
        <div className="table-title">Objectives</div>
        <ol>
          {Object.keys(labels).filter(key => application[key]).map((key, index) => (
            <li key={index}>
              {labels[key]}
            </li>
          ))}
        </ol>
        <div className={additional_comments ? 'section-title' : 'hidden'}>Additional Comments</div>
        <div>{additional_comments}</div>
      </div>
    );
  }
}
