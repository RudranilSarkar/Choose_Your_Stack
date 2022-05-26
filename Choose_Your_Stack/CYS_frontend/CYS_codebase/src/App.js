import "./styles.css";
import Homepage from "./Homepage"
import React from "react";

const a = {}
a.test= "hello"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        items: null,
        DataisLoaded: false
    };
}
  checkConn(){  
  fetch("http://172.31.16.46:5000")
  .then(response => response.text())
  .then(result =>{this.setState({
    items : result,
    DataisLoaded :true
  })})
  .catch(error => console.log('error', error));
  }
  
downloadFile(){
  fetch('http://192.168.10.100:5000/download', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `Fullstack.zip`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
}

render(){ 
  a.test=this.state.items
  return (

    <form action="">
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
  <label htmlFor="textbox">{a.test}</label>
  </form>
  );
}
}
export default App;