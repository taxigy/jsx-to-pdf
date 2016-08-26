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
                  <th>Title</th>
                  <td>{applicant.title}</td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>{applicant.first_name}</td>
                </tr>
                <tr>
                  <th>Middle Name</th>
                  <td>{applicant.middle_name}</td>
                </tr>
                <tr>
                  <th>Surname</th>
                  <td>{applicant.surname}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{applicant.date_of_birth}</td>
                </tr>
                <tr>
                  <th>Mother's Maiden Name</th>
                  <td>{applicant.mother_maiden_name}</td>
                </tr>
                <tr>
                  <th>Marital Status</th>
                  <td>{applicant.marital_status}</td>
                </tr>
                <tr>
                  <th>Ages of Dependants</th>
                  <td>{applicant.ages_of_dependants}</td>
                </tr>
                <tr>
                  <th>Phone No. (h/w/m)</th>
                  <td>{applicant.phone_no}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>{applicant.email_address}</td>
                </tr>
                <tr>
                  <th>Other ID</th>
                  <td>{applicant.other_id}</td>
                </tr>
                <tr>
                  <th>First Home Owner</th>
                  <td>{applicant.first_home_owner}</td>
                </tr>
                <tr>
                  <th>Aust Perm Resident?</th>
                  <td>{applicant.aust_perm_resident}</td>
                </tr>
                <tr>
                  <th>Dependant Spouse</th>
                  <td>{applicant.dependant_spouse}</td>
                </tr>
              </tbody>
            </table>
            <div className="title">Address Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Current Address</th>
                  <td>{applicant.current_address}</td>
                </tr>
                <tr>
                  <th>Date Moved In</th>
                  <td>{applicant.date_moved_in}</td>
                </tr>
                <tr>
                  <th>Residental Status</th>
                  <td>{applicant.residental_status}</td>
                </tr>
                <tr>
                  <th>Postal Address (if different)</th>
                  <td>{applicant.postal_address}</td>
                </tr>
                <tr>
                  <th>Previous Address</th>
                  <td>{applicant.previous_address}</td>
                </tr>
                <tr>
                  <th>Date / Prev. Add.</th>
                  <td>{applicant.date_moved_in_pr_add}</td>
                </tr>
              </tbody>
            </table>
            <div className="title">Income Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Current Employer's Name</th>
                  <td>{applicant.current_employes_name}</td>
                </tr>
                <tr>
                  <th>Start Date</th>
                  <td>{applicant.start_date}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>{applicant.status}</td>
                </tr>
                <tr>
                  <th>Job Title</th>
                  <td>{applicant.job_title}</td>
                </tr>
                <tr>
                  <th>Gross Annual Salary</th>
                  <td>{applicant.gross_annual_salary}</td>
                </tr>
                <tr>
                  <th>Commission</th>
                  <td>{applicant.commission}</td>
                </tr>
                <tr>
                  <th>Employer Address</th>
                  <td>{applicant.employer_address}</td>
                </tr>
                <tr>
                  <th>Name and Number</th>
                  <td>{applicant.contact_details}</td>
                </tr>
                <tr>
                  <th>Rental Income</th>
                  <td>{applicant.rental_income}</td>
                </tr>
                <tr>
                  <th>Family Tax A/B</th>
                  <td>{applicant.family_tax}</td>
                </tr>
                <tr>
                  <th>Other Income</th>
                  <td>{applicant.other_income}</td>
                </tr>
                <tr>
                  <th>Better Rate</th>
                  <td>{applicant.better_rate}</td>
                </tr>
                <tr>
                  <th>End of Fixed Rate</th>
                  <td>{applicant.end_of_fixed_rate}</td>
                </tr>
                <tr>
                  <th>Debt Consolidation</th>
                  <td>{applicant.debt_consolidation}</td>
                </tr>
                <tr>
                  <th>Additional Funds</th>
                  <td>{applicant.additional_funds}</td>
                </tr>
                <tr>
                  <th>Construction</th>
                  <td>{applicant.construction}</td>
                </tr>
                <tr>
                  <th>Lock in Equity</th>
                  <td>{applicant.lock_in_equity}</td>
                </tr>
                <tr>
                  <th>Dislikes Lender</th>
                  <td>{applicant.dislikes_lender}</td>
                </tr>
                <tr>
                  <th>Change Structure</th>
                  <td>{applicant.change_structure}</td>
                </tr>
                <tr>
                  <th>Income Rate</th>
                  <td>{applicant.income_rate}</td>
                </tr>
                <tr>
                  <th>Income Speed</th>
                  <td>{applicant.income_speed}</td>
                </tr>
                <tr>
                  <th>Valuation</th>
                  <td>{applicant.valuation}</td>
                </tr>
                <tr>
                  <th>Property Type</th>
                  <td>{applicant.property_type}</td>
                </tr>
                <tr>
                  <th>Construction Purchase</th>
                  <td>{applicant.construction_purchase}</td>
                </tr>
                <tr>
                  <th>Preapproval</th>
                  <td>{applicant.preapproval}</td>
                </tr>
                <tr>
                  <th>Income Increase</th>
                  <td>{applicant.income_increase}</td>
                </tr>
                <tr>
                  <th>Extra Earner</th>
                  <td>{applicant.extra_earner}</td>
                </tr>
                <tr>
                  <th>Add Inc Source</th>
                  <td>{applicant.add_inc_source}</td>
                </tr>
                <tr>
                  <th>Income Reduce</th>
                  <td>{applicant.income_reduce}</td>
                </tr>
                <tr>
                  <th>School Fees</th>
                  <td>{applicant.school_fees}</td>
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
