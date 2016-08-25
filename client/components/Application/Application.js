import React, { Component } from 'react';
import styles from './Application.scss';

export default class Application extends Component {
  render() {
    const {
      title = 'No title'
    } = this.props;

    return (
      <div className="application">
        <div className="title">{title}</div>
        <style>{styles}</style>
      </div>
    );
  }
}
