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
    fetch("http://192.168.86.25:3009", {

        headers:{ "Content-Type" : "application/json"},
        method: "POST",
        //make sure to serialize your JSON body
        body: JSON.stringify({
          joke:this.state.value,
        }),


    })
    .then( (response) => { 
       console.log("joke logged");
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
