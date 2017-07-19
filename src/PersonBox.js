import React, { Component } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import PersonForm from './PersonForm';
import style from './style';

class PersonBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadPeopleFromServer = this.loadPeopleFromServer.bind(this);
    this.handlePersonSubmit = this.handlePersonSubmit.bind(this);
  }
  loadPeopleFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handlePersonSubmit(person) {
    let people = this.state.data;
    person.id = Date.now();
    let newPeople = people.concat([person]);
    this.setState({ data: newPeople });
    axios.post(this.props.url, person)
      .catch(err => {
        console.error(err);
        this.setState({ data: people });
      });
  }
  componentDidMount() {
    this.loadPeopleFromServer();
    setInterval(this.loadPeopleFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>People:</h2>
      <PersonList data={ this.state.data }/>
      <PersonForm onPersonSubmit={ this.handlePersonSubmit }/>
      </div>
    )
  }
}

export default PersonBox;
