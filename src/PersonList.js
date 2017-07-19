import React, { Component } from 'react';
import Person from './Person';
import style from './style';

class PersonList extends Component {
  render() {
    let commentNodes = this.props.data.map(person => {
      return (
        <Person person={ person } key={ person.player } />
      )
    })
    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}

export default PersonList;
