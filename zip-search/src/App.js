import React from 'react'
import './App.css';
import City from './components/City'
import ZipSearchField from './components/ZipSearchField'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      cities: [],
    };
  };

  getCitiesList(locations) {
    return locations.map((location) => {
      location.key = location['RecordNumber']
      return <City {...location} />
    });
  };

  zipChanged = (e) => {
    if (e.target.value.length !== 5) { return }

    fetch('http://ctp-zip-api.herokuapp.com/zip/' + e.target.value)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cities: this.getCitiesList(res),
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          cities: ['No Results']
        });
      })
    this.setState({
      zipCode: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header row justify-content-center">
          <div className="col-4 ">
            <h2>Zip Code Search</h2>
          </div>
        </div>

        <div className="row justify-content-center results">
          <div className="col-4">
            <ZipSearchField zipChanged={(e) => this.zipChanged(e)} />
            {this.state.cities}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
