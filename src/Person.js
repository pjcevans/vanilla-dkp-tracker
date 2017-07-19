import React, { Component } from 'react';
import style from './style';

class Person extends Component {
  render() {
    var dkpValues = this.props.person.dkpdata.map(item => {
      return <li>{ item.dkp }</li>
    })

    return (
      <div style={ style.comment }>
        <h3>{this.props.person.player}</h3>
        <ul>{ dkpValues }</ul>
      </div>
    )
  }
}

export default Person;
