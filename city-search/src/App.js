import React from 'react'
import './App.css';
import City from './components/City'
import CitySearchField from './components/CitySearchField'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      zipCodes: [],
    };
  };

  cityChanged = (e) => {
    // check if letter or space
    const letters = /^[A-Za-z\s]+$/;
    if (!e.target.value.match(letters)) { return }

    fetch('http://ctp-zip-api.herokuapp.com/city/' + e.target.value.toUpperCase())
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({
          zipCodes: res,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          zipCodes: ['No Results']
        });
      })
    this.setState({
      city: e.target.value,
    })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header row justify-content-center">
          <div className="col-4">
            <h2>City Search</h2>
          </div>
        </div>

        <div className="row justify-content-center results">
          <div className="col-4">
            <CitySearchField cityChanged={(e) => this.cityChanged(e)} />
            <City city={this.state.city} zipCodes={this.state.zipCodes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
