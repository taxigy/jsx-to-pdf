import React, {
  Component
} from 'react';
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
                  <th>Home Phone Number</th>
                  <td>{left.phone_home}</td>
                  <td>{right.phone_home}</td>
                </tr>
                <tr>
                  <th>Work Phone Number</th>
                  <td>{left.phone_work}</td>
                  <td>{right.phone_work}</td>
                </tr>
                <tr>
                  <th>Mobile Phone Number</th>
                  <td>{left.phone_mobile}</td>
                  <td>{right.phone_mobile}</td>
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
                  <th>Permanent Resident in Australia</th>
                  <td>{left.permanent_resident ? 'Yes' : 'No'}</td>
                  <td>{right.permanent_resident ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th>Dependant Spouse</th>
                  <td>{left.dependant_spouse ? 'Yes' : 'No'}</td>
                  <td>{right.dependant_spouse ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
            <div className="table-title">Current Address Details</div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Current Address</th>
                  <td>{left.current_address}</td>
                  <td>{right.current_address}</td>
                </tr>
                <tr>
                  <th>Date Moved into Current Address</th>
                  <td>{moment(left.date_moved_into_current_address).format(DATE_FORMAT)}</td>
                  <td>{moment(right.date_moved_into_current_address).format(DATE_FORMAT)}</td>
                </tr>
                <tr>
                  <th>Residential Status</th>
                  <td>{left.residential_status}</td>
                  <td>{right.residential_status}</td>
                </tr>
                <tr>
                  <th>Postal Address (if different)</th>
                  <td>{left.postal_address}</td>
                  <td>{right.postal_address}</td>
                </tr>
              </tbody>
            </table>
            <div className="table-title">Previous Addresses</div>
            <table className="table">
              <tbody>
                {new Array(Math.max(left.previous_addresses instanceof Array && left.previous_addresses.length, right.previous_addresses instanceof Array && right.previous_addresses.length)).fill().map((x, index) => [(
                  <tr key={`${index}-address`}>
                    <th>Previous Address</th>
                    <td>{left.previous_addresses && left.previous_addresses[index] && left.previous_addresses[index].address}</td>
                    <td>{right.previous_addresses && right.previous_addresses[index] && right.previous_addresses[index].address}</td>
                  </tr>
                ), (
                  <tr key={`${index}-date_moved`}>
                    <th>Date Moved into Previous Address</th>
                    <td>{left.previous_addresses && left.previous_addresses[index] && moment(left.previous_addresses[index].date_moved_into_address).format(DATE_FORMAT)}</td>
                    <td>{right.previous_addresses && right.previous_addresses[index] && moment(right.previous_addresses[index].date_moved_into_address).format(DATE_FORMAT)}</td>
                  </tr>
                )])}
              </tbody>
            </table>
            <div className="table-title">Employment History</div>
            <table className="table">
              <tbody>
                {new Array(Math.max(left.employment_history instanceof Array && left.employment_history.length, right.employment_history instanceof Array && right.employment_history.length)).fill().map((x, index) => [(
                  <tr key={`${index}-employer_name`}>
                    <th>Employer Name</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].employer_name}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].employer_name}</td>
                  </tr>
                ), (
                  <tr key={`${index}-start_date`}>
                    <th>Start Date</th>
                    <td>{left.employment_history && left.employment_history[index] && moment(left.previous_addresses[index].start_date).format(DATE_FORMAT)}</td>
                    <td>{right.employment_history && right.employment_history[index] && moment(right.previous_addresses[index].start_date).format(DATE_FORMAT)}</td>
                  </tr>
                ), (
                  <tr key={`${index}-end_date`}>
                    <th>End Date</th>
                    <td>{left.employment_history && left.employment_history[index] && moment(left.previous_addresses[index].end_date).format(DATE_FORMAT)}</td>
                    <td>{right.employment_history && right.employment_history[index] && moment(right.previous_addresses[index].end_date).format(DATE_FORMAT)}</td>
                  </tr>
                ), (
                  <tr key={`${index}-status`}>
                    <th>Employment Status</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].status}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].status}</td>
                  </tr>
                ), (
                  <tr key={`${index}-job_title`}>
                    <th>Occupation / Job Title</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].job_title}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].job_title}</td>
                  </tr>
                ), (
                  <tr key={`${index}-gross_annual_salary`}>
                    <th>Gross Annual Salary</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].gross_annual_salary}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].gross_annual_salary}</td>
                  </tr>
                ), (
                  <tr key={`${index}-bonus`}>
                    <th>Bonus</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].bonus}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].bonus}</td>
                  </tr>
                ), (
                  <tr key={`${index}-commission`}>
                    <th>Commission</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].commission}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].commission}</td>
                  </tr>
                ), (
                  <tr key={`${index}-address`}>
                    <th>Employer Address</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].address}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].address}</td>
                  </tr>
                ), (
                  <tr key={`${index}-contact_details`}>
                    <th>Employer Contact Details</th>
                    <td>{left.employment_history && left.employment_history[index] && left.employment_history[index].contact_details}</td>
                    <td>{right.employment_history && right.employment_history[index] && right.employment_history[index].contact_details}</td>
                  </tr>
                )])}
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
                    <th>Home Phone Number</th>
                    <td>{applicant.phone_home}</td>
                  </tr>
                  <tr>
                    <th>Work Phone Number</th>
                    <td>{applicant.phone_work}</td>
                  </tr>
                  <tr>
                    <th>Mobile Phone Number</th>
                    <td>{applicant.phone_mobile}</td>
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
                    <th>Permanent Resident in Australia</th>
                    <td>{applicant.permanent_resident ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <th>Dependant Spouse</th>
                    <td>{applicant.dependant_spouse ? 'Yes' : 'No'}</td>
                  </tr>
                </tbody>
              </table>
              <div className="table-title">Current Address Details</div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Current Address</th>
                    <td>{applicant.current_address}</td>
                  </tr>
                  <tr>
                    <th>Date Moved into Current Address</th>
                    <td>{moment(applicant.date_moved_into_current_address).format(DATE_FORMAT)}</td>
                  </tr>
                  <tr>
                    <th>Residential Status</th>
                    <td>{applicant.residential_status}</td>
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
                    <th>Date Moved into Previous Address</th>
                    <td>{moment(applicant.date_moved_into_previous_address).format(DATE_FORMAT)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="table-title">Previous Addresses</div>
              <table className="table">
                <tbody>
                  {applicant.previous_addresses instanceof Array && applicant.previous_addresses.map((address, index) => [(
                    <tr key={`${index}-address`}>
                      <th>Previous Address</th>
                      <td>{address.address}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-date_moved`}>
                      <th>Date Moved into Previous Address</th>
                      <td>{moment(address.date_moved_into_address).format(DATE_FORMAT)}</td>
                    </tr>
                  )])}
                </tbody>
              </table>
              <div className="table-title">Employment History</div>
              <table className="table">
                <tbody>
                  {applicant.employment_history instanceof Array && applicant.employment_history.map((employment, index) => [(
                    <tr key={`${index}-employer_name`}>
                      <th>Employer Name</th>
                      <td>{employment.employment_history[index].employer_name}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-start_date`}>
                      <th>Start Date</th>
                      <td>{moment(employment.start_date).format(DATE_FORMAT)}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-end_date`}>
                      <th>End Date</th>
                      <td>{moment(employment.end_date).format(DATE_FORMAT)}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-status`}>
                      <th>Employment Status</th>
                      <td>{employment.status}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-job_title`}>
                      <th>Occupation / Job Title</th>
                      <td>{employment.job_title}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-gross_annual_salary`}>
                      <th>Gross Annual Salary</th>
                      <td>{employment.gross_annual_salary}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-bonus`}>
                      <th>Bonus</th>
                      <td>{employment.bonus}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-commission`}>
                      <th>Commission</th>
                      <td>{employment.commission}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-address`}>
                      <th>Employer Address</th>
                      <td>{employment.address}</td>
                    </tr>
                  ), (
                    <tr key={`${index}-contact_details`}>
                      <th>Employer Contact Details</th>
                      <td>{employment.contact_details}</td>
                    </tr>
                  )])}
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
