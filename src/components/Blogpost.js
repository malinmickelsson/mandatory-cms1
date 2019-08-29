import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';


const Blogpost = () => {
    
    
    const [results, setResult] = useState([]);
        useEffect(() => {
        
            
    axios.get("http://192.168.99.102:8080/api/collections/get/Svampar")
                   
    
     .then(res => {
                        
    console.log(res.data.entries);
                        
                       
     setResult(res.data.entries)
                    })
                    
    
    .catch(function (error) {
                        
    alert('Error fetching the api')
                    });
            
      
      }, [])
        
    
    console.log("logging results: ");
       
     console.log(results);
       
    
     return (
            
    <div>
               
     <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Post</th>/th>
                    </tr>
                    {results.map((result) =>
                        <tr key={result._id}>
                            <td>{result.title}</td>
                            <td>{result.name}</td>
                            <td>{result.date}</td>
                            <td>{result.post}/5</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
    export default Blogpost;