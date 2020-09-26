import React from 'react';
import './App.css';

class VoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let baseUrl = "https://gtop100.com/topsites/MapleStory/sitedetails/MapleLegends-The-Old-School-MapleStory-Server-MAC-Compatible-16-9-Client-Summer-Events-87398?vote=1&pingUsername=" + this.state.value;
    window.open(baseUrl, "_blank")
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Account:</label>
        <input type="text" autocomplete="on" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default VoteComponent;
