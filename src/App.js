import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Attempting post");
    fetch("http://localhost:3009", {
        method: "POST",
        //make sure to serialize your JSON body
        body: {
          joke:"HYAHAHHA",
        },

    })
    .then( (response) => { 
       console.log(response);
    });
    
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="grid">
              
              <form onSubmit={this.handleSubmit}>
              <label>
                Enter Joke:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              </form>
        </div>
      </div>
    );
  }
}



export default App;
