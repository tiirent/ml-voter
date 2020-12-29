import React from 'react';
import './App.css';
import redkimmy from './images/redKimmy.png'
import bluekimmy from './images/blueKimmy.png'

class VoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleRedKimmy = this.handleRedKimmy.bind(this);
    this.handleBlueKimmy = this.handleBlueKimmy.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleRedKimmy(event) {
    let baseUrl = "https://gtop100.com/topsites/MapleStory/sitedetails/MapleLegends-The-Old-School-MapleStory-Server-MAC-Compatible-16-9-Client-Summer-Events-87398?vote=1&pingUsername=" + this.state.value;
    window.open(baseUrl, "_blank");
    event.preventDefault();
  }

  handleBlueKimmy(event) {
    let baseUrl = "https://topg.org/maplestory-private-servers/in-605064-" + this.state.value;
    window.open(baseUrl, "_blank");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleRedKimmy}>
        <table>
          <tr>
            <input type="text" value={this.state.value} onChange={this.handleChange}
                    name="maplelegendsid" autocomplete="on"/>
          </tr>
          <tr>
            <img src = {redkimmy} onClick={this.handleRedKimmy}/>
            <img src = {bluekimmy} onClick={this.handleBlueKimmy}/>
          </tr>
        </table>
      </form>
    );
  }
}


export default VoteComponent;
