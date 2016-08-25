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
        todo
        <style>{styles}</style>
      </div>
    );
  }
}
