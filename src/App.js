import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';
import Radio from './Radio';

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      sortByDOB : false,
      sortByName : false
    }
  }

  render(){return (
    <div className="App">
    <Table></Table>
    </div>
  );
}
}

export default App;
