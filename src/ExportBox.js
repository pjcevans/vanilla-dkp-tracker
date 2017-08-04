import React, { Component } from 'react';
import axios from 'axios';
import ExportList from './ExportList';
import ExportForm from './ExportForm';
import style from './style';

class ExportBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadExportsFromServer = this.loadExportsFromServer.bind(this);
    this.handleExportSubmit = this.handleExportSubmit.bind(this);
  }
  loadExportsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handleExportSubmit(dkpExport) {
    //Commented out: Display of data mechanics (concat new data before polled)
    // let people = this.state.data;
    // person.id = Date.now();
    // console.log(person)
    // let newPeople = people.concat([person]);
    // this.setState({ data: newPeople });

    console.log(dkpExport)

    // Post the data to mongo to be stored
    axios.post(this.props.url, dkpExport)
      .catch(err => {
        console.error(err);
        // this.setState({ data: people });
      });
  }
  componentDidMount() {
    this.loadExportsFromServer();
    setInterval(this.loadExportsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Exports:</h2>
      <ExportList data={ this.state.data }/>
      <ExportForm onExportSubmit={ this.handleExportSubmit }/>
      </div>
    )
  }
}

export default ExportBox;
