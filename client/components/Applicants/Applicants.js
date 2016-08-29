import React, { Component } from 'react';
import moment from 'moment';

const {
  DATE_FORMAT = 'MMMM DD, YYYY'
} = process.env;

export default class Applicants extends Component {
  render() {
    const {
      applicants = []
    } = this.props;

    if (applicants.length === 2) {
      const left = applicants[0];
      const right = applicants[1];

      return (
        <div className="applicants">
          <div className="section-title">Applicants</div>
          <div className="applicant">
            <div className="table-title">Personal Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{left.title}</td>
                  <td>{right.title}</td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>{left.first_name}</td>
                  <td>{right.first_name}</td>
                </tr>
                <tr>
                  <th>Middle Name</th>
                  <td>{left.middle_name}</td>
                  <td>{right.middle_name}</td>
                </tr>
                <tr>
                  <th>Surname</th>
                  <td>{left.surname}</td>
                  <td>{right.surname}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{moment(left.date_of_birth).format(DATE_FORMAT)}</td>
                  <td>{moment(right.date_of_birth).format(DATE_FORMAT)}</td>
                </tr>
                <tr>
                  <th>Mother's Maiden Name</th>
                  <td>{left.mother_maiden_name}</td>
                  <td>{right.mother_maiden_name}</td>
                </tr>
                <tr>
                  <th>Marital Status</th>
                  <td>{left.marital_status}</td>
                  <td>{right.marital_status}</td>
                </tr>
                <tr>
                  <th>Ages of Dependants</th>
                  <td>{left.ages_of_dependants}</td>
                  <td>{right.ages_of_dependants}</td>
                </tr>
                <tr>
                  <th>Phone No. (h/w/m)</th>
                  <td>{left.phone_no}</td>
                  <td>{right.phone_no}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>{left.email_address}</td>
                  <td>{right.email_address}</td>
                </tr>
                <tr>
                  <th>Other ID</th>
                  <td>{left.other_id}</td>
                  <td>{right.other_id}</td>
                </tr>
                <tr>
                  <th>First Home Owner</th>
                  <td>{left.first_home_owner ? 'Yes' : 'No'}</td>
                  <td>{right.first_home_owner ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th>Aust Perm Resident?</th>
                  <td>{left.aust_perm_resident ? 'Yes' : 'No'}</td>
                  <td>{right.aust_perm_resident ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th>Dependant Spouse</th>
                  <td>{left.dependant_spouse ? 'Yes' : 'No'}</td>
                  <td>{right.dependant_spouse ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
            <div className="table-title">Address Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Current Address</th>
                  <td>{left.current_address}</td>
                  <td>{right.current_address}</td>
                </tr>
                <tr>
                  <th>Date Moved In</th>
                  <td>{moment(left.date_moved_in).format(DATE_FORMAT)}</td>
                  <td>{moment(right.date_moved_in).format(DATE_FORMAT)}</td>
                </tr>
                <tr>
                  <th>Residental Status</th>
                  <td>{left.residental_status}</td>
                  <td>{right.residental_status}</td>
                </tr>
                <tr>
                  <th>Postal Address (if different)</th>
                  <td>{left.postal_address}</td>
                  <td>{right.postal_address}</td>
                </tr>
                <tr>
                  <th>Previous Address</th>
                  <td>{left.previous_address}</td>
                  <td>{right.previous_address}</td>
                </tr>
                <tr>
                  <th>Date / Prev. Add.</th>
                  <td>{moment(left.date_moved_in_pr_add).format(DATE_FORMAT)}</td>
                  <td>{moment(right.date_moved_in_pr_add).format(DATE_FORMAT)}</td>
                </tr>
              </tbody>
            </table>
            <div className="table-title">Income Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Current Employer's Name</th>
                  <td>{left.current_employes_name}</td>
                  <td>{right.current_employes_name}</td>
                </tr>
                <tr>
                  <th>Start Date</th>
                  <td>{moment(left.start_date).format(DATE_FORMAT)}</td>
                  <td>{moment(right.start_date).format(DATE_FORMAT)}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>{left.status}</td>
                  <td>{right.status}</td>
                </tr>
                <tr>
                  <th>Job Title</th>
                  <td>{left.job_title}</td>
                  <td>{right.job_title}</td>
                </tr>
                <tr>
                  <th>Gross Annual Salary</th>
                  <td>{left.gross_annual_salary}</td>
                  <td>{right.gross_annual_salary}</td>
                </tr>
                <tr>
                  <th>Commission</th>
                  <td>{left.commission}</td>
                  <td>{right.commission}</td>
                </tr>
                <tr>
                  <th>Employer Address</th>
                  <td>{left.employer_address}</td>
                  <td>{right.employer_address}</td>
                </tr>
                <tr>
                  <th>Name and Number</th>
                  <td>{left.contact_details}</td>
                  <td>{right.contact_details}</td>
                </tr>
                <tr>
                  <th>Rental Income</th>
                  <td>{left.rental_income}</td>
                  <td>{right.rental_income}</td>
                </tr>
                <tr>
                  <th>Family Tax A/B</th>
                  <td>{left.family_tax}</td>
                  <td>{right.family_tax}</td>
                </tr>
                <tr>
                  <th>Other Income</th>
                  <td>{left.other_income}</td>
                  <td>{right.other_income}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="applicants">
          <div className="section-title">Applicants</div>
          {applicants.map((applicant, index) => (
            <div
              key={index}
              className="applicant">
              <div className="table-title">Personal Details</div>
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
                    <td>{moment(applicant.date_of_birth).format(DATE_FORMAT)}</td>
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
                    <td>{applicant.first_home_owner ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <th>Aust Perm Resident?</th>
                    <td>{applicant.aust_perm_resident ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <th>Dependant Spouse</th>
                    <td>{applicant.dependant_spouse ? 'Yes' : 'No'}</td>
                  </tr>
                </tbody>
              </table>
              <div className="table-title">Address Details</div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Current Address</th>
                    <td>{applicant.current_address}</td>
                  </tr>
                  <tr>
                    <th>Date Moved In</th>
                    <td>{moment(applicant.date_moved_in).format(DATE_FORMAT)}</td>
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
                    <td>{moment(applicant.date_moved_in_pr_add).format(DATE_FORMAT)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="table-title">Income Details</div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Current Employer's Name</th>
                    <td>{applicant.current_employes_name}</td>
                  </tr>
                  <tr>
                    <th>Start Date</th>
                    <td>{moment(applicant.start_date).format(DATE_FORMAT)}</td>
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
                </tbody>
              </table>
            </div>
          ))}
        </div>
      );
    }
  }
}
