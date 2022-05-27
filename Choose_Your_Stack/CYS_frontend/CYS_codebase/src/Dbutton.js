import './styles.css'
import axios from 'axios'
import React from 'react';
import FormData from 'form-data';
import { useState } from "react";

const Dbutton=({ f_port, b_port }) => {

    const handleClick = async() => {
    console.log({f_port})
    console.log({b_port})
    var f = `${f_port}`
    var b = `${b_port}`
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var data_send = new FormData();
    data_send.append('f_port', f);
    data_send.append('f_name', 'React');
    data_send.append('b_port', b);
    data_send.append('b_name', 'Flask');
    data_send.append('db_name', 'Postgre');
        axios({
        url: 'http://127.0.0.1:5000/dynamic', //your url
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