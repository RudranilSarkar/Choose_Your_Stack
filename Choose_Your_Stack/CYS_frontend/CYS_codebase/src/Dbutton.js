import './styles.css'
import axios from 'axios'
import React from 'react';

function Dbutton(){
    const handleClick = async() => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    axios({
        url: 'http://107.22.158.98:5000/download', //your url
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Fullstack.zip'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });

    }
    return (
<button className="Download button2" onClick = {() => handleClick()}>Download Template</button>
  );
}
export default Dbutton;