import React from "react";
import './App.css';

class App extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: null,
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {

fetch("http://localhost:8011/connection")
  .then(response => response.text())
  .then(result =>{this.setState({
    items : result,
    DataisLoaded :true
  })})
  .catch(error => console.log('error', error));
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
        <div className = "App">
        <h1> { this.state.items } </h1> 
    </div>
);
}
}

export default App;
