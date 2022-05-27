import './styles.css'
import axios from 'axios'
import React from 'react';
import FormData from 'form-data';


const Dbutton=({ f_port, b_port, f_name, b_name, db_name}) => {

    const handleClick = async() => {
    var f = `${f_port}`
    var b = `${b_port}`
    var f_n = `${f_name}`
    var b_n = `${b_name}`
    var db_n = `${db_name}`


    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var data_send = new FormData();
    data_send.append('f_port', f);
    data_send.append('f_name', f_n);
    data_send.append('b_port', b);
    data_send.append('b_name', b_n);
    data_send.append('db_name',db_n);
    console.log(data_send)
        axios({
        url: 'http://107.22.158.98:5000/dynamic', //your url
        method: 'POST',
        responseType: 'blob',
        data: data_send, // important
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