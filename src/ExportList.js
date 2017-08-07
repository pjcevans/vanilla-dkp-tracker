import React, { Component } from 'react';
import Export from './Export';
import style from './style';

class ExportList extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  searchFilter(event) {
    // Ensure all player names are treated as proper nouns regardless of input case
    let caseLowered = event.target.value.substr(0,20).toLowerCase();
    let properNouned = caseLowered.charAt(0).toUpperCase() + caseLowered.slice(1);
    this.setState({
      searchTerm: properNouned
    }, () => {
      // Call function to update output based on search term
      // this.updateGallery();
      console.log(this.state.searchTerm)
    });
  }

  render() {
    // let exportNodes = this.props.data.map(item => {
    //   return (
    //     <Export export={ item } key={ item.date } />
    //   )
    // })

    let exportNodes = this.props.data.map(item => {
      let parsedData = JSON.parse(item.dkpdata)
      return (
        <p key={item.date}>{parsedData[this.state.searchTerm]}</p>
      )
    })
    console.log(exportNodes)
    return (
      <div style={ style.commentList }>
        <div id="searchbar">
          <input type="text"
           id="searchbar"
           placeholder="Search for player"
           value={this.state.searchTerm}
           onChange={this.searchFilter.bind(this)} />
        </div>
        { (exportNodes) ? exportNodes : <p>No player selected</p>}
      </div>
    )
  }
}

export default ExportList;
