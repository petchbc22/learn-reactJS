
import React, { Component } from 'react'
import Members from './members'
import Member from './member'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Members>
          <h1>Test Send from value </h1>
          <h2>eiei</h2>
          <Member name="x1" />
          <Member name="x2" />
        </Members>
      </div>
    );
  }
}
