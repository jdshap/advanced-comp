import React, {Component} from 'react';
import './App.css';
import FileSelect from './components/FileSelect';
import HexTable from './components/HexTable';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bytestreamA: [],
      bytestreamB: []
    }
  }

  fileUpdate = (data, target) => {
    this.setState((state) => {
      return{[target]: data}
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Advanced Comp</h1>
        </div>
        <div className="Table">
          <div className="File">
            <FileSelect target={"bytestreamA"} parentCallback={this.fileUpdate}/>
            <HexTable data={this.state.bytestreamA}/>
          </div>
          <div className="File">
            <FileSelect target={"bytestreamB"} parentCallback={this.fileUpdate}/>
            <HexTable data={this.state.bytestreamB}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
