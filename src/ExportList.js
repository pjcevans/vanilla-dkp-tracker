import React, { Component } from 'react';
import Export from './Export';
import style from './style';

class ExportList extends Component {
  render() {
    let commentNodes = this.props.data.map(item => {
      return (
        <Export export={ item } key={ item.date } />
      )
    })
    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}

export default ExportList;
