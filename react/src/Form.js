import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
// const axios = require('axios')



class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      radius: "",
      type: "",
      places: [],
    }
  }

  handleChange = (event) => {
    console.log(event.target.label);

    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state[event.target.label]);
  }

  geocodeRequest = async (e) => {
    e.preventDefault()
    console.log("Maps Reequest!");
    let address = this.state.address
    axios.post('/maps/geocode', {
      address: address
    }).then(res => {
      console.log(res.data);
      this.setState({ latitude: res.data.lat, longitude: res.data.lng })
    })
  }

  nearbyPlacesRequest = async e => {
    e.preventDefault()
    let address = this.state.address || "393 N. WASHINGTON AVE. GOLDEN"


    console.log(`Places Request!`);
    console.log(this.state.places);

    axios.post("/maps/places", {
      address: address,
      latitude: this.state.latitude || 40.0228844,
      longitude: this.state.longitude || -105.2200631,
      radius: this.state.radius || 1000,
      type: this.state.type || "restaurant"
    }).then(res => {
      console.log(res)
      console.log(res.data);

      this.setState({ places: res.data })
    })
      .catch(err => {
        console.log(err);
        console.log("The Front end messed up.");


      })

  }

  distanceRequest = async e => {
    e.preventDefault()
    axios.post("/maps/distance", {
      destination: "blastoff!"
    }).then(response => {
      console.log(response.data);
      console.log(response.status);
      
      console.log(`The reqeuest was a suxxxxess!`);
      
    })
  }
  render() {

    let places = this.state.places.map(place => {
      return (
        <tr>
          <td>
            {place.name}
          </td>
          <td>
            {place.rating}
          </td>
        </tr>)
    })
    let coordsStyle = this.state.latitude ? { display: "block" } : { display: "none" }

    return (

      <div className="Form">
        <form>
          <p>Enter an address to get the Latitude and Longitude.</p>
          <input type="text" name="address" label="address" onChange={this.handleChange} />
          <button onClick={this.geocodeRequest}>Geocode it</button>
          <p>Address: {this.state.address}</p>
          <p style={coordsStyle}>{this.state.latitude}, {this.state.longitude}</p>
          <p style={coordsStyle}>Latitude: {this.state.latitude}</p>
          <p style={coordsStyle}>Longitude: {this.state.longitude}</p>
        </form>
        <form>
          <p>Radius</p>
          <input type="text" name="radius" />
          <p>type</p>
          <select name="type">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button onClick={this.nearbyPlacesRequest}>Get places</button>

          <h3>PLACES:;</h3>
          <table>
            {places}
          </table>

        </form>

        <button onClick={this.distanceRequest}>Distance</button>

      </div>

    )
  }
}

export default Form;
