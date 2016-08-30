import React, { Component } from 'react';

const labels = {
  objective_better_rate: 'Better Rate',
  objective_end_of_fixed_rate: 'End of Fixed Rate',
  objective_debt_consolidation: 'Debt Consolidation',
  objective_additional_funds: 'Additional Funds',
  objective_construction: 'Construction',
  objective_lock_in_equity: 'Lock in Equity',
  objective_dislikes_lender: 'Dislikes Lender',
  objective_change_structure: 'Change Structure',
  objective_income_rate: 'Income Rate',
  objective_income_speed: 'Income Speed',
  objective_valuation: 'Valuation',
  objective_property_type: 'Property Type',
  objective_construction_purchase: 'Construction Purchase',
  objective_preapproval: 'Preapproval',
  objective_income_increase: 'Income Increase',
  objective_extra_earner: 'Extra Earner',
  objective_add_inc_source: 'Add Inc Source',
  objective_income_reduce: 'Income Reduce',
  objective_school_fees: 'School Fees'
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
