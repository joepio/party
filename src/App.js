import React, { Component } from 'react';
import moment from 'moment';

import logo from './logo.svg';
import './App.css';

import DateForm from './Components/DateForm';
import CoolDatesList from './Components/CoolDatesList';
import { getRelevantPartyDates } from './coolDateGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceDate: null,
    };
    this.handleDateAdded = this.handleDateAdded.bind(this);
  }

  handleDateAdded(date) {
    this.setState({
      sourceDate: date,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Party Excuse Generator</h1>
        <DateForm
          onSubmit={this.handleDateAdded}
        />
        {this.state.sourceDate &&
          <CoolDatesList
            dates={getRelevantPartyDates(this.state.sourceDate)}
          />
        }
      </div>
    );
  }
}

export default App;
