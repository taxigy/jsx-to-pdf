import React, { Component } from 'react';
import styles from './Applicants.scss';

export default class Applicants extends Component {
  render() {
    const {
      applicants = []
    } = this.props;

    return (
      <div className="applicants">
        <div className="title">Applicants</div>
        {applicants.map((applicant, index) => (
          <div
            key={index}
            className="applicant">
            <div className="title">Personal Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="table-cell-caption">Title</td>
                  <td className="table-cell-value">{applicant.title}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">First Name</td>
                  <td className="table-cell-value">{applicant.first_name}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Middle Name</td>
                  <td className="table-cell-value">{applicant.middle_name}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Surname</td>
                  <td className="table-cell-value">{applicant.surname}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Date of Birth</td>
                  <td className="table-cell-value">{applicant.date_of_birth}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Mother's Maiden Name</td>
                  <td className="table-cell-value">{applicant.mother_maiden_name}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Marital Status</td>
                  <td className="table-cell-value">{applicant.marital_status}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Ages of Dependants</td>
                  <td className="table-cell-value">{applicant.ages_of_dependants}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Phone No. (h/w/m)</td>
                  <td className="table-cell-value">{applicant.phone_no}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Email Address</td>
                  <td className="table-cell-value">{applicant.email_address}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Other ID</td>
                  <td className="table-cell-value">{applicant.other_id}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">First Home Owner</td>
                  <td className="table-cell-value">{applicant.first_home_owner}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Aust Perm Resident?</td>
                  <td className="table-cell-value">{applicant.aust_perm_resident}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Dependant Spouse</td>
                  <td className="table-cell-value">{applicant.dependant_spouse}</td>
                </tr>
              </tbody>
            </table>
            <div className="title">Address Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="table-cell-caption">Current Address</td>
                  <td className="table-cell-value">{applicant.current_address}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Date Moved In</td>
                  <td className="table-cell-value">{applicant.date_moved_in}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Residental Status</td>
                  <td className="table-cell-value">{applicant.residental_status}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Postal Address (if different)</td>
                  <td className="table-cell-value">{applicant.postal_address}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Previous Address</td>
                  <td className="table-cell-value">{applicant.previous_address}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Date / Prev. Add.</td>
                  <td className="table-cell-value">{applicant.date_moved_in_pr_add}</td>
                </tr>
              </tbody>
            </table>
            <div className="title">Income Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="table-cell-caption">Current Employer's Name</td>
                  <td className="table-cell-value">{applicant.current_employes_name}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Start Date</td>
                  <td className="table-cell-value">{applicant.start_date}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Status</td>
                  <td className="table-cell-value">{applicant.status}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Job Title</td>
                  <td className="table-cell-value">{applicant.job_title}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Gross Annual Salary</td>
                  <td className="table-cell-value">{applicant.gross_annual_salary}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Commission</td>
                  <td className="table-cell-value">{applicant.commission}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Employer Address</td>
                  <td className="table-cell-value">{applicant.employer_address}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Name and Number</td>
                  <td className="table-cell-value">{applicant.contact_details}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Rental Income</td>
                  <td className="table-cell-value">{applicant.rental_income}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Family Tax A/B</td>
                  <td className="table-cell-value">{applicant.family_tax}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Other Income</td>
                  <td className="table-cell-value">{applicant.other_income}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Better Rate</td>
                  <td className="table-cell-value">{applicant.better_rate}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">End of Fixed Rate</td>
                  <td className="table-cell-value">{applicant.end_of_fixed_rate}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Debt Consolidation</td>
                  <td className="table-cell-value">{applicant.debt_consolidation}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Additional Funds</td>
                  <td className="table-cell-value">{applicant.additional_funds}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Construction</td>
                  <td className="table-cell-value">{applicant.construction}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Lock in Equity</td>
                  <td className="table-cell-value">{applicant.lock_in_equity}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Dislikes Lender</td>
                  <td className="table-cell-value">{applicant.dislikes_lender}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Change Structure</td>
                  <td className="table-cell-value">{applicant.change_structure}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Income Rate</td>
                  <td className="table-cell-value">{applicant.income_rate}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Income Speed</td>
                  <td className="table-cell-value">{applicant.income_speed}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Valuation</td>
                  <td className="table-cell-value">{applicant.valuation}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Property Type</td>
                  <td className="table-cell-value">{applicant.property_type}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Construction Purchase</td>
                  <td className="table-cell-value">{applicant.construction_purchase}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Preapproval</td>
                  <td className="table-cell-value">{applicant.preapproval}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Income Increase</td>
                  <td className="table-cell-value">{applicant.income_increase}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Extra Earner</td>
                  <td className="table-cell-value">{applicant.extra_earner}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Add Inc Source</td>
                  <td className="table-cell-value">{applicant.add_inc_source}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">Income Reduce</td>
                  <td className="table-cell-value">{applicant.income_reduce}</td>
                </tr>
                <tr>
                  <td className="table-cell-caption">School Fees</td>
                  <td className="table-cell-value">{applicant.school_fees}</td>
                </tr>
              </tbody>
            </table>
            <div className={applicant.additional_comments ? 'title' : 'hidden'}>Additional Comments</div>
            <div className="text">{applicant.additional_comments}</div>
          </div>
        ))}
        <style>{styles}</style>
      </div>
    );
  }
}
