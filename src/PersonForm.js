import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { player: '', date: '', dkp: '' };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDkpChange = this.handleDkpChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlayerChange(e) {
    this.setState({ player: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }
  handleDkpChange(e) {
    this.setState({ dkp: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let player = this.state.player.trim();
    let date = this.state.date.trim();
    let dkp = this.state.dkp.trim();
    if (!player || !date || !dkp) {
      return;
    }
    this.props.onPersonSubmit({ player: player, date: date, dkp: dkp });
    this.setState({ player: '', date: '', dkp: '' });
    console.log(this.state.data)
  }
  render() {
    return (
      <form style={ style.commentForm } onSubmit={ this.handleSubmit }>

        <input
          type='text'
          placeholder='Player name...'
          style={ style.commentFormText}
          value={ this.state.player }
          onChange={ this.handlePlayerChange } />
        <input
          type='text'
          placeholder='The date...'
          style={ style.commentFormText}
          value={ this.state.date }
          onChange={ this.handleDateChange } />
        <input
          type='text'
          placeholder='The dkp value...'
          style={ style.commentFormText}
          value={ this.state.dkp }
          onChange={ this.handleDkpChange } />
        <input
          type='submit'
          style={ style.commentFormPost }
          value='Post' />
      </form>
    )
  }
}

export default CommentForm;
