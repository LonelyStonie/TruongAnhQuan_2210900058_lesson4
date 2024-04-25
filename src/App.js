import React, { Component } from 'react';
import TAQEventform1 from './components/TAQ_eventform1';
import TAQEventform2 from './components/TAQ_eventform2';
import TAQEventform3 from './components/TAQ-eventform3';
import TAQEvenform4 from './components/TAQ_evenform4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>event form demo</h1>
        <TAQEventform1/>
        <TAQEventform2/>
        <TAQEventform3/>
        <TAQEvenform4 name="Truong Anh Quan"/>
      </div>
    );
  }
}

export default App;
