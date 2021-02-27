import React from 'react'
import './App.css';
import City from './components/City'
import Output from './components/Output';
import ZipSearchField from './components/ZipSearchField'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '1',
      cities: [],
      locations: [],
    };
  }

  testCity(obj) {
    const loc = {
        "RecordNumber": "240",
        "Zipcode": "10016",
        "ZipCodeType": "STANDARD",
        "City": "NEW YORK",
        "State": "NY",
        "LocationType": "PRIMARY",
        "Lat": "40.71",
        "Long": "-73.99",
        "Xaxis": "0.20",
        "Yaxis": "-0.72",
        "Zaxis": "0.65",
        "WorldRegion": "NA",
        "Country": "US",
        "LocationText": "New York, NY",
        "Location": "NA-US-NY-NEW YORK",
        "Decommisioned": "false",
        "TaxReturnsFiled": "31673",
        "EstimatedPopulation": "40683",
        "TotalWages": "1412438620",
        "Notes": ""
      }

    const location = <City {...loc}/>;
    // console.log(location);
    return location;
  };

  getCitiesList(locations) {
    const cities = locations.map((location) => <City {...location} />)
    // console.log(cities[0])
    return cities;
  };

  test = (e) => {
    console.log(this.state.zipCode);
    this.setState = ({
      zipCode: e.target.value,
    });
    console.log(this.state.zipCode)
  }

  zipChanged = (e) => {
    if (e.target.value.length !== 5) { return }

    this.setState = ({
      zipCode: 'test'
    });

    fetch('http://ctp-zip-api.herokuapp.com/zip/' + e.target.value)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        
        // console.log(this.getCitiesList(res));
        // this.setState = ({
        //   cities: this.getCitiesList(res),
        //   locations: [1, 2 , 3],
        // });
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header row justify-content-center">
          <div className="col-4 ">
            <h2>Zip Code Search</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-4">
            <ZipSearchField zipChanged={(e) => this.test(e)} />
            <Output locations={this.state.locations}/>
            <p> {this.state.zipCode} </p>
            {this.testCity()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
