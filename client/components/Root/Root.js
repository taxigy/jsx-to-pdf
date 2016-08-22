import React, { Component } from 'react';
import styles from './Root.scss';

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <h1>Hello</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ABC</th>
              <th>DEF</th>
              <th>XYZ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>some data</td>
              <td>some data</td>
              <td>some data</td>
            </tr>
            <tr>
              <td>some data</td>
              <td>some data</td>
              <td>some data</td>
            </tr>
            <tr>
              <td>some data</td>
              <td>some data</td>
              <td>some data</td>
            </tr>
          </tbody>
        </table>
        <style>{styles}</style>
      </div>
    );
  }
}
