import React, { Component } from 'react';
import UserInfo from './Components/UserInfo/UersInfo'
import Person from './Components/PersonList/PersonList'
import Form from './Components/Form/form'

import './App.css';

class App extends Component {

  state = {
    Person: [{
      PersonName: 'kailash',
      PersonId: 0,
      Text: 'Something write'
    },
    {
      PersonName: 'Sid',
      PersonId: 1,
      Text: 'Something write'
    },
    {
      PersonName: 'Raja',
      PersonId: 3,
      Text: 'Something write'
    },
    ],
    Count: 0,

    RunnerName: 'Ram'


  }
  ChangeText = (e) => {

    this.setState({
      RunnerName: e.target.value
    })
  }
  handleCount = () => {
    this.setState({
      Count: this.state.Count + 1
    })
  }

  render() {
    return (
      <div className="App">
        <UserInfo name={'Sid'} address="Kharadi" about={'I am a enginer'}
        />
        {this.state.Person.map(per =>
          <Person key={per.PersonId} pid={per.PersonId} pname={per.PersonName}
            ptext={per.Text} />)}
        <button onClick={this.handleCount}>Click</button>
        <p>{this.state.Count}</p>

        <input type='text' value={this.state.RunnerName} name='RunnerName' onChange={this.ChangeText} />
        <p>{this.state.RunnerName}</p>
        <Form />
      </div>
    );

  }

}

export default App;
