import React, { Component } from 'react';
import ExportList from './ExportList';
import ExportForm from './ExportForm';

class ExportContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div>
        <ExportList data={ this.props.data }/>
        <ExportForm onExportSubmit={ this.props.onExportSubmit }/>
      </div>
    )
  }
}

export default ExportContent;
