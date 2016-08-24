import React, { Component } from 'react';
import styles from './Assets.scss';

export default class Assets extends Component {
  render() {
    const {
      assets = []
    } = this.props;

    return (
      <div className="assets">
        <div className="title">Assets</div>
        {assets.map((asset, key) => (
          <div
            key={key}
            className="asset">
            whatev
          </div>
        ))}
        <style>{styles}</style>
      </div>
    );
  }
}
