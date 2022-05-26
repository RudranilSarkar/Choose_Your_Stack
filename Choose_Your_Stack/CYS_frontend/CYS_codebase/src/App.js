import React from "react";
import './styles.css';
import Homepage from './Homepage.js'
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

fetch("http://107.22.158.98:5000")
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
        
        <form action="">
          <div>
  <label htmlFor="textbox">Status : {this.state.items}</label>
  </div>
    <div>
      <label htmlFor="textbox">front end port            </label>
      <input type="text" name="f_port" id="f_port"  placeholder="Your Details.."/>
    </div>
    <div>
      <label htmlFor="textbox">backe end port            </label>
      <input type="text" name="detail" id="detail"  placeholder="Your Details.."/>
    </div>
    <Homepage />
  <button className="Download button2" onClick = {() => this.checkConn()}>Download Template</button>
  </form>
);
}
}

export default App;
